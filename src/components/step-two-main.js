import progressBar from "../assets/Progress-bar-step-two.svg";
import PrimaryButton from "./primary-button";
import arrow from "../assets/Arrow.png";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "./step-two-main.css";
import Loader from "react-loader-spinner";

function StepTwoMain({ shortBreak, mediumBreak, longBreak }) {
  const [randomActivity, setRandomActivity] = useState([]);
  const history = useHistory();

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
  console.log(randomActivity);
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
              <Link
                onClick={() => history.push("/step-three")}
                to="/step-three"
              >
                <PrimaryButton text="Recommended activity" />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="loader">
          <Loader type="ThreeDots" color="#58417C" height={100} width={100} />
        </div>
      )}
      <div className="prev">
        <Link to="/step-one">
          <button className="back">
            <img src={arrow} style={{ width: "27px", height: "18px" }} />
            Back to last step
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StepTwoMain;
