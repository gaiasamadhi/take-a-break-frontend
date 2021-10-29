import PrimaryButton from "./primary-button";
import "./start-main.css";
import read from "../assets/Photo-one.png";
import { Link } from "react-router-dom";

function StartMain() {
  return (
    <div className="main-wrapper">
      <div className="main-row">
        <h1 className="title">Breaks reinvented</h1>
        <h2>Take a break and bounce back!</h2>
      </div>

      <div className="main-row1">
        <Link to="/step-one">
          <PrimaryButton text="Start my break"></PrimaryButton>
        </Link>
      </div>
    </div>
  );
}

export default StartMain;
