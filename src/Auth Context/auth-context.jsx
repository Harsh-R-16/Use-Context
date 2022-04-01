import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";

let Context = createContext();
let Provider = ({ children }) => {
  let navigate = useNavigate();
  let [isAuth, setIsAuth] = React.useState(false);
  let [token, setToken] = React.useState("");
  let login = (token) => {
    setIsAuth(true);
    setToken(token);
    navigate("/");
  };
  let logout = () => setIsAuth(false);
  let context = {
    isAuth,
    token,
    login,
    logout,
  };
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export { Context, Provider };
