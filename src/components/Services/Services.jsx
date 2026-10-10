
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Dumbbell,
  HeartPulse,
  HandHeart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  PersonStanding,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Services.css";


const serviceImages = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1540206276207-3af25c08abc4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518611012118-f0c5e7e4c8a5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517838277536-fc6f8e7f3b0e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518611012118-3b5c6e1e3f5a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517838277536-fc6f8e7f3b0e?auto=format&fit=crop&w=900&q=80&sat=-10",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80&sat=10"
];


const services = [
  ["Online Physiotherapy", "Professional physiotherapy guidance and personalised exercise support from home.", "rehab", "teal", Activity],
  ["Corporate Wellness", "Employee wellbeing through posture education and workplace movement sessions.", "wellness", "pink", HeartPulse],
  ["Geriatric Physiotherapy", "Support mobility, balance and everyday independence as you age.", "wellness", "purple", HandHeart],
  ["Pediatric Physiotherapy", "Movement support to help children develop strength and coordination.", "rehab", "teal", PersonStanding],
  ["Ergonomic Advice", "Improve sitting, standing and workstation habits for comfortable movement.", "pain", "pink", ShieldCheck],
  ["Physiotherapy at Home", "Convenient physiotherapy and rehabilitation support in your home.", "rehab", "purple", HandHeart],
  ["Musculoskeletal Assessment", "Assess movement limitations and create a personalised care plan.", "therapy", "teal", Stethoscope],
  ["Myofascial and Trigger Point Release", "Therapist selected techniques for muscle tightness and trigger points.", "therapy", "pink", HandHeart],
  ["Pre and Post Operative Rehab", "Prepare for surgery or rebuild movement and strength after surgery.", "rehab", "purple", Activity],
  ["Dry Needling Therapy", "Explore dry needling as part of an appropriate therapist guided plan.", "therapy", "teal", Stethoscope],
  ["Injury Rehabilitation", "Rebuild movement, strength and confidence after an injury.", "rehab", "pink", ShieldCheck],
  ["Posture Correction", "Improve posture awareness with exercises and practical guidance.", "pain", "purple", PersonStanding],
  ["Cupping Therapy", "Discuss whether cupping is suitable for your individual treatment needs.", "therapy", "teal", HandHeart],
  ["Kinesio Taping", "Therapist applied taping selected for your movement and rehabilitation goals.", "rehab", "pink", Activity],
  ["Traction Therapy", "Clinical assessment to determine whether traction suits your condition.", "therapy", "purple", Stethoscope],
  ["Ultrasound Therapy", "Therapeutic ultrasound when appropriate within your physiotherapy plan.", "therapy", "teal", Activity],
  ["Neuro Physiotherapy", "Support balance, coordination and daily function with tailored rehabilitation.", "rehab", "pink", Brain],
  ["Pre and Postnatal Training", "Movement and exercise guidance before and after childbirth.", "wellness", "purple", HeartPulse],
  ["Deep Tissue Massage", "Therapist selected soft tissue techniques based on your comfort and goals.", "therapy", "teal", HandHeart],
  ["Tailored Exercise Therapy", "Follow an exercise programme designed around your ability and goals.", "rehab", "pink", Dumbbell],
  ["IFT, TENS and Electrical Stimulation", "Explore electrical stimulation options based on your clinical needs.", "therapy", "purple", Activity],
  ["Geriatric Physiotherapy and Home Care", "Support older adults with balance, mobility and daily movement at home.", "wellness", "teal", HandHeart],
  ["Neck and Back Pain", "Address neck and back discomfort through assessment and exercise guidance.", "pain", "pink", HeartPulse],
  ["Muscle and Joint Related Pain", "Personalised assessment and care focused on comfortable movement.", "therapy", "purple", Stethoscope],
  ["Fitness Training", "Build a consistent fitness routine with suitable exercise guidance.", "wellness", "teal", Dumbbell],
  ["Strength Training", "Develop strength and functional capacity through progressive exercises.", "rehab", "pink", Dumbbell],
  ["Sports Specific Training", "Practise sport relevant movement and conditioning for performance.", "rehab", "purple", Activity],
  ["Psychological Rehabilitation Support", "Compassionate goal setting alongside appropriate professional support.", "wellness", "teal", Brain],
  ["Women's Wellness", "Movement, strength and wellness guidance tailored to women's needs.", "wellness", "pink", HeartPulse],
  ["Sports Nutrition", "Nutrition guidance to support training and recovery from a qualified professional.", "wellness", "purple", ShieldCheck],
  ["Online Wellness Guidance", "Practical guidance on daily movement, exercise and healthy routines.", "rehab", "teal", Sparkles],
].map(([title, description, category, accent, icon], index) => ({
  title,
  description,
  category,
  image: serviceImages[index % serviceImages.length],
  accent,
  icon,
}));
function getCardsPerView() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth <= 700) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 4;
}

