import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";

import './breadCrumb.css';

const BreadCrumb = () => {
  const location = useLocation();
  const breadCrumbView = () => {
    const { pathname } = location;
    const pathnames = pathname.split("/").filter((item) => item);
    const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
    return (
      <div className="breadcrumb-cont">
        {console.log(pathname)}
        <h5 style={pathname === '/shop/about' ? { display: 'block' } : { display: 'none' }}>About Us</h5>
        <h5 style={pathname === '/shop/terms' ? { display: 'block' } : { display: 'none' }}>Terms and Conditions</h5>
        <h5 style={pathname === '/shop/privacy' ? { display: 'block' } : { display: 'none' }}>Privacy and Policy</h5>
        <Breadcrumb>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>
                <Link to={`${routeTo}`}>{capatilize(name)}</Link>
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div >
    );
  };

  return <>{breadCrumbView()}</>;
};

export default BreadCrumb;