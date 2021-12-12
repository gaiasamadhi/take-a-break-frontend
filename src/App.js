import "./pages/start";
import "./App.css";
import Routes from "./routes";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#3E2D5A" : "#F1EEF8"};
    color: ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")}
  }
  iframe, .timer {
    box-shadow: ${(props) => props.theme.mode === "dark" ? "none" : "-15px -15px 30px #fafbff, 15px 15px 30px #cfc8db"}
  }
  .breakDescriptionContainer {
    box-shadow: ${(props) => props.theme.mode === "dark" ? "none" : "15px 15px 30px #cfc8db"}
  }
  .breakDescriptionContainer p, .breakDescriptionContainer h2 {
    color: #000
  }
`;
function App() {
  const [theme, setTheme] = useState({ mode: "light" });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle setTheme={setTheme} />
      <div className="App">
      <button
        onClick={(e) =>
          setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" })
        }
        style={{width: '75px', background: "white", cursor: 'pointer'}}
      >
        {theme.mode === "dark" ? "Light Theme" : "Dark Theme"}
      </button>
        <Routes theme={theme} setTheme={setTheme} />
       
      </div>
    </ThemeProvider>
  );
}

export default App;
