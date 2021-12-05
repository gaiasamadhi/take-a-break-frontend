import "../Activity.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo6.png";

export default function FeedbackFinish() {
  return (
    <>
      <div className="feedbackPage2">
        <div className="restart-break">
          <div className="logoSection">
            <img src={logo} className="logo" />
            <h4 style={{ marginLeft: "16px" }}>Recharge</h4>
          </div>
          <Link to="/step-one">
            <button className="start-break">Take a break</button>
          </Link>
        </div>
        <div className="finalMessage"></div>
      </div>
      <div className="footer">
        <div className="footerNav">
          <Link to="/" style={{textDecoration: "none", color: "black"}}>FEATURES</Link>
          <Link to="/" style={{textDecoration: "none", color: "black"}}>ABOUT US</Link>
          <Link to="/" style={{textDecoration: "none", color: "black"}}>FAQs</Link>
          <Link to="/" style={{textDecoration: "none", color: "black"}}>REQUEST A FEATURE</Link>
        </div>
        <div className="footerLine"></div>
        <h6>Copyright @ 2021 PEMM. All rights reserved.</h6>
      </div>
    </>
  );
}
