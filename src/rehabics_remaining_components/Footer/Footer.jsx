import {
  FiInstagram,
  FiFacebook,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerSection">
      <div className="footerContainer">
        <div className="footerMain">
          <div className="footerBrand">
            <div className="footerLogo">
              <span>R</span>
              <strong>Rehabics</strong>
            </div>

            <p>
              The New Age Of Physiotherapy. Personalised care
              focused on movement, recovery and wellbeing.
            </p>

            <div className="footerSocials">
              <a href="#" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FiFacebook />
              </a>
            </div>
          </div>

          <div className="footerColumn">
            <h3>Useful Links</h3>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footerColumn">
            <h3>Opening Hours</h3>
            <span>Monday to Friday</span>
            <strong>8 AM to 9 PM</strong>
            <span>Saturday</span>
            <strong>10 AM to 8 PM</strong>
            <span>Sunday</span>
            <strong>Closed</strong>
          </div>

          <div className="footerColumn footerContact">
            <h3>Contact</h3>
            <a href="tel:+919535579229">
              <FiPhone />
              +91 9535579229
            </a>
            <a href="mailto:architat59@gmail.in">
              <FiMail />
              architat59@gmail.in
            </a>
            <span>
              <FiMapPin />
              Bengaluru, Karnataka
            </span>
          </div>
        </div>

        <div className="footerBottom">
          <span>© 2026 Rehabics Physiotherapy</span>
          <span>The New Age Of Physiotherapy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
