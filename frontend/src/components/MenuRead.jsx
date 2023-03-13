import React, { useEffect } from "react";
import { useLoginContext } from "../context/LoginProvider";
import { toastSuccessNotify } from "../helper/ToastNotify";
import useAuthCalls from "../hooks/useAuthCalls";
import useAxios from "../hooks/useAxios";

const MenuRead = () => {
  const { axiosWithToken } = useAxios();
  const { setBox, wait, box } = useLoginContext();
  const { user, sepet } = useLoginContext();
  const { siparisMenuData, getKasaData } = useAuthCalls();

  const handleDelClick = async (id) => {
    if (user.masa === "1") {
      await axiosWithToken.delete(`menu/masa-1/${id}/`);
      setBox([]);
    } else if (user?.masa === "2") {
      await axiosWithToken.delete(`menu/masa-2/${id}/`);
      setBox([]);
    } else if (user?.masa === "3") {
      await axiosWithToken.delete(`menu/masa-3/${id}/`);
      setBox([]);
    } else if (user?.masa === "4") {
      await axiosWithToken.delete(`menu/masa-4/${id}/`);
      setBox([]);
    }
    toastSuccessNotify("Siparişiniz silindi.");
  };
  useEffect(() => {
    siparisMenuData();
    getKasaData();
  }, [box]);
  return (
    <div>
      {sepet?.map((item) => {
        const { id, title, price } = item;
        return (
          <>
            <div className="sepet-menu">
              <div className="sepet-menu-div">
                <h5>{title}</h5>
              </div>
              <div className="sepet-menu-div">
                <h5>{price} ₺</h5>
              </div>
              <div className="sepet-menu-div">
                {wait !== "3" && (
                  <button
                    className="btn-edit-del"
                    onClick={() => handleDelClick(id)}
                  >
                    Sil
                  </button>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MenuRead;
