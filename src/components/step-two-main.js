import progressBar from "../assets/Progress-bar-step-two.svg";
import saly from "../assets/Saly-greeting.png";
import PrimaryButton from "./primary-button";
import SecondaryButton from "./secondary-button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./step-two-main.css";
// import { SyncLoader } from 'react-spinners/SyncLoader'
function StepTwoMain({ activity, shortBreak, mediumBreak, longBreak }) {
  const [randomActivity, setRandomActivity] = useState([]);

  console.log(shortBreak);
  console.log(mediumBreak);
  console.log(longBreak);

  useEffect(() => {
    if (shortBreak.length) {
      setRandomActivity(shortBreak);
    } else if (mediumBreak.length) {
      setRandomActivity(mediumBreak);
    } else {
      setRandomActivity(longBreak);
    }
  }, []);
  const filteredByDuration =
    randomActivity[Math.floor(Math.random() * randomActivity.length)];
  console.log(filteredByDuration);
  return (
    <div className="step-two-main-wrapper">
      {randomActivity.length ? (
        <>
          <div className="step-two-main-row">
            <img
              className="step-two-main-row__image"
              src={progressBar}
              alt="Progress bar"
            />
          </div>
          <div className="step-two-main-row">
            <div className="step-two-main-row__content">
              Next, do you want a{" "}
              <span className="step-two-main-row__content__underline">
                random break activity
              </span>{" "}
              or a{" "}
              <span className="step-two-main-row__content__underline">
                recommendation
              </span>{" "}
              based on answers to a short questionnaire?{" "}
            </div>
          </div>
          <div className="step-two-main-row">
            <div className="step-two-main-row__column">
              <Link to={`/activity/${filteredByDuration._id}`}>
                <PrimaryButton text="Random activity" />
              </Link>
              <Link to="/step-three">
                <PrimaryButton text="Recommended activity" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
      <div className="prev">
        <Link to="/step-one">
          <SecondaryButton text="Back to previous question" />
        </Link>
      </div>
    </div>
  );
}

export default StepTwoMain;
