import "../Activity.css";
import rocket from "../assets/Photo6.png";
import globe from "../assets/Saly-44.png";
import { Link, useHistory } from "react-router-dom";
export default function Finish({ activity }) {
  const history = useHistory();
  return (
    <div className="finishedActivity">
      <div className="restart-break">
        <h4>PEMM</h4>
      </div>
      <div className="finish">
        {/* <img src={rocket}></img> */}
        <div className="finishButtons">
          <h2>Congrats on finishing your activity!</h2>
          <Link to="/feedback">
            <button className="end-button">End break</button>
          </Link>
          <Link to="/step-one">
            <button className="start-button">Try another activity</button>
          </Link>
          <button
            className="start-button"
            onClick={() => {
              history.goBack();
            }}
          >
            Repeat this activity
          </button>
        </div>
        {/* <img src={globe} style={{ height: "50%" }}></img> */}
      </div>
    </div>
  );
}
