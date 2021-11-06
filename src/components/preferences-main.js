import progressBar from "../assets/Progress-bar-preferences.svg";
import PrimaryButton from "./primary-button";
import "../Activity.css";
import arrow from "../assets/Arrow.png";
import { Link } from "react-router-dom";
import HeaderRestart from "./header-restart";

import "./preferences-main.css";
import ToggleSwitch from "./toggle-switch";

function PreferencesMain() {
  return (
    <div className="preference-page">
      <HeaderRestart />
      <div className="preferences-main-wrapper">
        <div className="preferences-main-row">
          <img
            className="preferences-main-wrapper__image"
            src={progressBar}
            alt="Progress bar"
          />
        </div>
        <h1>Choose a side for each prompt:</h1>
        <div className="preferences-main-row">
          <div className="preferences-main-row__content">
            <div className="preferences-main-row__content__text">Physical</div>
            <div className="preferences-main-row__content__text">Mindful</div>
            <div className="preferences-main-row__content__text">Indoor</div>
            <div className="preferences-main-row__content__text">Guided</div>
            <div className="preferences-main-row__content__text">Hype Up</div>
          </div>
          <div className="preferences-main-row__content">
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
            <ToggleSwitch />
          </div>
          <div className="preferences-main-row__content">
            <div className="preferences-main-row__content__text">Mental</div>
            <div className="preferences-main-row__content__text">Mindless</div>
            <div className="preferences-main-row__content__text">Outdoor</div>
            <div className="preferences-main-row__content__text">Self led</div>
            <div className="preferences-main-row__content__text">Calm down</div>
          </div>
        </div>
        <PrimaryButton text="Confirm preferences" />
      </div>
      <Link to="/step-three">
      <button className="back">
          <img src={arrow} style={{ width: "27px", height: "18px" }} />
          Back to last step
        </button>
      </Link>
    </div>
  );
}

export default PreferencesMain;
