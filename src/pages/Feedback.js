import "../Activity.css";
import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import arrow from "../assets/Arrow.png";
import axios from "axios";
import logo from "../assets/logo6.png";

export default function Feedback() {
  const feedbackAPI = "https://recharge-backend1.herokuapp.com/feedback";

  const [value, setValue] = useState({ label: "", mark: 0, comment: "" });
  const [click, setClick] = useState(false);

  const feedback = [
    "Needs Improvement (Tell us how)",
    "Not Helpful",
    "Helpful",
    "Awesome(Share!)",
  ];

  function submitFeedback(e) {
    e.preventDefault();
    axios
      .post(feedbackAPI, {
        label: value.label,
        mark: value.mark,
        comment: value.comment,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else if (error.message) {
          console.log(error.message);
        }
      });
    setValue({ label: "Helpful", mark: 0, comment: "" });
    setClick(!click);
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      label: feedback[e.target.value],
      mark: e.target.value,
    });
  };
  const handleComment = (e) => {
    setValue({
      ...value,
      comment: e.target.value,
    });
  };
  console.log(value);
  return (
    <>
      <div className="take-break">
        <div className="logoSection">
          <img src={logo} className="logo" />
          <h4 style={{ marginLeft: "16px" }}>Recharge</h4>
        </div>
        <Link to="/step-one">
          <button className="start-break">Take a break</button>
        </Link>
      </div>
      <div className="feedbackPage">
        <h1>How much did this activity help you?</h1>
        <h4>This will help us make better recommendations in the future.</h4>
        <div className="feedback">
          <div className="bubble">{value.label}</div>
          <input
            type="range"
            id="mark"
            name="mark"
            min="0"
            max="3"
            value={value.mark}
            onChange={handleChange}
          />
        </div>
        <div className="comment">
          <h4>Add additional comments (optional):</h4>
          <form>
            <textarea
              onChange={handleComment}
              value={value.comment}
              rows="6"
              cols="40"
              placeholder="What did you like?&#10;What could be better?&#10;How accurate were your recommendations?" //&#10; -new line html entity
            />
            {click ? (
              <Redirect to="/submitted" />
            ) : (
              <button className="feedback-button" onClick={submitFeedback}>
                Submit feedback
              </button>
            )}
          </form>
        </div>
        <div className="go-back-btn">
          <Link to="/finish/">
            <button className="back">
              <img src={arrow} style={{ width: "27px", height: "18px" }} />
              Back to last step
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
