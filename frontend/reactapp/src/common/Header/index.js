import './navBar.css';
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import { FaGooglePlus } from 'react-icons/fa';
import logo from "../../images/auction-app-logo.png"
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getToken, removeSession } from "../../utilities/Auth";

function NavBar({ loggedInState }) {
  const [loggedIn, setLoggedIn] = useState(getToken() !== null);

  useEffect(() => {
    if (loggedInState !== null)
      setLoggedIn(!loggedIn);
  }, [loggedInState]);

  const handleLogout = () => {
    setLoggedIn(false);
    removeSession();
  };

  return (
    <>
      <div className="nav-upper">
        <div className="container-upper">

          <div className="social-icons">
            <a href="https://www.facebook.com/AtlantBH" rel="noreferrer" target="_blank">
              <SiFacebook />
            </a>
            <a href="https://www.instagram.com/atlantbh" rel="noreferrer" target="_blank">
              <SiInstagram />
            </a>
            <a href="https://www.twitter.com/atlantbh" rel="noreferrer" target="_blank">
              <SiTwitter />
            </a>
            <a href="https://accounts.google.com/" rel="noreferrer" target="_blank">
              <FaGooglePlus />
            </a>
          </div>

          <div className="login">
            <>
              {loggedIn ? (<Link onClick={handleLogout} to="/">Log out </Link>) :
                (
                  <>
                    <Link to="/login">Login</Link>
                    <p> or </p>
                    <Link to="/register">Create an Account</Link>
                  </>
                )}
            </>
          </div>

        </div>

      </div>

      <div className="container-main-nav">
        <Link to="/" className="logo-link"><img src={logo} alt="logo"></img></Link>
        <input type="text" placeholder="Try enter: Shoes"></input>
        <ul>
          <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
          <li><NavLink to="/shop" activeClassName="selected">Shop</NavLink></li>
          <li><NavLink to="/account" activeClassName="selected">My Account</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
