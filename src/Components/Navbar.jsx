import { useContext } from "react";
import { AuthContext } from "../Context/auth-context";

export default function Navbar() {
  let { login, count } = useContext(AuthContext);

  return (
    <div>
      {login.toString()} {count}
    </div>
  );
}
