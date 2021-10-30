import progressBar from "../assets/Progress-bar-step-four.svg";
import paper from "../assets/Saly-saly.png";
import PrimaryButton from "./primary-button";
import SecondaryButton from "./secondary-button";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./symptoms-main.css";

const goalAPI = "https://recharge-backend1.herokuapp.com/symptoms";

function SymptomsMain({ activity }) {
  const [goal, setGoal] = useState([]);
  const [checked, setChecked] = useState([]);
  //   console.log(goal);
  useEffect(() => {
    axios.get(goalAPI).then(
      (response) => {
        setGoal(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  //   console.log(activity)
  const filteredbyGoal = activity.filter(
    (a) =>
      a.symptoms[0].name.includes(checked[0]) ||
      a.symptoms[0].name.includes(checked[1])
  );
  const [randomGoal, setRandomGoal] = useState([]);
  const handleCheck = (e) => {
    setChecked([...checked, e.target.value]);
    setRandomGoal(filteredbyGoal);
  };
  console.log(filteredbyGoal);
  console.log(randomGoal);
  //   console.log(activity[0].symptoms[0].name.includes('Feel more energetic'))
  //   console.log(filteredbyGoal)
  return (
    <>
    <div className="symptoms-main-wrapper">
      {activity && goal ? (
        <>
          <div className="symptoms-main-row">
            <img
              className="symptoms-main-wrapper__image"
              src={progressBar}
              alt="Progress bar"
            />
          </div>
          <div className="symptoms-main-row">
            <div className="symptoms-main-row__content">
              Select{" "}
              <span className="symptoms-main-row__content__underline">one</span>{" "}
              symptom you are currently experiencing:
            </div>
          </div>
          <div className="big-checkbox">
            <div className="symptoms-main-checkbox">
              {goal.length ? (
                goal.map((g) => (
                  <div className="goal">
                    <input
                      className="browse-symptoms-main-row__input"
                      onChange={handleCheck}
                      type="checkbox"
                      name={g.name}
                      value={g.name}
                      id="0"
                    ></input>
                    <label className="browse-symptoms-main-row__label">
                      {g.name}
                    </label>
                  </div>
                ))
              ) : (
                <h1>Loading</h1>
              )}
            </div>
          </div>
          <div>
            <Link
              to={`/activity/${
                filteredbyGoal.length
                  ? filteredbyGoal[
                      Math.floor(Math.random() * filteredbyGoal.length)
                    ]._id
                  : "616d66855fbae6e46f05c7aa"
              }`}
            > <div>
              <PrimaryButton text="Confirm goals" />
              </div>
            </Link>
          </div>
          <div>
            
            </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
    <Link to="/step-three">
    <SecondaryButton text="Back to previous question" />
  </Link>
  </>
  );
}

export default SymptomsMain;
