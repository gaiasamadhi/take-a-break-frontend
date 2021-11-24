import "../Activity.css";
import Countdown, { zeroPad } from "react-countdown";
import marker from "../assets/plus_1.png";
import arrow from "../assets/Arrow.png";
import logo from '../assets/logo6.png'
import { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Activity({ activity, shortBreak, mediumBreak, longBreak }) {
  const timerRef = useRef();
  const handleStart = () => {
    timerRef.current.start();
    setAutoplay("?autoplay=1");
  };
  const handleRestart = (e) => {
    // console.log(e)
    timerRef.current.stop()
    handleStart()
  }
  const handlePause = () => timerRef.current.pause();
  const renderer = ({ minutes, seconds }) => (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
  // console.log(timerRef.current);
  const [filtered, setFiltered] = useState([])
  const activityID = useParams();
  const filteredActivity = activity.filter((act) => act._id === activityID.id);
  console.log(filteredActivity);
  console.log(shortBreak)
  console.log(mediumBreak)
  console.log(longBreak)
  const [autoplay, setAutoplay] = useState("");
  useEffect(()=>{
    if(shortBreak){
      setFiltered(shortBreak.filter((act)=> act._id === activityID.id))
    } else if(mediumBreak){
      setFiltered(mediumBreak.filter((act) => act._id === activityID.id))
    } else{
      setFiltered(longBreak.filter((act) => act._id === activityID.id))
    }
  },[])
 
  console.log(filtered)
  return (
    <div className="activityPage">
      <div className="restart-break">
        <div className="logoSection">
        <img src={logo} className="logo"/><h4 style={{marginLeft:"16px"}}>Recharge</h4>
        </div>
        <button onClick={handleRestart} className="restart-button">Restart Break</button>
      </div>
      {filteredActivity.map((act) => (
        <>
          <div className="player">
            <iframe
              width="585"
              height="330"
              src={
                "https://www.youtube.com/embed/" +
                act.source.slice(32) +
                autoplay
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="timer">
              <div className="clock">
                <h1>
                  <Countdown
                    autoStart={false}
                    ref={timerRef}
                    renderer={renderer}
                    date={Date.now() + act.duration * 60000}
                  />
                </h1>
              </div>
              <button className="start-button" onClick={handleStart}>
                Start timer
              </button>
              <Link to="/finish">
                <button className="end-button">End activity</button>
              </Link>
            </div>
          </div>
          <div className="break">
            <div className="breakDescriptionContainer">
              <h2>{act.name}</h2>
              <div className="activityDescription">
                <p>{act.description}</p>
              </div>
            </div>
            <div className="breakDescriptionContainer">
              <h2>Benefits of Activity</h2>
              <div className="benefitDescription">
                {act.benefits.map((b) => (
                  <div className="benefitContainer">
                    <img
                      src={marker}
                      style={{ width: "25px", height: "25px" }}
                    ></img>
                    <p>{b.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <Link to="/step-three">
              <button className="back">
                <img src={arrow} style={{ width: "27px", height: "18px" }} />
                Back to last step
              </button>
            </Link>
          </div>
        </>
      ))}
    </div>
  );
}
