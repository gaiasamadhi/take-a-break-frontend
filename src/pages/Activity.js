import "../Activity.css";
import Countdown, { zeroPad } from "react-countdown";
import activityPic from "../assets/coffee-cup.png";
import marker from "../assets/Photo1.png";
import background from "../assets/Photo5.png";
import { useRef } from "react";
export default function Activity() {
  const timerRef = useRef();
  const handleStart = () => timerRef.current.start();
  const handlePause = () => timerRef.current.pause();
  const renderer = ({ minutes, seconds }) => (
    <span>
      {zeroPad(minutes)}:{zeroPad(seconds)}
    </span>
  );
  return (
    <div className="activityPage">
      <div className="restart-break">
        <h4>PEMM</h4>
        <button className="restart-button">Restart Break</button>
      </div>
      <div className="player">
        <iframe
          width="690"
          height="390"
          src="https://www.youtube.com/embed/x6UITRjhijI"
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
                date={Date.now() + 300000}
              />
            </h1>
          </div>
          <button className="start-button" onClick={handleStart}>
            Start timer
          </button>
          <button className="end-button" onClick={handlePause}>
            End activity early
          </button>
        </div>
      </div>
      <div className="break">
        <div className="breakDescriptionContainer">
          <h2>Coffee Break - 5 Minutes</h2>
          <div className="activityDescription">
            <img src={activityPic}></img>
            <p>
              Take a break and go grab or get ready to make your favourite cup
              of coffee!
            </p>
          </div>
        </div>
        <div className="breakDescriptionContainer">
          <h2>Benefits of Activity</h2>
          <div className="benefitDescription">
            <div>
              <img src={marker}></img>
              <p>Improvement in energy levels & reaction times</p>
            </div>
            <div>
              <img src={marker}></img>
              <p>Help metabolism burn fat</p>
            </div>
            <div>
              <img src={marker}></img>
              <p>Improve physical performance</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg">
        <img src={background}></img>
      </div>
    </div>
  );
}
