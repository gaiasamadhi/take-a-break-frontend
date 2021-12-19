import "./header-restart.css";
import logo from "../assets/logo6.png";
function HeaderRestart({ theme, setTheme }) {

//To Do - try to implement dark mode in the header component without having the button on the homepage

  return (
    <div className="header-restart-wrapper">
      <nav className="header-restart-row">
        <img src={logo} className="logo" />
        <li className="header-restart-row__team">Recharge</li>
        {/* <button
          onClick={(e) =>
            setTheme(
              theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
            )
          }
          style={{ width: "75px", background: "white", cursor: "pointer" }}
        >
          {theme.mode === "dark" ? "Light Theme" : "Dark Theme"}
        </button> */}
      </nav>
    </div>
  );
}

export default HeaderRestart;
