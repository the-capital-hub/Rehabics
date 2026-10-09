
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Conditions", path: "/conditions" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footerSection">
      <div className="footerContainer">
        <div className="footerMain">
          <div className="footerBrand">
            <Link
              to="/"
              className="footerLogo"
              aria-label="Rehabics Physiotherapy home"
              onClick={scrollToTop}
            >
              <img src={logo} alt="Rehabics Physiotherapy" />
            </Link>

            <p className="footerBrandText">
              The New Age Of Physiotherapy. Personalised care
              focused on movement, recovery and wellbeing.
            </p>

            <div className="footerSocials">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="footerSocial"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="footerSocial"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>
            </div>
          </div>

          <div className="footerColumn">
            <span className="footerColumnLabel">Navigation</span>
            <h3>Explore Rehabics</h3>

            <nav className="footerNav" aria-label="Footer navigation">
              {footerLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={scrollToTop}
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight />
                </Link>
              ))}
            </nav>
          </div>

          <div className="footerColumn">
            <span className="footerColumnLabel">Clinic Hours</span>
            <h3>Opening Hours</h3>

            <div className="footerHours">
              <div className="footerHour">
                <span>Monday to Friday</span>
                <strong>8 AM to 9 PM</strong>
              </div>

              <div className="footerHour">
                <span>Saturday</span>
                <strong>10 AM to 8 PM</strong>
              </div>

              <div className="footerHour">
                <span>Sunday</span>
                <strong>Closed</strong>
              </div>
            </div>
          </div>

          <div className="footerColumn footerContact">
            <span className="footerColumnLabel">Get In Touch</span>
            <h3>Contact Rehabics</h3>

            <a
              href="tel:+919535579229"
              className="footerContactItem"
            >
              <span className="footerContactIcon">
                <FiPhone />
              </span>
              <span className="footerContactText">
                <small>Call Us</small>
                <strong>+91 9535579229</strong>
              </span>
            </a>

            <a
              href="mailto:architat59@gmail.in"
              className="footerContactItem"
            >
              <span className="footerContactIcon">
                <FiMail />
              </span>
              <span className="footerContactText">
                <small>Email</small>
                <strong>architat59@gmail.in</strong>
              </span>
            </a>

            <Link
              to="/contact"
              className="footerContactItem"
              onClick={scrollToTop}
            >
              <span className="footerContactIcon">
                <FiMapPin />
              </span>
              <span className="footerContactText">
                <small>Our Locations</small>
                <strong>Bengaluru, Karnataka</strong>
              </span>
            </Link>
          </div>
        </div>

        <div className="footerCta">
          <div className="footerCtaContent">
            <span className="footerCtaLabel">Start Your Recovery</span>
            <h2>
              Move better.
              <em>Live better.</em>
            </h2>
          </div>

          <Link
            to="/contact"
            className="footerCtaButton"
            onClick={scrollToTop}
          >
            <span>Make An Appointment</span>
            <span className="footerCtaIcon">
              <FiArrowUpRight />
            </span>
          </Link>
        </div>

        <div className="footerBottom">
          <span>© 2026 Rehabics Physiotherapy</span>
          <span>The New Age Of Physiotherapy</span>

          <button
            type="button"
            className="footerBackTop"
            onClick={scrollToTop}
          >
            <span>Back To Top</span>
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
