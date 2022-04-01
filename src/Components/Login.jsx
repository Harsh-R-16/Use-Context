import { useContext } from "react";
import { AuthContext } from "../Context/auth-context";

import React from "react";

export default function Login() {
  let { login, lHandler, count } = useContext(AuthContext);
  //   console.log(login);
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>{count}</h1>
      <h1>{login ? "Logged In" : "Not Logged In"}</h1>
      <button onClick={lHandler}>Toggle</button>
    </div>
  );
}
