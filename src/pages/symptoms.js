import SymptomsMain from '../components/symptoms-main';

function Symptoms({activity, shortBreak, mediumBreak, longBreak}) {
    return (
      <div className="App">
        <SymptomsMain activity={activity} shortBreak={shortBreak} mediumBreak={mediumBreak} longBreak={longBreak}/>
      </div>
    );
  }
  
  export default Symptoms;