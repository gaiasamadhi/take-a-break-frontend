import HeaderRestart from "../components/header-restart";
import "../Features.css";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector1.png";
import placeholder from "../assets/rectangle291.png"
export default function Features() {
  return (
    <>
      <HeaderRestart />
      <div className="features">
        <div className="message">
          <h1>
            It’s possible to be <span className="yellowText">productive</span>,
            even during your break.
          </h1>
          <img src={vector} />
        </div>
        <div className="promotionalMessage">
          <h2>
            It's <span className="yellowText">simple</span>
          </h2>
          <p>
            Decide it’s time to take a <span className="yellowText">break</span>
            . Launch our app. Enter in your
            <span className="yellowText"> preferences and goals</span>. Receive
            a <span className="yellowText">personalized activity</span>. Take a
            <span className="yellowText"> productive break</span>. Go back to
            doing <span className="yellowText">great work</span>!
          </p>
          <img src={vector1} />
        </div>
        <div className="testimonials">
            <h2>
                Don't take our word for it
            </h2>
            <div>
            <img style={{width: "40%", margin: "10px"}} src={placeholder}/>
            <img style={{width: "40%", margin: "10px"}} src={placeholder}/>
            <img style={{width: "40%", margin: "10px"}} src={placeholder}/>
            <img style={{width: "40%", margin: "10px"}} src={placeholder}/>
            </div>
        </div>
        <button className="tryRecharge">Try Recharge, it's free!</button>
      </div>
    </>
  );
}
