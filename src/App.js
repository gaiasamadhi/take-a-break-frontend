import "./pages/start";
import "./App.css";
import Routes from "./routes";
import { Link } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";
import logo from "./assets/logo6.png";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#3E2D5A" : "#F1EEF8"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")}
  }
  iframe, .timer {
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "none"
        : "-15px -15px 30px #fafbff, 15px 15px 30px #cfc8db"}
  }
  .breakDescriptionContainer {
    box-shadow: ${(props) =>
      props.theme.mode === "dark" ? "none" : "15px 15px 30px #cfc8db"};
    background-color: ${(props) => props.theme.mode === "dark" ? "#3E2D5A" : "#fff"};
    border: ${(props) => props.theme.mode === "dark" ? "1px solid #fff" : "none"}
  }
  .breakDescriptionContainer p, .breakDescriptionContainer h2 {
    color: ${(props) => props.theme.mode === "dark" ? "#fff" : "#000"}
  }
`;
function App() {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle setTheme={setTheme} />
      <div className="App">
        <div className="appHeader">
          <span>
          <label className="toggleTheme">
            <input
              type="checkbox"
              onChange={(e) =>
                e.target.checked
                  ? setTheme({ mode: "dark" })
                  : setTheme({ mode: "light" })
              }
            />
            <span className="modeSlider roundToggle"></span>
          </label>
          <h6 style={{ margin: "0px 20px", fontSize: "10px" }}>
            {theme.mode === "dark"
              ? "Switch to Light Theme"
              : " Switch to Dark Theme"}
          </h6>
          </span>
          <span className="recharge">
          <li className="header-restart-row__team">Recharge</li>
            <Link to="/" style={{margin: '0px'}} >
          <img src={logo} className="logo" />
          </Link>
          </span>
        </div>
        <Routes theme={theme} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
