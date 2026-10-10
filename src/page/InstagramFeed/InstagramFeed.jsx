
import { motion } from "motion/react";
import {
  FiArrowUpRight,
  FiInstagram,
  FiPlay,
} from "react-icons/fi";

import "./InstagramFeed.css";

const instagramPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DBdsPWRp1uW/",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/sb-instagram-feed-images/463770279_518552960946275_739341859288785897_nlow.jpg",
    alt: "Rehabics physiotherapy and movement",
    type: "Reel",
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DCVxXvsp76X/",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/sb-instagram-feed-images/466854987_18035418170462293_176485695394525492_nlow.jpg",
    alt: "Rehabics movement and recovery",
    type: "Reel",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DB8lucySGKO/",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/sb-instagram-feed-images/464669964_1632756120922508_4171501616072475235_nlow.jpg",
    alt: "Rehabics patient recovery journey",
    type: "Reel",
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DB0bUVBIq5-/",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/sb-instagram-feed-images/465088158_956674526285821_2522979061285852980_nlow.jpg",
    alt: "Rehabics physiotherapy education",
    type: "Reel",
  },
  {
    id: 5,
    url: "https://www.instagram.com/p/DCeuVlYy_OJ/",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/sb-instagram-feed-images/467524621_18035796335462293_3847401145778703917_nlow.jpg",
    alt: "Rehabics patient community",
    type: "Post",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DC1Zgv7Srjz/",
    image:
      "https://rehabicsphysiotherapy.in/wp-content/uploads/sb-instagram-feed-images/467043204_18035633564462293_4329998035285165351_nlow.jpg",
    alt: "Rehabics recovery and wellness",
    type: "Reel",
  },
];

const InstagramFeed = () => {
  return (
    <section className="rifSection" id="instagram">
      <div className="rifContainer">
        <motion.div
          className="rifHero"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="rifHeroContent">
            <span className="rifEyebrow">
              <FiInstagram />
              REHABICS ON INSTAGRAM
            </span>

            <h2>
              Movement is better
              <br />
              <span>when we share it.</span>
            </h2>

            <p>
              Discover movement education, physiotherapy
              insights and recovery inspiration from Rehabics.
            </p>

            <a
              className="rifProfileButton"
              href="https://www.instagram.com/rehabics/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
              Follow @rehabics
              <FiArrowUpRight />
            </a>

            <div className="rifHeroStats">
              <div>
                <strong>Movement</strong>
                <span>Made meaningful</span>
              </div>

              <div>
                <strong>Recovery</strong>
                <span>Guided with care</span>
              </div>

              <div>
                <strong>Community</strong>
                <span>Growing together</span>
              </div>
            </div>
          </div>

          <div className="rifHeroVisual">
            <div className="rifVisualGlow" />

            <div className="rifVisualCard">
              <div className="rifVisualIcon">
                <FiInstagram />
              </div>

              <span className="rifVisualLabel">
                YOUR MOVEMENT JOURNEY
              </span>

              <h3>
                Progress begins
                <br />
                with movement.
              </h3>

              <div className="rifVisualLine">
                {[30, 48, 39, 70, 58, 88, 100].map(
                  (height, index) => (
                    <span
                      key={index}
                      style={{ height: `${height}%` }}
                    />
                  )
                )}
              </div>

              <div className="rifVisualBottom">
                <span>Move with purpose</span>
                <FiArrowUpRight />
              </div>
            </div>

            <div className="rifFloatingTag">
              <FiInstagram />
              <span>Every step counts</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rifFeedHeader"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="rifSectionEyebrow">
              FROM OUR COMMUNITY
            </span>

            <h2>Latest from Instagram</h2>

            <p>
              Explore real posts from the Rehabics community.
            </p>
          </div>

          <a
            className="rifTextLink"
            href="https://www.instagram.com/rehabics/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Instagram
            <FiArrowUpRight />
          </a>
        </motion.div>

        <div className="rifPostsGrid">
          {instagramPosts.map((post, index) => (
            <motion.a
              className="rifPostCard"
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open Rehabics Instagram ${post.type} ${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
              }}
            >
              <div className="rifPostMedia">
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="rifImageInstagramIcon">
                  <FiInstagram />
                </span>

                {post.type === "Reel" && (
                  <span className="rifPlayIcon">
                    <FiPlay />
                  </span>
                )}

                <span className="rifImageOpenIcon">
                  <FiArrowUpRight />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="rifBottomCta">
          <div className="rifBottomIcon">
            <FiInstagram />
          </div>

          <div className="rifBottomContent">
            <h3>Be part of the Rehabics community</h3>
            <p>
              Follow us for more movement and recovery inspiration.
            </p>
          </div>

          <a
            href="https://www.instagram.com/rehabics/"
            target="_blank"
            rel="noopener noreferrer"
            className="rifBottomButton"
          >
            Follow us
            <FiArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
