import {
    Switch,
    Route,
    useParams,
    useRouteMatch
} from 'react-router-dom';

import Start from './pages/start';
import StepOne from './pages/step-one';
import Activity from './pages/Activity';
import Finish from './pages/Finish';
import Feedback from './pages/Feedback';
import FeedbackFinish from './pages/FeedbackFinish';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Start/>  
            </Route>
            <Route path="/step-one">
                <StepOne/>
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