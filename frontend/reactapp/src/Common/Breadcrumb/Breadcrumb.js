import './Breadcrumb.css';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const routes = [
  { path: '/shop/about', breadcrumb: "About Us" },
  { path: '/shop/terms', breadcrumb: "Terms and Conditions" },
  { path: '/shop/privacy', breadcrumb: "Privacy and Policy" },
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <div className="breadcrumbs-container">
      {location.pathname === '/shop/about' ? <span className="page-title">About Us</span> : ""}
      {location.pathname === '/shop/terms' ? <span className="page-title">Terms and Conditions</span> : ""}
      {location.pathname === '/shop/privacy' ? <span className="page-title">Privacy and Policy</span> : ""}

      {breadcrumbs.map(({
        match,
        breadcrumb
      }) => (
        <div key={match.url}>
          <span>
            {match.url !== "/" && match.url !== "/shop" && match.url !== "/account" ? (<><NavLink to="/shop" className="breadcrumb-link">Shop </NavLink> <span style={{ fontSize: "20px", margin: "0px 5px" }}> &#8594;  </span></>) : ''}
            {match.url !== "/" && match.url !== "/shop" && match.url !== "/account" ? breadcrumb : ''}
          </span>
        </div>
      ))
      }
    </div >
  );
};

export default Breadcrumbs;