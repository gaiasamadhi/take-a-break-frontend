import PreferencesMain from '../components/preferences-main';

function Preferences({shortBreak, mediumBreak, longBreak}) {
    return (
      <div className="App">
        <PreferencesMain shortBreak={shortBreak} mediumBreak={mediumBreak} longBreak={longBreak} />
      </div>
    );
  }
  
  export default Preferences;