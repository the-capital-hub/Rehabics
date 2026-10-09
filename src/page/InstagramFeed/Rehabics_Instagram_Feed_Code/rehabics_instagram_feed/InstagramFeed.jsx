import { motion } from "motion/react";
import { FiArrowUpRight, FiInstagram, FiPlay, FiHeart } from "react-icons/fi";
import "./InstagramFeed.css";

const instagramPosts = [
  {
    type: "Reel",
    category: "Pain Education",
    title: "Understand the root cause of pain",
    url: "https://www.instagram.com/reel/DC1Zgv7Srjz/",
  },
  {
    type: "Reel",
    category: "Physiotherapy",
    title: "Movement, recovery and better everyday function",
    url: "https://www.instagram.com/reel/DCgoTT-JPRo/",
  },
  {
    type: "Reel",
    category: "Movement Health",
    title: "Small movement habits that can make a difference",
    url: "https://www.instagram.com/reel/DCVxXvsp76X/",
  },
  {
    type: "Reel",
    category: "Recovery Stories",
    title: "A closer look at the recovery journey",
    url: "https://www.instagram.com/reel/DB8lucySGKO/",
  },
  {
    type: "Reel",
    category: "Posture & Mobility",
    title: "Build awareness of your posture and movement",
    url: "https://www.instagram.com/reel/DBjG2Q2yZ5I/",
  },
  {
    type: "Reel",
    category: "Injury Support",
    title: "Get to know physiotherapy based recovery",
    url: "https://www.instagram.com/reel/DB0bUVBIq5-/",
  },
  {
    type: "Reel",
    category: "Active Living",
    title: "Move with more confidence in daily life",
    url: "https://www.instagram.com/reel/DBdsPWRp1uW/",
  },
  {
    type: "Post",
    category: "Community",
    title: "More from the Rehabics community",
    url: "https://www.instagram.com/p/DCeuVlYy_OJ/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function InstagramFeed() {
  return (
    <main className="rehabInstagramPage">
      <section className="rifHero">
        <div className="rifHeroGlow" aria-hidden="true" />
        <div className="rifContainer rifHeroGrid">
          <motion.div
            className="rifHeroCopy"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <span className="rifEyebrow"><span /> LIFE AT REHABICS</span>
            <h1>Move better.<br /><span>Live with confidence.</span></h1>
            <p>Explore physiotherapy tips, movement education and stories from the Rehabics community.</p>
            <a className="rifButton rifButtonPrimary" href="https://www.instagram.com/rehabics/" target="_blank" rel="noreferrer">
              <FiInstagram /> Follow @rehabics <FiArrowUpRight />
            </a>
            <div className="rifHeroMeta"><span><FiHeart /> Care that puts people first</span><span><FiPlay /> Tips, reels and stories</span></div>
          </motion.div>
          <motion.div
            className="rifHeroCard"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="rifHeroCardTop"><span className="rifInstagramMark"><FiInstagram /></span><div><strong>@rehabics</strong><small>Physiotherapy and movement health</small></div><FiArrowUpRight className="rifHeroArrow" /></div>
            <div className="rifHeroCardBody"><div className="rifOrbit rifOrbitOne" /><div className="rifOrbit rifOrbitTwo" /><div className="rifHeroSymbol"><FiActivityFallback /></div><span className="rifHeroWord">Move with purpose</span><span className="rifHeroSub">Learn · Recover · Progress</span></div>
            <div className="rifHeroCardBottom"><span>Movement education</span><span>Recovery stories</span><span>Everyday wellbeing</span></div>
          </motion.div>
        </div>
      </section>

      <section className="rifFeedSection">
        <div className="rifContainer">
          <motion.div className="rifSectionHeading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.45 }}>
            <span className="rifSectionLabel">FROM OUR INSTAGRAM</span>
            <h2>Learn something new <span>with every post.</span></h2>
            <p>Browse selected posts and reels from our Instagram page. Open any post to watch it on Instagram.</p>
          </motion.div>
          <div className="rifPostGrid">
            {instagramPosts.map((post, index) => (
              <motion.article
                className="rifPostCard"
                key={post.url}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              >
                <a className="rifPostMedia" href={post.url} target="_blank" rel="noreferrer" aria-label={`Open ${post.type}: ${post.title} on Instagram`}>
                  <div className="rifPostArtwork">
                    <span className="rifPostType">{post.type === "Reel" ? <FiPlay /> : <FiInstagram />}{post.type}</span>
                    <span className="rifPostBigIcon"><FiInstagram /></span>
                    <span className="rifPostArtworkLabel">REHABICS</span>
                    <span className="rifPostOpen"><FiArrowUpRight /></span>
                  </div>
                </a>
                <div className="rifPostInfo"><span className="rifPostCategory">{post.category}</span><h3>{post.title}</h3><a href={post.url} target="_blank" rel="noreferrer" className="rifPostLink">View on Instagram <FiArrowUpRight /></a></div>
              </motion.article>
            ))}
          </div>
          <div className="rifFeedFooter"><div><strong>Want more tips and stories?</strong><p>Visit our Instagram profile for the latest from Rehabics.</p></div><a className="rifButton rifButtonDark" href="https://www.instagram.com/rehabics/" target="_blank" rel="noreferrer"><FiInstagram /> Visit Instagram <FiArrowUpRight /></a></div>
        </div>
      </section>
    </main>
  );
}

function FiActivityFallback() {
  return <FiHeart aria-hidden="true" />;
}
