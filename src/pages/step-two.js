import StepTwoMain from '../components/step-two-main';

function StepTwo({activity, shortBreak, mediumBreak, longBreak}) {
    return (
      <div className="App">
        <StepTwoMain shortBreak={shortBreak} mediumBreak={mediumBreak} longBreak={longBreak} activity={activity}/>
      </div>
    );
  }
  
  export default StepTwo;