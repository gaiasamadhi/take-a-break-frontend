import "../Activity.css";
import { Link } from "react-router-dom";
export default function FeedbackFinish() {
  return (
    <div className="feedbackPage2">
      <div className="restart-break">
        <h4>PEMM</h4>
        <Link to="/step-one">
          <button className="start-break">Take a break</button>
        </Link>
      </div>
      <div className="finalMessage">
        <h2>Feedback submitted.</h2>
        <h3>Now go out and do some great work!</h3>
      </div>
    </div>
  );
}
