import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/auth-context";

export default function Counter() {
  let { count, cHandler, login } = useContext(AuthContext);

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>{login.toString()}</h1>
      <h1>{count}</h1>
      <button onClick={cHandler}>Click</button>
    </div>
  );
}
