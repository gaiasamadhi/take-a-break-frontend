import HeaderRestart from '../components/header-restart';
import StepThreeMain from '../components/step-three-main';

function StepThree({activity}) {
    return (
      <div className="App">
        <HeaderRestart/>
        <StepThreeMain activity={activity}/>
      </div>
    );
  }
  
  export default StepThree;