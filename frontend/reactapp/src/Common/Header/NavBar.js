import './NavBar.css';
import fb from "../../Images/facebook.png";
import ig from "../../Images/instagram.png";
import tw from "../../Images/twitter.png";
import gp from "../../Images/google plus.png"
import logo from "../../Images/auction-app-logo.png"
import { Link } from 'react-router-dom'

function NavBar() {
  return(
  <>
  <div className="nav-upper">
    <div className="container-upper">

      <div className="social-icons">
         <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><img src={fb} alt="facebook"></img></a>
         <a href="https://www.instragram.com" rel="noreferrer" target="_blank"><img src={ig} alt="instagram"></img></a>
         <a href="https://www.twitter.com" rel="noreferrer" target="_blank"><img src={tw} alt="twitter"></img></a>
         <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src={gp} alt="google plus"></img></a>
      </div>

      <div className="login">
          <a href="#">Login</a>
           <p>or</p>
          <a href="#">Create an Account</a>
      </div>

    </div>

  </div>

    <div className="container-main-nav">
       <Link to="/"><img src={logo} alt="logo"></img></Link>
       <input type="text" placeholder="Try enter: Shoes"></input>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">My Account</a></li>
        </ul>
    </div>
    </>
  );
}

export default NavBar;
