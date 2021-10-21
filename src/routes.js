import {
    Switch,
    Route,
    useParams,
    useRouteMatch
} from 'react-router-dom';

import Start from './pages/start';
import StepOne from './pages/step-one';
import StepTwo from './pages/step-two';
import StepThree from './pages/step-three';
import Symptoms from './pages/symptoms';
import Preferences from './pages/preferences';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Start/>  
            </Route>
            <Route path="/step-one">
                <StepOne/>
            </Route>
            <Route path="/step-two">
                <StepTwo/>
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
        </Switch>
    )
};

export default Routes;