
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Conditions", path: "/conditions" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbarScrolled" : ""}`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbarContainer">
        <Link
          to="/"
          className="navbarLogo"
          aria-label="Rehabics Physiotherapy Home"
        >
          <img
            src={logo}
            alt="Rehabics Physiotherapy"
            className="navbarLogoImage"
          />
        </Link>

        <nav className="desktopNav" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`navLink ${active ? "navLinkActive" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="navbarActions">
          <div className="navbarSocials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="socialLink instagramLink"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="socialLink facebookLink"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
          </div>

          <Link to="/contact" className="navbarCta">
            <span>Book Appointment</span>
            <FiArrowUpRight />
          </Link>

          <button
            type="button"
            className={`mobileMenuButton ${
              menuOpen ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobileNavigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobileNavigation"
            className="mobileMenu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mobileMenuInner">
              <nav
                className="mobileNav"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => {
                  const active = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`mobileNavLink ${
                        active ? "mobileNavActive" : ""
                      }`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <FiArrowUpRight />
                    </Link>
                  );
                })}
              </nav>

              <Link
                to="/contact"
                className="mobileAppointment"
                onClick={() => setMenuOpen(false)}
              >
                <span>Book Appointment</span>
                <FiArrowUpRight />
              </Link>

              <p className="mobileMenuNote">
                The New Age Of Physiotherapy
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
