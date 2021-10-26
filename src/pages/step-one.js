import HeaderRestart from '../components/header-restart';
import StepOneMain from '../components/step-one-main';

function StepOne({activity, handleBreakDuration1, handleBreakDuration2, handleBreakDuration3}) {
    return (
      <div className="App">
        <HeaderRestart/>
        <StepOneMain activity={activity} handleBreakDuration3={handleBreakDuration3} handleBreakDuration2={handleBreakDuration2} handleBreakDuration1={handleBreakDuration1}/>
      </div>
    );
  }
  
  export default StepOne;