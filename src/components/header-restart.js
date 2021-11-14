import "./header-restart.css";
import logo from "../assets/logo6.png"
function HeaderRestart() {
  return (
    <div className="header-restart-wrapper">
      <nav className="header-restart-row">
        <img src={logo} className="logo"/><li className="header-restart-row__team">Recharge</li>
      </nav>
    </div>
  );
}

export default HeaderRestart;
