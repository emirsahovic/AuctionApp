import { Route, Switch } from 'react-router-dom';
import About from "../pages/About/index";
import TermsConditions from "../pages/TermsConditions/index";
import PrivacyPolicy from "../pages/PrivacyPolicy/index";
import Register from "../pages/Register/index"
import Login from '../pages/Login';
import ProductPage from '../pages/ProductPage';

function Routes(props) {
    return (
        <Switch>
            <Route path="/shop/*/*/:id" render={() => <ProductPage {...props} />} />
            <Route exact path="/shop/about" component={About} />
            <Route exact path="/shop/privacy" component={PrivacyPolicy} />
            <Route exact path="/shop/terms" component={TermsConditions} />
            <Route path="/register" render={() => <Register {...props} />} />
            <Route path="/login" render={() => <Login {...props} />} />
        </Switch>
    );
}

export default Routes;
