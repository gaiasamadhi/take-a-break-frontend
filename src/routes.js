import {
    Switch,
    Route,
    useParams,
    useRouteMatch,
    useHistory
} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Start from './pages/start';
import StepOne from './pages/step-one';

import StepTwo from './pages/step-two';
import StepThree from './pages/step-three';
import Symptoms from './pages/symptoms';
import Preferences from './pages/preferences';

import Activity from './pages/Activity';
import Finish from './pages/Finish';
import Feedback from './pages/Feedback';
import FeedbackFinish from './pages/FeedbackFinish';

const activityAPI = 'https://recharge-backend1.herokuapp.com/activities';
function Routes() {
    const [activity, setActivity] = useState([])
    useEffect(() =>{
      axios.get(activityAPI).then(
        (response) => {
          setActivity(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },[])
    const [shortBreak, setShortBreak] = useState([])
    const [mediumBreak, setMediumBreak] = useState(activity)
    const [longBreak, setLongBreak] = useState(activity)

    const history = useHistory()
    const handleBreakDuration1 = () => {
        setShortBreak(activity.filter(act => act.duration <= 5))
        history.push('/step-two')
      }
    const handleBreakDuration2 = () => {
        setMediumBreak(activity.filter(act => act.duration > 5 && act.duration <= 15))
        history.push('/step-two')
    }
    const handleBreakDuration3 = () => {
        setLongBreak(activity.filter(act => act.duration > 15))
        history.push('step-two')
    }
    return (
        <Switch>
            <Route exact path="/">
                <Start/>  
            </Route>
            <Route path="/step-one">
                <StepOne handleBreakDuration3={handleBreakDuration3} handleBreakDuration2={handleBreakDuration2} handleBreakDuration1={handleBreakDuration1} mediumBreak={mediumBreak} shortBreak={shortBreak} activity={activity}/>
            </Route>

            <Route path="/step-two">
                <StepTwo shortBreak={shortBreak} mediumBreak={mediumBreak} longBreak={longBreak} activity={activity}/>
            </Route>
            <Route path="/step-four/symptoms">
                <Symptoms/>
            </Route>
            <Route path="/step-four/:preferences">
                <Preferences/>
            </Route>
            <Route path="/step-three">
                <StepThree/>
            </Route>
            <Route path="/activity">
                <Activity />
            </Route>
            <Route path="/finish">
                <Finish />
            </Route>
            <Route path="/feedback">
                <Feedback />
            </Route>
            <Route path="/submitted">
                <FeedbackFinish />

            </Route>
        </Switch>
    )
};

export default Routes;