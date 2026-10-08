
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import "./Footer.css";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Conditions", path: "/conditions" },
  { label: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="footerSection">

      <div className="footerContainer">

        {/* Main Footer */}

        <div className="footerMain">

          {/* Brand */}

          <div className="footerBrand">

            <Link
              to="/"
              className="footerLogo"
              aria-label="Rehabics Physiotherapy"
            >
              <img
                src={logo}
                alt="Rehabics Physiotherapy"
              />
            </Link>

            <p className="footerBrandText">
              The New Age Of Physiotherapy. Personalised care
              focused on movement, recovery and wellbeing.
            </p>

            <div className="footerSocials">

              <a
                href="#"
                className="footerSocial"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href="#"
                className="footerSocial"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>

            </div>

          </div>

          {/* Navigation */}

          <div className="footerColumn">

            <span className="footerColumnLabel">
              Navigation
            </span>

            <h3>Explore Rehabics</h3>

            <nav className="footerNav">

              {footerLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                >
                  <span>{item.label}</span>
                  <FiArrowUpRight />
                </Link>
              ))}

            </nav>

          </div>

          {/* Hours */}

          <div className="footerColumn">

            <span className="footerColumnLabel">
              Clinic Hours
            </span>

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

          {/* Contact */}

          <div className="footerColumn footerContact">

            <span className="footerColumnLabel">
              Get In Touch
            </span>

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

            <div className="footerContactItem">

              <span className="footerContactIcon">
                <FiMapPin />
              </span>

              <span className="footerContactText">
                <small>Locations</small>
                <strong>Bengaluru, Karnataka</strong>
              </span>

            </div>

          </div>

        </div>

        {/* Appointment CTA */}

        <div className="footerCta">

          <div className="footerCtaContent">

            <span className="footerCtaLabel">
              Start Your Recovery
            </span>

            <h2>
              Move better.
              <em>Live better.</em>
            </h2>

          </div>

          <Link
            to="/contact"
            className="footerCtaButton"
          >
            <span>Make An Appointment</span>

            <span className="footerCtaIcon">
              <FiArrowUpRight />
            </span>
          </Link>

        </div>

        {/* Bottom */}

        <div className="footerBottom">

          <span>
            © 2026 Rehabics Physiotherapy
          </span>

          <span>
            The New Age Of Physiotherapy
          </span>

          <Link
            to="/"
            className="footerBackTop"
          >
            <span>Back To Top</span>
            <FiArrowUpRight />
          </Link>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
