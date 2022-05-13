import { Route, Routes } from "react-router-dom";
import "./App.css";
import MenuBar from "./components/MenuBar/MenuBar";
import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <MenuBar />
    </div>
  );
}

export default App;
