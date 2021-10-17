import {
    Switch,
    Route,
    useParams,
    useRouteMatch
} from 'react-router-dom';

import Start from './pages/start';
import StepOne from './pages/step-one';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Start/>  
            </Route>
            <Route path="/step-one">
                <StepOne/>
            </Route>
        </Switch>
    )
};

export default Routes;