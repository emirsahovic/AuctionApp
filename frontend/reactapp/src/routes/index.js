import { Route, Switch } from 'react-router-dom';
import About from "../pages/About/index";
import TermsConditions from "../pages/TermsConditions/index";
import PrivacyPolicy from "../pages/PrivacyPolicy/index";

function Routes() {
    return (
        <Switch>
            <Route path="/shop/about" component={About} />
            <Route path="/shop/privacy" component={PrivacyPolicy} />
            <Route path="/shop/terms" component={TermsConditions} />
        </Switch>
    );
}

export default Routes;
