
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
      setScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbarScrolled" : ""}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbarContainer">

        {/* Logo */}

        <Link
          to="/"
          className="navbarLogo"
          aria-label="Rehabics Physiotherapy"
        >
          <img
            src={logo}
            alt="Rehabics Physiotherapy"
            className="navbarLogoImage"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="desktopNav" aria-label="Main navigation">
          {navItems.map((item) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`navLink ${
                  active ? "navLinkActive" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}

        <div className="navbarActions">

          <div className="navbarSocials">
            <a
              href="#"
              className="socialLink"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="#"
              className="socialLink"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
          </div>

          <Link
            to="/contact"
            className="navbarCta"
          >
            <span>Book Appointment</span>
            <FiArrowUpRight />
          </Link>

          <button
            type="button"
            className={`mobileMenuButton ${
              menuOpen ? "menuButtonActive" : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobileMenu"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mobileMenuInner">

              <nav className="mobileNav">
                {navItems.map((item) => {
                  const active =
                    location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`mobileNavLink ${
                        active ? "mobileNavActive" : ""
                      }`}
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

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
