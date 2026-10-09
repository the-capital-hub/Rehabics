import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FiActivity,
  FiArrowDown,
  FiArrowUpRight,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
} from "react-icons/fi";

import "./Hero.css";
import one from "../../assets/one.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";

const slides = [
  {
    image: one,
    eyebrow: "Welcome To Rehabics",
    title: "Move Better.",
    accent: "Live Better.",
    description:
      "Personalised physiotherapy and rehabilitation care designed around your movement, recovery and everyday life.",
  },
  {
    image: two,
    eyebrow: "Your Recovery Matters",
    title: "Your Recovery.",
    accent: "Our Priority.",
    description:
      "Discover personalised physiotherapy care focused on mobility, strength and helping you return to the activities you love.",
  },
  {
    image: three,
    eyebrow: "The New Age Of Physiotherapy",
    title: "Move With",
    accent: "Confidence.",
    description:
      "Take the next step towards better movement with professional guidance and a personalised rehabilitation journey.",
  },
];

const focusAreas = [
  "Sports Injuries",
  "Spine Care",
  "Women's Health",
  "Muscle And Joint Pain",
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section
      className="editorialHero"
      id="top"
      aria-label="Rehabics Physiotherapy introduction"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="heroBackgrounds" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`heroImage ${
              index === activeSlide ? "heroImageActive" : ""
            }`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          />
        ))}
      </div>

      <div className="heroOverlay" />
      <div className="heroTexture" />

      <div className="heroInner">
        <motion.div
          className="heroTopLine"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#top" className="heroBrand">
            <span className="heroBrandIcon">
              <FiActivity />
            </span>
            <span>
              REHABICS
              <small>PHYSIOTHERAPY</small>
            </span>
          </a>

          <div className="heroLocation">
            <span className="heroLocationDot" />
            <FiMapPin />
            <span>Bengaluru, Karnataka</span>
          </div>
        </motion.div>

        <div className="heroMain">
          <AnimatePresence mode="wait">
            <motion.div
              className="heroSlideContent"
              key={activeSlide}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div className="heroEyebrow">
                <span className="eyebrowDot" />
                <span>{currentSlide.eyebrow}</span>
              </div>

              <div className="heroTitleWrapper">
                <h1 className="heroTitle heroTitleOne">
                  {currentSlide.title}
                </h1>

                <div className="heroTitleRow">
                  <h2 className="heroTitle heroTitleAccent">
                    {currentSlide.accent}
                  </h2>

                  <div className="heroOrb" aria-hidden="true">
                    <FiActivity />
                  </div>
                </div>
              </div>

              <div className="heroBottom">
                <div className="heroDescription">
                  <span className="heroDescriptionLine" />
                  <p>{currentSlide.description}</p>
                </div>

                <div className="heroActionArea">
                  <a
                    href="mailto:architat59@gmail.in?subject=Physiotherapy%20Appointment"
                    className="heroAppointment"
                  >
                    <span>Make An Appointment</span>
                    <span className="appointmentIcon">
                      <FiArrowUpRight />
                    </span>
                  </a>

                  <a href="#about" className="heroScroll">
                    <span>Discover Rehabics</span>
                    <FiArrowDown />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="heroFocusBar"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="focusLabel">Areas Of Care</span>

          <div className="focusItems">
            {focusAreas.map((area, index) => (
              <div className="focusArea" key={area}>
                <span className="focusNumber">
                  0{index + 1}
                </span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="heroSideText" aria-hidden="true">
        MOVEMENT · RECOVERY · WELLNESS
      </div>

      <div className="heroSliderControls">
        <span className="heroSlideCounter">
          <strong>0{activeSlide + 1}</strong>
          <span>/ 0{slides.length}</span>
        </span>

        <button
          type="button"
          className="heroArrow"
          onClick={() => goToSlide(activeSlide - 1)}
          aria-label="Previous slide"
        >
          <FiChevronLeft />
        </button>

        <div className="heroDots" aria-label="Choose hero slide">
          {slides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              className={`heroDot ${
                activeSlide === index ? "heroDotActive" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="heroArrow"
          onClick={() => goToSlide(activeSlide + 1)}
          aria-label="Next slide"
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Hero;