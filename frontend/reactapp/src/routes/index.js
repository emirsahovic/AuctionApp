import { Route, Switch } from 'react-router-dom';
import About from "../pages/About/index";
import TermsConditions from "../pages/TermsConditions/index";
import PrivacyPolicy from "../pages/PrivacyPolicy/index";
import Register from "../pages/Register/index"

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/shop/about" component={About} />
            <Route exact path="/shop/privacy" component={PrivacyPolicy} />
            <Route exact path="/shop/terms" component={TermsConditions} />
            <Route path="/register" render={() => <Register {...props} />} />
        </Switch>
    );
}

export default Routes;
