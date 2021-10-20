import "../Activity.css";
import rocket from "../assets/Photo6.png";
import globe from "../assets/Saly-44.png";

export default function Finish() {
  return (
    <div className="activityPage">
      <div className="restart-break">
        <h4>PEMM</h4>
        <button className="restart-button">Restart Break</button>
      </div>
      <div className="finish">
        <img src={rocket}></img>
        <div className="finishButtons">
        <button className="end-button">End break</button>
        <button className="start-button">Try another activity</button>
        <button className="start-button">Repeat this activity</button>
        </div>
        <img src={globe} style={{ height: "50%" }}></img>
      </div>
    </div>
  );
}
