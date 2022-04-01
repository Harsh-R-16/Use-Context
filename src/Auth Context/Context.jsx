import React, { useEffect } from "react";
import { Provider } from "./auth-context";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { Home, About, Contact, Users, User } from "./Temp";

export default function Context() {
  /*   let [c, setC] = React.useState(0);
useEffect(() => {
    setTimeout(() => {
      // setC((c) => c + 5);
      // above will give correct result because it preserve the latest value so that is good practice for useState.
      setC(c + 5); // this will five ans only 5 because for this previous state is always 0 or initial state
    }, 3000);
  }, []);
*/
  return (
    <Provider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>

      {/* <h1>Count: {c}</h1>
      <button onClick={() => setC(c + 1)}>Click</button> */}
    </Provider>
  );
}
