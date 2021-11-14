import HeaderRestart from '../components/header-restart';
import StepThreeMain from '../components/step-three-main';

function StepThree({activity, shortBreak, mediumBreak, longBreak}) {
    return (
      <div className="App">
        <HeaderRestart/>
        <StepThreeMain activity={activity} shortBreak={shortBreak} mediumBreak={mediumBreak} longBreak={longBreak} />
      </div>
    );
  }
  
  export default StepThree;