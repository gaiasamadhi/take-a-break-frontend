import HeaderRestart from '../components/header-restart';
import SymptomsMain from '../components/symptoms-main';

function Symptoms({activity}) {
    return (
      <div className="App">
        <HeaderRestart/>
        <SymptomsMain activity={activity}/>
      </div>
    );
  }
  
  export default Symptoms;