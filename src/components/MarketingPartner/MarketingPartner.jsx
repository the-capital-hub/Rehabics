
import { motion } from "motion/react";
import { FiUserCheck } from "react-icons/fi";
import "./MarketingPartner.css";

const partners = [
  {
    id: 1,
    name: "Marketing Partner One",
    logo: "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/logo1-removebg-preview.png",
    className: "marketingPartnerLogoOne",
  },
  {
    id: 2,
    name: "Marketing Partner Two",
    logo: "https://rehabicsphysiotherapy.in/wp-content/uploads/2023/10/logo2-removebg-preview.png",
    className: "marketingPartnerLogoTwo",
  },
];

function MarketingPartner() {
  return (
    <section className="marketingPartnerSection" id="marketing-partners">
      <div className="marketingPartnerContainer">
        <motion.div
          className="marketingPartnerHeading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="marketingPartnerHeadingTop">
            <span className="marketingPartnerEyebrow">
              <span className="marketingPartnerDot" />
              OUR PARTNERS
            </span>

            <span className="marketingPartnerCount">
              02 Partners
            </span>
          </div>

          <div className="marketingPartnerHeadingContent">
            <div className="marketingPartnerHeadingLeft">
              <span className="marketingPartnerSubtitle">
                GROWING TOGETHER
              </span>

              <h2>
                Stronger
                <span>through partnership.</span>
              </h2>
            </div>

            <p>
              We value meaningful partnerships that help us support
              better experiences and accessible physiotherapy care.
            </p>
          </div>
        </motion.div>

        <div className="marketingPartnerGrid">
          {partners.map((partner, index) => (
            <motion.article
              className="marketingPartnerCard"
              key={partner.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
            >
              <div className="marketingPartnerCardTop">
                <span className="marketingPartnerIcon">
                  <FiUserCheck />
                </span>

                <span className="marketingPartnerLabel">
                  OUR PARTNER
                </span>
              </div>

              <div className="marketingPartnerLogoArea">
                <img
                  className={partner.className}
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="marketingPartnerCardFooter">
                <span>{partner.name}</span>
                <span className="marketingPartnerStatus">
                  <span />
                  Partner
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MarketingPartner;
