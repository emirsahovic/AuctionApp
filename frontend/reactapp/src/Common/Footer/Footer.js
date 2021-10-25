import './Footer.css'
import facebook from "../../Images/facebook.png"
import instagram from "../../Images/instagram.png"
import twitter from "../../Images/twitter.png"
import google from "../../Images/google plus.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-cont">
            <div className="page-info">
                <h3>Auction</h3>
                <Link to="/about">About us</Link>
                <br />
                <Link to="/terms">Terms and Conditions</Link>
                <br />
                <Link to="/privacy">Privacy and Policy</Link>
            </div>

            <div className="contact-info">
                <h3>Get in touch</h3>
                <a>Call us at +123 797-567-2535</a>
                <br />
                <a>support@auction.com</a>
                <br />
                <div className="social-icons">
                   <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><img src={facebook} alt="facebook"></img></a>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img src={instagram} alt="instagram"></img></a>
                    <a href="https://www.twitter.com" rel="noreferrer" target="_blank"><img src={twitter} alt="twitter"></img></a>
                    <a href="https://www.google.com" rel="noreferrer" target="_blank"><img src={google} alt="google plus"></img></a>
                </div>
            </div>

            <div className="newsletter">
                <h3>Newsletter</h3>
                <a>Enter your email address and get notified <br /> about new products. We hate spam!</a>
                <div className="emailField">
                    <input type="text" placeholder="Your email address"></input>
                    <button type="button">
                        Go <span style={{ color: '#8367d8', marginLeft: '8px' }}>&gt;</span>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Footer;