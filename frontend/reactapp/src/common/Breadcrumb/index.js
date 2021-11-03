import './breadCrumb.css';
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
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((item) => item);
  const pages = { 'about': 'About Us', 'terms': 'Terms and Conditions', 'privacy': 'Privacy and policy' };


  return (
    <div className="bg-cont">
      <div className="breadcrumbs-container">
        <div>
          {pathnames.map((name, i) => <h5 key={i}>{pages[name]}</h5>)}
        </div>

        {
          breadcrumbs.map(({
            match,
            breadcrumb
          }) => (
            <div key={match.url}>
              <span>
                {routes.find((route) => route.path === match.url) ?
                  (<><NavLink to={match.url.slice(0, match.url.lastIndexOf("/"))} className="breadcrumb-link">
                    {match.url.slice(1, match.url.lastIndexOf("/")).charAt(0).toUpperCase() + match.url.slice(1, match.url.lastIndexOf("/")).slice(1)}
                  </NavLink>
                    <span style={{ fontSize: "20px", color: "#9b9b9b" }}> &#8594;
                      <span> {breadcrumb} </span>
                    </span></>) : null}
              </span>
            </div>
          ))
        }
      </div >
    </div>
  );
};

export default Breadcrumbs;
