
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheckCircle,
  FiActivity,
  FiHeart,
  FiTarget,
  FiShield,
  FiCalendar,
  FiUserCheck,
  FiClipboard,
  FiMessageCircle,
} from "react-icons/fi";

import { getServiceBySlug, serviceGroups } from "./servicesData";
import "./ServiceDetail.css";

const categoryLabels = {
  physiotherapy: "Physiotherapy Services",
  training: "Training Services",
};

const serviceVisuals = [
  {
    match: ["dry needling", "trigger point"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    alt: "Physiotherapy treatment in a clinical setting",
  },
  {
    match: ["sports", "injury", "strength", "fitness"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
    alt: "Fitness and physical conditioning",
  },
  {
    match: ["massage", "myofascial", "cupping"],
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85",
    alt: "Relaxing therapeutic care",
  },
  {
    match: ["posture", "ergonomic", "neck", "back"],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=85",
    alt: "Movement and physical exercise",
  },
  {
    match: ["pediatric", "children"],
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
    alt: "Healthcare professional providing care",
  },
  {
    match: ["home", "geriatric", "elderly"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    alt: "Professional physiotherapy care",
  },
];

const defaultVisual = {
  image:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
  alt: "Physiotherapy care and rehabilitation",
};

function getServiceVisual(title) {
  const normalizedTitle = title.toLowerCase();

  return (
    serviceVisuals.find((visual) =>
      visual.match.some((keyword) => normalizedTitle.includes(keyword))
    ) || defaultVisual
  );
}

function getRelatedSlug(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    document.title = service
      ? `${service.title} | Rehabics`
      : "Service Details | Rehabics";
  }, [service]);

  if (!service) {
    return (
      <main className="rehabics-service-not-found">
        <span className="rehabics-service-detail__eyebrow">
          SERVICE DETAILS
        </span>

        <h1>Let us help you find the right care</h1>

        <p>
          Explore our services to find an option that suits your needs.
        </p>

        <Link className="rehabics-service-detail__button" to="/services">
          Explore services <FiArrowUpRight />
        </Link>
      </main>
    );
  }

  const group = serviceGroups.find(
    (item) => item.slug === service.category
  );

  const relatedServices = (group?.services || [])
    .filter((name) => name !== service.title)
    .slice(0, 3);

  const visual = getServiceVisual(service.title);

  const careHighlights = [
    {
      icon: <FiUserCheck />,
      title: "Personalised attention",
      text: "Care guided by your individual needs and goals.",
    },
    {
      icon: <FiTarget />,
      title: "Goal focused care",
      text: "A clear approach to your movement and recovery goals.",
    },
    {
      icon: <FiActivity />,
      title: "Movement and function",
      text: "Support for mobility, strength and daily activities.",
    },
    {
      icon: <FiShield />,
      title: "Guided by a clinician",
      text: "Suitable options explained after an individual assessment.",
    },
  ];

  const careSteps = [
    {
      icon: <FiMessageCircle />,
      number: "01",
      title: "Understand your concerns",
      text: "Discuss your symptoms, daily activities and personal goals.",
    },
    {
      icon: <FiClipboard />,
      number: "02",
      title: "Assess your needs",
      text: "Your clinician evaluates your condition and movement needs.",
    },
    {
      icon: <FiActivity />,
      number: "03",
      title: "Plan your care",
      text: "Explore suitable treatment options based on your assessment.",
    },
    {
      icon: <FiHeart />,
      number: "04",
      title: "Review your progress",
      text: "Your plan can be reviewed as your needs and progress change.",
    },
  ];

  return (
    <main className="rehabics-service-detail">
      <div className="rehabics-service-detail__page">

        {/* Hero section */}

        <section className="rehabics-service-detail__hero">
          <div className="rehabics-service-detail__hero-copy">
            <Link
              to="/services"
              className="rehabics-service-detail__back"
            >
              <FiArrowLeft />
              <span>All services</span>
            </Link>

            <div className="rehabics-service-detail__eyebrow">
              <span className="rehabics-service-detail__eyebrow-dot" />
              {categoryLabels[service.category] || "Rehabics Care"}
            </div>

            <h1>
              {service.title}
              <span> Care that moves you forward</span>
            </h1>

            <p className="rehabics-service-detail__intro">
              {service.intro}
            </p>

            <div className="rehabics-service-detail__hero-actions">
              <Link
                className="rehabics-service-detail__button"
                to="/appointment"
              >
                <FiCalendar />
                Book an appointment
                <FiArrowUpRight />
              </Link>

              <a
                className="rehabics-service-detail__text-link"
                href="#treatment"
              >
                Discover the treatment
                <FiArrowUpRight />
              </a>
            </div>

            <div className="rehabics-service-detail__trust">
              <div>
                <FiCheckCircle />
                <span>Individual care</span>
              </div>
              <div>
                <FiCheckCircle />
                <span>Clear guidance</span>
              </div>
              <div>
                <FiCheckCircle />
                <span>Progress focused</span>
              </div>
            </div>
          </div>

          <div className="rehabics-service-detail__hero-visual">
            <div className="rehabics-service-detail__image-frame">
              <img
                src={visual.image}
                alt={visual.alt}
                fetchPriority="high"
              />
            </div>

            <div className="rehabics-service-detail__floating-card">
              <span className="rehabics-service-detail__floating-icon">
                <FiHeart />
              </span>
              <div>
                <strong>Care built around you</strong>
                <p>Your needs guide the plan</p>
              </div>
            </div>

            <span className="rehabics-service-detail__decor rehabics-service-detail__decor--one" />
            <span className="rehabics-service-detail__decor rehabics-service-detail__decor--two" />
          </div>
        </section>

        {/* Care highlights */}

        <section className="rehabics-service-detail__highlights">
          {careHighlights.map((item) => (
            <article
              className="rehabics-service-detail__highlight"
              key={item.title}
            >
              <span className="rehabics-service-detail__highlight-icon">
                {item.icon}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        {/* Treatment overview */}

        <section
          className="rehabics-service-detail__overview"
          id="treatment"
        >
          <div className="rehabics-service-detail__overview-copy">
            <span className="rehabics-service-detail__eyebrow">
              UNDERSTANDING YOUR CARE
            </span>

            <h2>
              Get to know your
              <span> treatment options</span>
            </h2>

            <p>{service.approach}</p>

            <p>
              The right approach depends on your symptoms, health history
              and assessment. Your clinician can explain the available
              options and help you understand what may be suitable for you.
            </p>

            <div className="rehabics-service-detail__goal">
              <span className="rehabics-service-detail__goal-icon">
                <FiTarget />
              </span>

              <div>
                <h3>What we work towards</h3>
                <p>{service.benefit}</p>
              </div>
            </div>
          </div>

          <div className="rehabics-service-detail__overview-image">
            <img src={visual.image} alt={visual.alt} loading="lazy" />

            <div className="rehabics-service-detail__image-caption">
              <FiCheckCircle />
              Care tailored to your needs
            </div>
          </div>
        </section>

        {/* Care process */}

        <section className="rehabics-service-detail__process">
          <div className="rehabics-service-detail__section-heading">
            <span className="rehabics-service-detail__eyebrow">
              YOUR JOURNEY
            </span>

            <h2>A clearer path to better movement</h2>

            <p>
              Understand each stage of your care, from your first
              conversation to reviewing your progress.
            </p>
          </div>

          <div className="rehabics-service-detail__steps">
            {careSteps.map((step) => (
              <article
                className="rehabics-service-detail__step"
                key={step.number}
              >
                <div className="rehabics-service-detail__step-top">
                  <span className="rehabics-service-detail__step-icon">
                    {step.icon}
                  </span>
                  <span className="rehabics-service-detail__step-number">
                    {step.number}
                  </span>
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Important information */}

        <section className="rehabics-service-detail__note">
          <span className="rehabics-service-detail__note-icon">
            <FiHeart />
          </span>

          <div>
            <h3>Your care should fit your needs</h3>
            <p>
              Treatment suitability and outcomes vary from person to person.
              Your clinician can discuss potential benefits, limitations
              and any relevant precautions before care begins.
            </p>
          </div>
        </section>

        {/* Related services */}

        {relatedServices.length > 0 && (
          <section className="rehabics-service-detail__related-section">
            <div className="rehabics-service-detail__related-heading">
              <div>
                <span className="rehabics-service-detail__eyebrow">
                  EXPLORE MORE
                </span>
                <h2>More ways we can support you</h2>
              </div>

              <Link
                className="rehabics-service-detail__text-link"
                to="/services"
              >
                View all services <FiArrowUpRight />
              </Link>
            </div>

            <div className="rehabics-service-detail__related-grid">
              {relatedServices.map((name) => (
                <Link
                  className="rehabics-service-detail__related-card"
                  key={name}
                  to={`/services/${getRelatedSlug(name)}`}
                >
                  <span className="rehabics-service-detail__related-icon">
                    <FiActivity />
                  </span>

                  <span className="rehabics-service-detail__related-name">
                    {name}
                  </span>

                  <FiArrowUpRight />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Appointment CTA */}

        <section className="rehabics-service-detail__cta">
          <div className="rehabics-service-detail__cta-copy">
            <span className="rehabics-service-detail__eyebrow">
              YOUR NEXT STEP
            </span>

            <h2>Let’s talk about what you need</h2>

            <p>
              Have questions about this service? Connect with the Rehabics
              team to discuss your concerns and possible next steps.
            </p>
          </div>

          <Link
            className="rehabics-service-detail__button rehabics-service-detail__button--light"
            to="/appointment"
          >
            Book an appointment
            <FiArrowUpRight />
          </Link>
        </section>

      </div>
    </main>
  );
}
