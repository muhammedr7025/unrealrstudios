'use client';
import { useState } from 'react';
import styles from './pricing.module.css';
import { MdArrowOutward, MdCheck, MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);

  const scrollIntoView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <section className={styles.pricing} id="pricing">
      {/* Header */}
      <motion.div
        className={styles.head}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className={styles.label}>Pricing Strategy</span>
        <h1>How much does a professional video cost?</h1>
      </motion.div>

      {/* Intro */}
      <div className={styles.intro}>
        <motion.div
          className={styles.introLeft}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>We explain how much video REALLY costs, and how to get the most out of your project</h2>
          <p>
            Finding how much a promotional video costs to make in the UK can be a frustrating task.
            The common answers include “how long is a piece of string?” and “well, it depends on a number of factors”.
            <br /><br />
            The truth is probably somewhere in between. On this page, we’ll explain our video pricing, the
            factors that affect the cost of video, and exactly what you get for your money.
          </p>
          <a href="#contact" className={styles.quoteBtn}>
            Get a Quote <MdArrowOutward />
          </a>
        </motion.div>

        <motion.div
          className={styles.factorsContainer}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3>What affects the cost of a marketing video?</h3>
          <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
            There are a number of factors that will impact the cost of your video, but the three main ones are…
          </p>
          <div className={styles.factorButtons}>
            <button onClick={() => scrollIntoView('complexity')} className={styles.factorBtn}>
              <div className={styles.factorBtnContent}>
                <span className={styles.btnDefault}>Complexity</span>
                <span className={styles.btnHover}>how tricky is it? <MdArrowOutward /></span>
              </div>
            </button>
            <button onClick={() => scrollIntoView('duration')} className={styles.factorBtn}>
              <div className={styles.factorBtnContent}>
                <span className={styles.btnDefault}>Duration</span>
                <span className={styles.btnHover}>how long is it? <MdArrowOutward /></span>
              </div>
            </button>
            <button onClick={() => scrollIntoView('deliverables')} className={styles.factorBtn}>
              <div className={styles.factorBtnContent}>
                <span className={styles.btnDefault}>Deliverables</span>
                <span className={styles.btnHover}>how many videos do you want? <MdArrowOutward /></span>
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Factors Detail Sections */}
      <div className={styles.detailSections}>
        <motion.div
          id="complexity"
          className={styles.detailCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.cardBanner}>
            <h2>Complexity</h2>
            <span className={styles.cardSub}>Factor #01</span>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.highlightText}>Complexity and cost are inextricably linked.</p>
            <p>
              More cameras, more locations, specialised kit, challenging terrain, overnight stays, large crews… these all increase complexity, and thus cost.
            </p>
            <p>
              The simpler you can make your shoot, the cheaper it will usually be.
            </p>
            <p>
              A talking-head video blog filmed in Bristol is cheaper than an 18-night safari shoot in South Africa… obviously.
            </p>
          </div>
        </motion.div>

        <motion.div
          id="duration"
          className={styles.detailCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.cardBanner}>
            <h2>Duration</h2>
            <span className={styles.cardSub}>Factor #02</span>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.highlightText}>The duration of the video can (although not always) play a part in cost.</p>
            <p>
              Usually, shorter videos are cheaper – compared to a 1-minute video, a 5-minute video usually requires more planning, more complexity, more production, and more post production time.
            </p>
            <p>
              That said, a 30-second advert can be way more expensive than a 2-minute promotional video because of the complexity, as stated above.
            </p>
          </div>
        </motion.div>

        <motion.div
          id="deliverables"
          className={styles.detailCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.cardBanner}>
            <h2>Deliverables</h2>
            <span className={styles.cardSub}>Factor #03</span>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.highlightText}>Finally, we get to the number of deliverables.</p>
            <p>
              The more videos you want, the more it will cost.
            </p>
            <p>
              However, this is usually a great way to increase your ROI – thanks to the economy of scale and some clever planning, you’ll get more videos at a cheaper cost per video.
            </p>
          </div>
        </motion.div>
      </div>

      {/* What do I actually get for my money */}
      <div className={styles.whatYouGetSection}>
        <div className={styles.sectionHeader}>
          <h2>What do I actually get for my money?</h2>
          <p>
            At UnrealrStudios, we believe that your videos should be sales and marketing tools – they need to generate you more leads, and convert those leads into sales.
            <br />
            Our mantra has always been <strong>‘Film with Thought’</strong>; the simple idea that we need to think before we film.
            It’s this video strategy that continues to separate us from our competition, and continues to boost results for our clients.
          </p>
        </div>

        <div className={styles.phasesGrid}>
          <motion.div
            className={styles.phaseCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className={styles.phaseNumber}>PHASE 01</span>
            <h3>Strategy</h3>
            <p>Firstly we’ll set a direction, by taking your video goals to heart and making a clear plan to achieve them.</p>
          </motion.div>
          <motion.div
            className={styles.phaseCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className={styles.phaseNumber}>PHASE 02</span>
            <h3>Production</h3>
            <p>And... action! Fuelled by coffee and sandwiches, our team will get to work filming and editing your video.</p>
          </motion.div>
          <motion.div
            className={styles.phaseCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className={styles.phaseNumber}>PHASE 03</span>
            <h3>Distribution</h3>
            <p>It’s launch time; we’ll give you the tools you need to get your video out there with impact.</p>
          </motion.div>
        </div>

        <div className={styles.deliverablesRow}>
          <div className={styles.deliverablesLeft}>
            <h3>Our method is simple: a volume of videos, which hit various parts of the buyer journey, delivered consistently.</h3>
            <p>
              Would you write one blog and claim success? Would you publish one LinkedIn post and wait for the phone to ring? We doubt it!
              <br /><br />
              Video is no different. The digital landscape shifts and changes. We need a volume of content to break through the noise, we need a variety of content to ensure we resonate, and we need to do it consistently to build trust and be in the right place at the right time.
            </p>
          </div>
          <div className={styles.checklist}>
            <h4 style={{ fontSize: '1.25rem', fontFamily: 'NeueMontreal-Bold', marginBottom: '0.5rem' }}>When you work with us, you’ll always get:</h4>
            {[
              "A video strategy session, to plan what’s really going to work",
              "A creative session, to make sure it looks good",
              "A dedicated Project Manager",
              "A Videographer and a Producer (the bigger the project, the bigger the team)",
              "A chance to make amends to the video (for FREE)",
              "Help with optimisation, including free SRT files",
              "A distribution session to make sure we get your video seen"
            ].map((item, idx) => (
              <div key={idx} className={styles.checkItem}>
                <MdCheck className={styles.checkIcon} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Retainer Packages Packages Section */}
      <motion.div
        className={styles.retainerCard}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.retainerContent}>
          <h2>Optimise your content strategy with video production retainer packages</h2>
          <p>
            To be truly effective, content can’t exist in a vacuum.
            We’ve developed our video marketing retainer packages to allow our clients to get real results by fuelling their marketing campaigns with consistently high-quality content.
            <br /><br />
            Opting for a video production retainer offers significant benefits by ensuring a steady stream of high-quality content. This arrangement facilitates ongoing collaboration, allowing our team to deeply understand your brand’s voice, audience, and objectives. As a result, we can produce content that speaks to your target demographic.
            <br /><br />
            Find out how a video marketing retainer can feed your content creation machine, and become a core part of your marketing strategy…
          </p>
          <button onClick={() => setModalOpen(true)} className={styles.learnMoreBtn}>
            Learn more about our retainer packages <MdArrowOutward />
          </button>
        </div>
      </motion.div>

      {/* Background Poster Callout Section */}
      <div className={styles.posterSectionContainer}>
        <div className={styles.posterLeft}>
          <img
            src="/assets/blackwomen.png"
            alt="Hybrid Ads starts from £200 - Unrealr Studios"
            className={styles.posterSectionImage}
          />
        </div>
        <div className={styles.posterRight}>
          <h2>How much does a professional video cost?</h2>
          <div className={styles.posterTextCard}>
            <span className={styles.oneOffLabel}>Project-Based One-offs</span>
            <p>
              One-offs: If we’re working on a project basis, prices start at <strong>£200 plus VAT</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* QA Deal Section */}
      <div className={styles.dealSection}>
        <div className={styles.dealContent}>
          <h2>Can you do me a deal on my video price?</h2>
          <div className={styles.dealText}>
            <p>
              Can we do something for less than £2,500? Maybe. It’s worth asking, especially if it’s just something small, like filming a talk for a couple of hours.
            </p>

          </div>
          <div className={styles.dealHighlightCard}>
            <h4>Special & Custom Terms</h4>
            <p>
              Additionally, we’ve done all sorts of deals in the past. We’ve done trade of services, free work for charities and stuff that’s just really fun and good for our portfolio, at basically cost price. So it’s always worth asking – we won’t be offended!
            </p>
          </div>
        </div>
      </div>


      {/* Looking for reliable results */}
      <div className={styles.finalBanner}>
        <h2>Looking for reliable results from your marketing? We’d love to show you how it’s done.</h2>
        <a href="#contact" className={styles.quoteBtn}>
          Start a Conversation <MdArrowOutward />
        </a>
      </div>

      {/* Interactive Modal for Retainer Packages */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeModalBtn} onClick={() => setModalOpen(false)}>
                <MdClose />
              </button>

              <div className={styles.modalHeader}>
                <h2>Video Retainer Packages</h2>
                <p>Consistent, high-quality video content designed to scale your content marketing campaigns.</p>
              </div>

              <div className={styles.modalGrid}>
                <div className={styles.modalPackageCard}>
                  <span className={styles.packageTag}>Grow</span>
                  <h3 className={styles.packageTitle}>Social Retainer</h3>
                  <div className={styles.packagePrice}>£1,500 <span>/ month</span></div>
                  <ul className={styles.packageList}>
                    <li>3 Short-form Videos (Reels/TikTok)</li>
                    <li>Basic Video Strategy & Outline</li>
                    <li>Professional Editing & Color Grading</li>
                    <li>1 Round of Free Revisions</li>
                    <li>Subtitles / SRT Optimization</li>
                  </ul>
                </div>

                <div className={`${styles.modalPackageCard} ${styles.featured}`}>
                  <span className={styles.packageTag} style={{ background: '#ff6b00' }}>Scale (Popular)</span>
                  <h3 className={styles.packageTitle}>Brand Retainer</h3>
                  <div className={styles.packagePrice}>£3,500 <span>/ month</span></div>
                  <ul className={styles.packageList}>
                    <li>1 Cinematic Brand Video / Ad per Month</li>
                    <li>6 Short-form Social Videos</li>
                    <li>Dedicated Creative Producer</li>
                    <li>Monthly Video Marketing Strategy Session</li>
                    <li>Unlimited Optimization Support</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
