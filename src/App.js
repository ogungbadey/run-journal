import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AddRun from "./components/AddRun/AddRun";
import Form from "./components/Form/Form";
import DropDown from "./components/HOC/DropDown/DropDown";
import RequireAuth from "./components/HOC/DropDown/RequireAuth";
import MenuBar from "./components/MenuBar/MenuBar";
import NavBar from "./components/NavBar/NavBar";
import { useAuth } from "./context/AuthContext";
import { useTheme } from "./context/ThemeContext";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Run from "./Pages/Run";

function App() {
  const location = useLocation();
  const { user } = useAuth();
  let state = location.state;
  const { theme } = useTheme();
  const { darkMode, themeColor } = theme;
  console.log(themeColor);
  // let background = location.state && location.state.background
  // console.log( background);
  // const [state, setState] = useState({backgroundLocation: location.state})
  return (
    <div
      className="App"
      style={{
        ...themeColor,
        backgroundColor: darkMode ? "rgb(49, 47, 47)" : "#e9eff4",
      }}
    >
      <>
        <NavBar />
        <div className="App-wrapper">
          <Routes location={state?.backgroundLocation || location}>
            <Route path="/" exact element={<RequireAuth><Home/></RequireAuth>} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/new-run"
              element={<RequireAuth children={<Run />} />}
            />
          </Routes>

          {state?.backgroundLocation && (
            <Routes>
              <Route
                path="/new-run"
                element={
                  <RequireAuth
                    children={<DropDown children={<Form navTo={-1} />} />}
                  />
                }
              />
            </Routes>
          )}
        </div>
        {user && <AddRun />}
        {user && <MenuBar />}
      </>
    </div>
  );
}

export default App;
