import './About.css';
import person1 from '../../Images/Rectangle 63.png';
import person2 from '../../Images/Rectangle 64.png';
import person3 from '../../Images/Rectangle 65.png';


function About() {
    return (
        <div className="about-wrapper">
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis consequat pretium turpis, in eleifend mi laoreet sed.
                    Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna.In convallis diam volutpat libero tincidunt semper.
                    Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus.
                    Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie.In id elementum turpis.Curabitur quis tincidunt mauris.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis consequat pretium turpis, in eleifend mi laoreet sed.
                    Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna.In convallis diam volutpat libero tincidunt semper.
                    Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus.Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie.
                    In id elementum turpis.Curabitur quis tincidunt mauris.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis consequat pretium turpis, in eleifend mi laoreet sed.
                    Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna.In convallis diam volutpat libero tincidunt semper.
                    Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus.Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie.
                    In id elementum turpis.Curabitur quis tincidunt mauris.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis consequat pretium turpis, in eleifend mi laoreet sed.
                    Donec ipsum mauris, venenatis sit amet porttitor id, laoreet eu magna.In convallis diam volutpat libero tincidunt semper.
                    Ut aliquet erat rutrum, venenatis lacus ut, ornare lectus.Quisque congue ex sit amet diam malesuada, eget laoreet quam molestie.
                    In id elementum turpis.Curabitur quis tincidunt mauris.

                </div>
                <div className="about-images">
                    <img className="about-lg-img" alt="image1"
                        src={person1} />
                    <img className="about-sm-img" alt="image2"
                        src={person2} />
                    <img className="about-sm-img" alt="image3"
                        src={person3} />
                </div>
            </div>
        </div>
    );
};

export default About;