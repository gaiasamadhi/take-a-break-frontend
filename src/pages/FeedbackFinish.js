import "../Activity.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo6.png";
import  Footer from '../components/footer'
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
        <Footer />
    </>
  );
}
