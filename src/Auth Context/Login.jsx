import React from "react";
import { Context } from "./auth-context";

export default function Login() {
  let { login } = React.useContext(Context);
  let func = (e) => {
    e.preventDefault();
    let data = {
      email: e.target.elements[0].value,
      password: e.target.elements[1].value,
    };
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        login(res.token);
      });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form action="" id="login" onSubmit={func}>
        <input
          type="email"
          name=""
          id=""
          placeholder="enter your email"
          required
        />
        <br />
        <input
          type="password"
          name=""
          id=""
          placeholder="enter your password"
          required
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
}