export default function Services() {
  const trackRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(getCardsPerView);
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = Math.max(0, services.length - visibleCards);
  const currentIndex = Math.min(activeIndex, maxIndex);
  const pageCount = Math.ceil(services.length / visibleCards);
  const activePage = Math.min(
    Math.floor(currentIndex / visibleCards),
    pageCount - 1
  );

  const moveTo = useCallback(
    (index, behavior = "smooth") => {
      const track = trackRef.current;
      if (!track) return;

      const safeIndex = Math.max(0, Math.min(index, maxIndex));
      const card = track.children[safeIndex];
      if (!card) return;

      track.scrollTo({
        left: card.offsetLeft - track.offsetLeft,
        behavior,
      });

      setActiveIndex(safeIndex);
    },
    [maxIndex]
  );

  useEffect(() => {
    const updateCards = () => {
      const nextCount = getCardsPerView();
      setVisibleCards(nextCount);
    };

    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const frame = requestAnimationFrame(() => {
      const index = Math.min(activeIndex, maxIndex);
      const card = track.children[index];

      if (card) {
        track.scrollTo({
          left: card.offsetLeft - track.offsetLeft,
          behavior: "auto",
        });
      }

      setActiveIndex(index);
    });

    return () => cancelAnimationFrame(frame);
    // Re-align after changing the number of visible cards.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCards, maxIndex]);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    let closestIndex = 0;
    let closestDistance = Infinity;

    Array.from(track.children).forEach((card, index) => {
      const cardLeft = card.offsetLeft - track.offsetLeft;
      const distance = Math.abs(cardLeft - track.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(Math.min(closestIndex, maxIndex));
  }, [maxIndex]);

  const goNext = () => {
    moveTo(Math.min(currentIndex + visibleCards, maxIndex));
  };

  const goPrevious = () => {
    moveTo(Math.max(currentIndex - visibleCards, 0));
  };

  return (
    <section className="servicesSection" id="services">
      <div className="servicesContainer">
        <header className="servicesHeader">
          <div className="servicesHeaderText">
            <span className="servicesEyebrow">
              <Sparkles size={16} />
              CARE THAT MOVES YOU FORWARD
            </span>

            <h2>
              Treat Yourself to
              <span> Physiotherapy Services</span>
            </h2>

            <p>
              Personalised physiotherapy and wellness support to help you
              move better, feel stronger and get back to the activities
              you enjoy.
            </p>
          </div>

          <div className="servicesHeaderBadge">
            <span className="servicesBadgeIcon">
              <HeartPulse size={24} />
            </span>
            <span>
              <strong>Personalised Care</strong>
              <small>Focused on your goals</small>
            </span>
          </div>
        </header>

        <div className="servicesCarousel">
          <div
            className="servicesGrid"
            ref={trackRef}
            onScroll={handleScroll}
            aria-label="Physiotherapy services"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className={`serviceCard serviceCard${service.accent}`}
                  key={service.title}
                >
                  <div className="serviceImageWrap">
                    <img
                      className="serviceImage"
                      src={service.image}
                      alt={service.title}
                      loading={index < 4 ? "eager" : "lazy"}
                    />

                    <div className="serviceImageOverlay" />

                    <div className="serviceCardTop">
                      <span className="serviceNumber">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="serviceIcon">
                        <Icon size={21} strokeWidth={1.8} />
                      </span>
                    </div>

                    <div className="serviceImageTitle">
                      <span className="serviceImageLine" />
                      <span>REHABICS CARE</span>
                    </div>
                  </div>

                  <div className="serviceCardContent">
                    <div className="serviceTitleRow">
                      <h3>{service.title}</h3>
                      <span className="serviceArrow">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>

                    <p className="serviceDescription">
                      {service.description}
                    </p>

                    <div className="serviceCardFooter">
                      <Link
                        to="/contact"
                        className="serviceLearnMore"
                        aria-label={`Enquire about ${service.title}`}
                      >
                        Explore Service
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="servicesCarouselControls">
            <div className="servicesCarouselInfo" aria-live="polite">
              <span className="servicesCurrentCount">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span className="servicesCountDivider" />
              <span className="servicesTotalCount">
                {String(maxIndex + 1).padStart(2, "0")}
              </span>
              <span className="servicesCountLabel">
                Browse our services
              </span>
            </div>

            <div className="servicesCarouselActions">
              <button
                type="button"
                className="servicesCarouselArrow"
                onClick={goPrevious}
                disabled={currentIndex === 0}
                aria-label="Previous services"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                className="servicesCarouselArrow"
                onClick={goNext}
                disabled={currentIndex >= maxIndex}
                aria-label="Next services"
              >
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          <div className="servicesDots" aria-label="Choose service group">
            {Array.from({ length: pageCount }, (_, page) => (
              <button
                type="button"
                key={page}
                className={`servicesDot ${
                  page === activePage ? "active" : ""
                }`}
                onClick={() =>
                  moveTo(Math.min(page * visibleCards, maxIndex))
                }
                aria-label={`Show service group ${page + 1}`}
                aria-current={page === activePage ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <div className="servicesBottom">
          <div className="servicesBottomText">
            <span className="servicesBottomIcon">
              <ShieldCheck size={22} />
            </span>
            <p>
              Not sure which service is right for you?
              <strong> We are here to help.</strong>
            </p>
          </div>

          <Link to="/contact" className="servicesContactLink">
            Talk to Our Team
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
