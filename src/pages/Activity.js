import "../Activity.css";
export default function Activity() {
  console.log("lmao");
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
            <h1>5:00</h1>
          </div>
          <button className="start-button">Start timer</button>
          <button className="end-button">End activity early</button>
        </div>
      </div>
    </div>
  );
}
