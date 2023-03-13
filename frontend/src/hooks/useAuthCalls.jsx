import { useDispatch } from "react-redux";
import {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  fetchFail,
} from "../features/authSlice";
import useAxios, { axiosPublic } from "./useAxios";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useLoginContext } from "../context/LoginProvider";

const useAuthCalls = () => {
  const { setBox, setSepet, kasa, setCash, setSiparis, siparis } =
    useLoginContext();
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, setUser } = useLoginContext();
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("account/auth/login/", userInfo);

      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      setUser({ ...user, masa: data.user.username });
      if (data.user.username === "kasa") {
        navigate("/kasa/");
      } else {
        navigate("/menu/");
      }
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Login can not be performed");
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosPublic.post("account/auth/logout/");
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };
  const postMenuData = async (title, price, image) => {
    try {
      if (user?.masa === "1") {
        await axiosWithToken.post(`menu/masa-1/`, { title, price, image });
      } else if (user?.masa === "2") {
        await axiosWithToken.post(`menu/masa-2/`, { title, price, image });
      } else if (user?.masa === "3") {
        await axiosWithToken.post(`menu/masa-3/`, { title, price, image });
      } else if (user?.masa === "4") {
        await axiosWithToken.post(`menu/masa-4/`, { title, price, image });
      }

      toastSuccessNotify("Siparişiniz alındı.");
      setBox([]);
    } catch (err) {
      toastErrorNotify("Hatalı ekleme");
    }
  };

  const siparisMenuData = async () => {
    if (user.masa === "1") {
      const data = await axiosWithToken(`menu/masa-1/`);
      setSepet(data.data);
    } else if (user.masa === "2") {
      const data = await axiosWithToken(`menu/masa-2/`);
      setSepet(data.data);
    } else if (user.masa === "3") {
      const data = await axiosWithToken(`menu/masa-3/`);
      setSepet(data.data);
    } else if (user.masa === "4") {
      const data = await axiosWithToken(`menu/masa-4/`);
      setSepet(data.data);
    }
  };
  const getKasaData = async () => {
    if (kasa?.masa === "1") {
      const data = await axiosWithToken("menu/masa-1/");
      setCash(data.data);
    } else if (kasa?.masa === "2") {
      const data = await axiosWithToken("menu/masa-2/");
      setCash(data.data);
    } else if (kasa?.masa === "3") {
      const data = await axiosWithToken("menu/masa-3/");
      setCash(data.data);
    } else if (kasa?.masa === "4") {
      const data = await axiosWithToken("menu/masa-4/");
      setCash(data.data);
    }
  };
  const kasaDelData = async () => {
    if (kasa?.masa === "1") {
      await axiosWithToken.delete(`menu/masa-1/`);
    } else if (kasa?.masa === "2") {
      await axiosWithToken.delete(`menu/masa-2/`);
    } else if (kasa?.masa === "3") {
      await axiosWithToken.delete(`menu/masa-3/`);
    } else if (kasa?.masa === "4") {
      await axiosWithToken.delete(`menu/masa-4/`);
    }
  };

  const siparisUyari = () => {
    if (user?.masa === "1") {
      setSiparis({ ...siparis, masa: "1" });
    } else if (user?.masa === "2") {
      setSiparis({ ...siparis, masa: "2" });
    } else if (user?.masa === "3") {
      setSiparis({ ...siparis, masa: "3" });
    } else if (user?.masa === "4") {
      setSiparis({ ...siparis, masa: "4" });
    }
  };
  return {
    login,
    logout,
    postMenuData,
    siparisMenuData,
    getKasaData,
    kasaDelData,
    siparisUyari,
  };
};

export default useAuthCalls;
