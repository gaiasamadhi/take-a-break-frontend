import "./header-restart.css";
import logo from "../assets/logo6.png";
function HeaderRestart({ theme, setTheme }) {

//To Do - try to implement dark mode in the header component without having the button on the homepage

  return (
    <div className="header-restart-wrapper">
      <nav className="header-restart-row">
        <li className="header-restart-row__team">Recharge</li>
        <img src={logo} className="logo" />
      </nav>
    </div>
  );
}

export default HeaderRestart;
