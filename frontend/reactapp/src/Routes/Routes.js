import {Route, Switch} from 'react-router-dom';
import About from "../Pages/About/About";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

function Routes(){
    return (
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/privacy" component={PrivacyPolicy}/>
            <Route path="/terms" component={TermsConditions}/>
        </Switch>
    );
}

export default Routes;