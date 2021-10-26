import HeaderRestart from '../components/header-restart';
import StepTwoMain from '../components/step-two-main';

function StepTwo({activity, shortBreak, mediumBreak, longBreak}) {
    return (
      <div className="App">
        <HeaderRestart/>
        <StepTwoMain shortBreak={shortBreak} mediumBreak={mediumBreak} longBreak={longBreak} activity={activity}/>
      </div>
    );
  }
  
  export default StepTwo;