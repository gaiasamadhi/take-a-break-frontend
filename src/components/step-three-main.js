import progressBar from "../assets/Progress-bar-step-three.svg";
import PrimaryButton from "./primary-button";
import { Link } from "react-router-dom";
import arrow from "../assets/Arrow.png";
import "../Activity.css";
import "./step-three-main.css";

function StepThreeMain({ shortBreak, mediumBreak, longBreak }) {
  console.log(shortBreak);
  console.log(mediumBreak);
  console.log(longBreak);
  return (
    <div className="step-three-main-wrapper">
      <div className="step-three-main-row">
        <img
          className="step-three-main-row__image"
          src={progressBar}
          alt="Progress bar"
        />
      </div>
      <div className="step-three-main-row">
        <div className="step-three-main-row__content">
          <p style={{ textAlign: "center" }}>
            Do you want a break recommendation based on a <u>goal</u> or your{" "}
            <u>preferences</u>?
          </p>
        </div>
      </div>
      <div className="step-three-main-row">
        <div className="step-three-main-row__column">
          <Link to="/step-four/symptoms">
            <PrimaryButton text="Based on goal" />
          </Link>
          <Link to="/step-four/preferences">
            <PrimaryButton text="Based on preferences" />
          </Link>
        </div>
      </div>
      <div>
        <Link to="/step-two">
          <button className="back">
            <img src={arrow} style={{ width: "27px", height: "18px" }} />
            Back to last step
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StepThreeMain;
