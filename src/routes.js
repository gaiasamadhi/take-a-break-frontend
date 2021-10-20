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
        </Switch>
    )
};

export default Routes;