import progressBar from "../assets/Progress-bar-preferences.svg";
import PrimaryButton from "./primary-button";
import "../Activity.css";
import arrow from "../assets/Arrow.png";
import { Link } from "react-router-dom";
import HeaderRestart from "./header-restart";
import "./preferences-main.css";
import ToggleSwitch from "./toggle-switch";
import { useState } from 'react'; 

function PreferencesMain({ shortBreak, mediumBreak, longBreak }) {
  console.log(shortBreak);
  console.log(mediumBreak);
  console.log(longBreak);
  const [filteredbyPreference, setFilteredbyPreference] = useState([])
  const [checkedPreference, setCheckedPreference] = useState([])

  const preferences1 = ["Physical", "Mindful", "Indoor", "Guided", "Hype Up"];
  const preferences2 = [
    "Mental",
    "Mindless",
    "Outdoor",
    "Self led",
    "Calm down",
  ];
  const preferences = [
     ["Physical", "Mental"],
    ["Mindful", "Mindless"],
     ["Indoor", "Outdoor"],
     ["Guided", "Self led"],
     ["Hype up", "Calm down"],
  ];
  const handleCheck = (e) => {
    if (e.target.checked) {
      setCheckedPreference(e.target.name);
    } else{
      setCheckedPreference(e.target.value)
    }        
  };
  const confirmPreference = () => {
    if(shortBreak.length){
      setFilteredbyPreference(shortBreak.filter((a)=> a.preference[0].includes(checkedPreference[0]) || a.preference[0].includes(checkedPreference[1])))
      return  <Link to={`/activity/${
          filteredbyPreference.length
            ? filteredbyPreference[
                Math.floor(Math.random() * filteredbyPreference.length)
              ]._id
            : "616d66855fbae6e46f05c7aa"
        }`}/>
      } else if(mediumBreak.length){
        setFilteredbyPreference(mediumBreak.filter((a)=> a.preference[0].includes(checkedPreference[0]) || a.preference[0].includes(checkedPreference[1])))
     } else {
      setFilteredbyPreference(longBreak.filter((a)=> a.preference[0].includes(checkedPreference[0]) || a.preference[0].includes(checkedPreference[1])))
     }
  }
  console.log(filteredbyPreference)
  console.log(checkedPreference)
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
            {preferences1.map((p) => (
              <div className="preferences-main-row__content__text">{p}</div>
            ))}
          </div>
          <div className="preferences-main-row__content">
            {preferences.map((p) => (
              <label className="switch">
                <input onChange={handleCheck} name={p[1]} value={p[0]} type="checkbox" />
                <span className="slider round"></span>
              </label>
            ))}
          </div>
          <div className="preferences-main-row__content">
            {preferences2.map((p) => (
              <div className="preferences-main-row__content__text">{p}</div>
            ))}
          </div>
        </div>
        {filteredbyPreference.length ? <Link 
                to={`/activity/${
                  filteredbyPreference.length
                    ? filteredbyPreference[
                        Math.floor(Math.random() * filteredbyPreference.length)
                      ]._id
                    : "616d66855fbae6e46f05c7aa"
                }`}
              > <button className='primary-button'>Go to activity</button> </Link>:
               <div><button onClick={confirmPreference} className='primary-button'>Confirm preferences</button></div>
              }
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
