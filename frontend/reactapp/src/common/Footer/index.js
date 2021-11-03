import './footer.css'
import { SiFacebook, SiTwitter, SiInstagram } from 'react-icons/si';
import { FaGooglePlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-cont">
            <div className="page-info">
                <h3>Auction</h3>
                <Link to="/shop/about">About us</Link>
                <br />
                <Link to="/shop/terms">Terms and Conditions</Link>
                <br />
                <Link to="/shop/privacy">Privacy and Policy</Link>
            </div>

            <div className="contact-info">
                <h3>Get in touch</h3>
                <span style={{ color: "#fff", fontSize: "16px", fontWeight: "400" }}>Call us at +123 797-567-2535</span>
                <br />
                <span style={{ color: "#fff", fontSize: "16px", fontWeight: "400" }}>support@auction.com</span>
                <br />
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
            </div>

            <div className="newsletter">
                <h3>Newsletter</h3>
                <span>Enter your email address and get notified</span> <br /> <span>about new products. We hate spam!</span>
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
