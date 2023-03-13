import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

//! 1-) Creating Login Context
export const LoginContext = createContext();

//! 2-) Providing
const LoginProvider = ({ children }) => {
  // props.children
  const [user, setUser] = useState({ masa: "" });
  const [wait, setWait] = useState("1");
  const [siparis, setSiparis] = useState([]);
  const [kasa, setKasa] = useState({ masa: "" });
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [send, setSend] = useState([]);
  const [box, setBox] = useState([]);
  const [swic, setSwic] = useState("pide");
  const [cash, setCash] = useState([]);
  const [sepet, setSepet] = useState([]);
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const values = {
    user,
    setUser,
    siparis,
    setSiparis,
    kasa,
    setKasa,
    wait,
    setWait,
    sepet,
    setSepet,
    cash,
    setCash,
    userInfo,
    setUserInfo,
    send,
    setSend,
    admin,
    setAdmin,
    box,
    setBox,
    swic,
    setSwic,
  };
  return (
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
  );
};

//! Consuming Custom Hook
export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
