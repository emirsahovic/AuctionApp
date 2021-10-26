import { Route, Switch } from 'react-router-dom';
import About from "../Pages/About/About";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";

function Routes() {
    return (
        <Switch>
            <Route path="/shop/about" component={About} exact />
            <Route path="/shop/privacy" component={PrivacyPolicy} />
            <Route path="/shop/terms" component={TermsConditions} />
        </Switch>
    );
}

export default Routes;