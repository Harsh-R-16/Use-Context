import { useState, createContext } from "react";

let AuthContext = createContext();
export { AuthContext };

let AuthContextProvider = ({ children }) => {
  let [l, setL] = useState(false);
  let [c, setC] = useState(0);
  let lHandler = () => {
    setL(!l);
  };
  let cHandler = () => {
    setC(c + 1);
  };
  let authContext = {
    login: l,
    lHandler: lHandler,
    count: c,
    cHandler: cHandler,
  };
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
