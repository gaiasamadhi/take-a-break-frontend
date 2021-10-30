import "../Activity.css";
import Countdown, { zeroPad } from "react-countdown";
import activityPic from "../assets/coffee-cup.png";
import marker from "../assets/plus_1.png";
import arrow from "../assets/Arrow.png";
import background from "../assets/Photo5.png";
import { useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Activity({ activity }) {
  const timerRef = useRef();
  const handleStart = () => {timerRef.current.start(); setAutoplay("?autoplay=1")};
  const handlePause = () => timerRef.current.pause();
  const renderer = ({ minutes, seconds }) => (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
  console.log(timerRef)
  const activityID = useParams();
  const filteredActivity = activity.filter((act) => act._id === activityID.id);
  console.log(filteredActivity);
  const [autoplay, setAutoplay] = useState("")
  return (
    <div className="activityPage">
      <div className="restart-break">
        <h4>PEMM</h4>
        <button className="restart-button">Restart Break</button>
      </div>
      {filteredActivity.map((act) => (
        <>
          <div className="player">
            <iframe
              width="585"
              height="330"
              src={"https://www.youtube.com/embed/" + act.source.slice(32) + autoplay}
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
              <Link to="/feedback">
              <button className="end-button">
                End activity early
              </button>
              </Link>
            </div>
          </div>
          <div className="break">
            <div className="breakDescriptionContainer">
              <h2>{act.name}</h2>
              <div className="activityDescription">
                {/* <img src={activityPic}></img> */}
                <p>{act.description}</p>
              </div>
            </div>
            <div className="breakDescriptionContainer">
              <h2>Benefits of Activity</h2>
              <div className="benefitDescription">
                {act.benefits.map((b) => (
                  <div className="benefitContainer">
                    <img src={marker} style={{width: "25px", height: "25px"}}></img>
                    <p>{b.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="bg">
            <img style={{}}src={background}></img>
          </div> */}
          <div>
          <button className="back">
            <img src={arrow} style={{ width: "27px", height: "18px" }} />
            Back to last step
          </button>
          </div>
        </>
      ))}
    </div>
  );
}
