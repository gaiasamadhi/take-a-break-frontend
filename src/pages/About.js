import "../About.css";
import rocket from "../assets/3d-rocket.png";
import sunshine from "../assets/highlight_05.png";
export default function About() {
  return (
    <div className="about">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img src={sunshine} style={{ width: "57px", height: "62px" }} />
        <h1
          style={{ color: "#FFFFFF", marginTop: "40px", marginBottom: "0px" }}
        >
          The Team
        </h1>
      </div>
      <img src={rocket} style={{ width: "20%", alignSelf: "flex-start" }} />
    </div>
  );
}
