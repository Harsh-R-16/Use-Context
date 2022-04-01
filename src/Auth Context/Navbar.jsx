import { useState, useContext } from "react";
import { Context } from "./auth-context";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  let { isAuth, toggleAuth } = useContext(Context);

  return (
    <>
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </>
  );
}
