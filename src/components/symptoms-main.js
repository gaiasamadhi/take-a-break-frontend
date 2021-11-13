import progressBar from "../assets/Progress-bar-step-four.svg";
import PrimaryButton from "./primary-button";
import "../Activity.css";
import arrow from "../assets/Arrow.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./symptoms-main.css";
import HeaderRestart from "./header-restart";
const goalAPI = "https://recharge-backend1.herokuapp.com/symptoms";

function SymptomsMain({ activity, shortBreak, mediumBreak, longBreak }) {

  const [goal, setGoal] = useState([]);
  const [checked, setChecked] = useState([]);
  const [filteredbyGoal, setFilteredbyGoal] = useState([])
  

  console.log(shortBreak)
  // console.log(mediumBreak)
  // console.log(longBreak)
  const filter = () => {
    if(shortBreak.length){
        setFilteredbyGoal(shortBreak.filter((a)=> a.symptoms[0].name.includes(checked[0]) || a.symptoms[0].name.includes(checked[1])))
     } else if(mediumBreak.length){
       setFilteredbyGoal(mediumBreak.filter((a)=> a.symptoms[0].name.includes(checked[0]) || a.symptoms[0].name.includes(checked[1])))
     } else {
       setFilteredbyGoal(longBreak.filter((a)=> a.symptoms[0].name.includes(checked[0]) || a.symptoms[0].name.includes(checked[1])))
     }
    }
  

  useEffect(async() => {
    axios.get(goalAPI).then(
      (response) => {
        setGoal(response.data);
      },
      (error) => {
        console.log(error);
      }
    );

  }, []);

  const handleCheck =async (e) => {
     setChecked([...checked, e.target.value])
    // setRandomGoal(filteredbyGoal);
    // filter()
  };
  console.log(checked)
 
  
  console.log(filteredbyGoal)
  return (
    <div className="goal-page">
      <HeaderRestart />
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
                <span className="symptoms-main-row__content__underline">
                  one
                </span>{" "}
                goal you would like to work towards for this break:
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
        {/* UNCOMMENT LINK, REDIRECT TO ACTIVITY AFTER FIXING SETFILTEREDBYGOAL */}
            <div onClick={filter}>
              {/* <Link 
                to={`/activity/${
                  filteredbyGoal.length
                    ? filteredbyGoal[
                        Math.floor(Math.random() * filteredbyGoal.length)
                      ]._id
                    : "616d66855fbae6e46f05c7aa"
                }`}
              > */}
                {" "}
                <div>
                  <PrimaryButton onClick={filter} text="Confirm goal" />
                </div>
              {/* </Link> */}
            </div>
            <div></div>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <div>
      <Link to="/step-three">
        <button className="back">
          <img src={arrow} style={{ width: "27px", height: "18px" }} />
          Back to last step
        </button>
      </Link>
      </div>
    </div>
  );
}

export default SymptomsMain;
