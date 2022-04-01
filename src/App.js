import "./App.css";
import Main from "./Components/Main";
import Context from "./Auth Context/Context";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <BrowserRouter>
        <Context />
      </BrowserRouter>
    </div>
  );
}

export default App;
