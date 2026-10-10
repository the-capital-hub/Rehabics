import { useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiFacebook,
  FiInstagram,
  FiMenu,
  FiChevronDown,
  FiChevronRight,
  FiX,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const serviceGroups = [
  {
    title: "Physiotherapy Services",
    slug: "physiotherapy",
    services: [
      "Musculoskeletal Assessment",
      "Myofascial Trigger Point Release",
      "Pre and Post Operative Rehab",
      "Dry Needling Therapy",
      "Injury Rehabilitation",
      "Posture Correction",
      "Cupping Therapy",
      "Kinesio Taping",
      "Traction",
      "Ultrasound Therapy",
      "Neuro Physiotherapy",
      "Pediatric Physiotherapy",
      "Pre and Postnatal Training",
      "Deep Tissue Massage",
      "Geriatric Physiotherapy",
      "Tailored Exercise Therapy",
      "IFT TENS and Electrical Stimulation",
      "Geriatric Physiotherapy and Home Care",
      "Neck and Back Pain",
      "Muscle and Joint Related Pain",
    ],
  },
  {
    title: "Training Services",
    slug: "training",
    services: [
      "Fitness Training",
      "Corporate Wellness",
      "Strength Training",
      "Sports Specific Training",
      "Sports Training for Children",
      "Physiotherapy at Home",
      "Ergonomic Advice",
      "Psychological Rehab",
      "Womens Wellness",
      "Sports Nutrition",
      "Online Physiotherapy",
    ],
  },
];

const mainLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Instagram Feed", to: "/instagram-feed" },
  { label: "Contact", to: "/contact" },
];

const toSlug = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function Navbar() {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(null);

  useEffect(() => {
    setServicesOpen(false);
    setActiveCategory(null);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileCategory(null);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setActiveCategory(null);
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setMobileCategory(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="rehabics-navbar">
      <div className="rehabics-navbar__inner">
        <Link
          className="rehabics-navbar__brand"
          to="/"
          aria-label="Rehabics home"
          onClick={() => setMobileOpen(false)}
        >
          <img src={logo} alt="Rehabics" />
        </Link>

        <nav className="rehabics-navbar__desktop" aria-label="Main navigation">
          {mainLinks.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              className={`rehabics-navbar__link ${
                location.pathname === item.to ? "is-active" : ""
              }`}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}

          <div
            className={`rehabics-services ${servicesOpen ? "is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => {
              setServicesOpen(false);
              setActiveCategory(null);
            }}
          >
            <button
              type="button"
              className={`rehabics-navbar__link rehabics-services__trigger ${
                location.pathname.startsWith("/services") ? "is-active" : ""
              }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => {
                setServicesOpen(true);
                setActiveCategory(null);
              }}
            >
              Services
              <FiChevronDown
                className={`rehabics-chevron ${servicesOpen ? "is-rotated" : ""}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div className="rehabics-services__dropdown">
                <div className="rehabics-services__intro">
                  <span className="rehabics-eyebrow">OUR SERVICES</span>
                  <p>Care and training designed around you.</p>
                  <Link
                    to="/services"
                    className="rehabics-services__all"
                    onClick={() => setServicesOpen(false)}
                  >
                    Explore all services <FiArrowUpRight />
                  </Link>
                </div>

                <div className="rehabics-services__categories">
                  {serviceGroups.map((group) => (
                    <div className="rehabics-service-group" key={group.slug}>
                      <button
                        type="button"
                        className={`rehabics-service-group__trigger ${
                          activeCategory === group.slug ? "is-selected" : ""
                        }`}
                        aria-expanded={activeCategory === group.slug}
                        onClick={() =>
                          setActiveCategory((current) =>
                            current === group.slug ? null : group.slug
                          )
                        }
                      >
                        <span className="rehabics-service-group__icon">
                          {group.slug === "physiotherapy" ? "01" : "02"}
                        </span>
                        <span>{group.title}</span>
                        <FiChevronRight
                          className={`rehabics-group-chevron ${
                            activeCategory === group.slug ? "is-rotated" : ""
                          }`}
                        />
                      </button>

                      {activeCategory === group.slug && (
                        <div className="rehabics-service-group__items">
                          {group.services.map((service) => (
                            <Link
                              key={service}
                              to={`/services/${toSlug(service)}`}
                              onClick={() => {
                                setServicesOpen(false);
                                setActiveCategory(null);
                              }}
                            >
                              {service}
                              <FiArrowUpRight aria-hidden="true" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {mainLinks.slice(2).map((item) => (
            <Link
              key={item.to}
              className={`rehabics-navbar__link ${
                location.pathname === item.to ? "is-active" : ""
              }`}
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="rehabics-navbar__actions">
          <div className="rehabics-navbar__socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FiFacebook />
            </a>
          </div>

          <Link
            to="/appointment"
            className="rehabics-navbar__cta"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment <FiArrowUpRight />
          </Link>

          <button
            type="button"
            className="rehabics-navbar__menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="rehabics-mobile-menu" aria-label="Mobile navigation">
          {mainLinks.slice(0, 2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rehabics-mobile-menu__link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label} <FiArrowUpRight />
            </Link>
          ))}

          <div className="rehabics-mobile-services">
            <button
              type="button"
              className="rehabics-mobile-menu__link"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((current) => !current)}
            >
              Services
              <FiChevronDown className={mobileServicesOpen ? "is-rotated" : ""} />
            </button>

            {mobileServicesOpen && (
              <div className="rehabics-mobile-services__content">
                <Link
                  to="/services"
                  className="rehabics-mobile-services__overview"
                  onClick={() => setMobileOpen(false)}
                >
                  All Services <FiArrowUpRight />
                </Link>

                {serviceGroups.map((group) => (
                  <div className="rehabics-mobile-group" key={group.slug}>
                    <button
                      type="button"
                      className="rehabics-mobile-group__trigger"
                      aria-expanded={mobileCategory === group.slug}
                      onClick={() =>
                        setMobileCategory((current) =>
                          current === group.slug ? null : group.slug
                        )
                      }
                    >
                      {group.title}
                      <FiChevronDown
                        className={mobileCategory === group.slug ? "is-rotated" : ""}
                      />
                    </button>

                    {mobileCategory === group.slug && (
                      <div className="rehabics-mobile-group__items">
                        {group.services.map((service) => (
                          <Link
                            key={service}
                            to={`/services/${toSlug(service)}`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {service}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(2).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rehabics-mobile-menu__link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label} <FiArrowUpRight />
            </Link>
          ))}

          <Link
            to="/appointment"
            className="rehabics-mobile-menu__cta"
            onClick={() => setMobileOpen(false)}
          >
            Book Appointment <FiArrowUpRight />
          </Link>
        </nav>
      )}
    </header>
  );
}
