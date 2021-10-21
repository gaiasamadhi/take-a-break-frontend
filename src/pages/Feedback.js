import "../Activity.css";
import { useState, useEffect } from "react";

export default function Feedback() {
  const [value, setValue] = useState({ mark: 0, label: "" });
  const [text, setText] = useState("");
  const feedback = ["very unhelpful", "unhelpful", "helpful", "very helpful"];
  var textAreas = document.getElementsByTagName("textarea");

  Array.prototype.forEach.call(textAreas, function (elem) {
    elem.placeholder = elem.placeholder.replace(/\\n/g, "\n");
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      mark: e.target.value,
      label: feedback[e.target.value],
    });
    console.log(e.target.value);
  };
  return (
    <div className="activityPage">
      <div className="restart-break">
        <h4>PEMM</h4>
        <button className="start-break">Take a break</button>
      </div>
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
        <textarea
          rows="6"
          cols="40"
          placeholder="What did you like?&#10;What did you not like about the process?&#10;How accurate were your recommendations?" //&#10; -new line html entity 
        />
           <button className="feedback-button">
            Submit feedback
          </button>
      </div>
    </div>
  );
}
