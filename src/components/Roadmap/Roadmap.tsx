'use client'
import { useEffect, useRef } from 'react';
import styles from './Roadmap.module.css';

const Roadmap = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, { threshold: 0.2 });

    const timelineItems = document.querySelectorAll(`.${styles.timelineItem}`);
    timelineItems.forEach(item => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="roadmap" className={styles.roadmap}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Strategic Development Plan</span>
          <h2 className={styles.title}>Roadmap</h2>
          <div className={styles.titleDecoration}>
            <span></span><span></span><span></span>
          </div>
          <p className={styles.description}>
            Just like Prince Askold charted his legendary path through history, our roadmap for $ASKOLD on Solana
            charts a bold and strategic journey from inception to long-term dominance in the blockchain ecosystem.
            Every milestone represents a key battle in our conquest to make $ASKOLD a globally recognized token with real impact.
          </p>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineRuler}></div>

          {/* Phase 1 */}
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <div className={styles.phaseLabel}>Phase I</div>
              <h3 className={styles.phaseTitle}>Laying the Foundation</h3>
              <div className={styles.checklistItems}>
                <div className={`${styles.checklistItem} ${styles.completed}`}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>Development and Deployment of $ASKOLD Smart Contract on Solana</p>
                </div>
                <div className={`${styles.checklistItem} ${styles.completed}`}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>Official Website and Branding Launch</p>
                </div>
                <div className={`${styles.checklistItem} ${styles.completed}`}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>Establishment of Twitter, Telegram, and Discord Channels</p>
                </div>
                <div className={`${styles.checklistItem} ${styles.active}`}>
                  <div className={styles.checkIcon}>⌛</div>
                  <p>Community Engagement and Early Adopter Incentives</p>
                </div>
              </div>
              <div className={styles.quarterLabel}>Q2 2025</div>
            </div>
            <div className={styles.timelinePoint}></div>
          </div>

          {/* Phase 2 */}
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <div className={styles.phaseLabel}>Phase II</div>
              <h3 className={styles.phaseTitle}>Market Penetration</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Token Listing on Jupiter and Raydium</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Full-scale Digital Marketing Campaign Across Crypto Channels</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Reaching First 1,000 Holders</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Listings on CoinGecko and CoinMarketCap</p>
                </div>
              </div>
              <div className={styles.quarterLabel}>Q3 2025</div>
            </div>
            <div className={styles.timelinePoint}></div>
          </div>

          {/* Phase 3 */}
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <div className={styles.phaseLabel}>Phase III</div>
              <h3 className={styles.phaseTitle}>Strengthening the Ecosystem</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Listing $ASKOLD on Tier 2 Centralized Exchanges</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Launch of Official $ASKOLD NFT Collection on Solana</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Formation of Strategic Partnerships with Web3 Projects</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Growing the Community to 10,000+ Verified Holders</p>
                </div>
              </div>
              <div className={styles.quarterLabel}>Q4 2025</div>
            </div>
            <div className={styles.timelinePoint}></div>
          </div>

          {/* Phase 4 */}
          <div className={`${styles.timelineItem} ${styles.right}`}>
            <div className={styles.timelineContent}>
              <div className={styles.phaseLabel}>Phase IV</div>
              <h3 className={styles.phaseTitle}>Decentralization & Utility</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Implementation of DAO Governance for $ASKOLD Holders</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Exploration and Pilot of Cross-Chain Interoperability</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Launch of Community Meetups and Web3 Educational Events</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Charity Collaborations and Blockchain for Good Campaigns</p>
                </div>
              </div>
              <div className={styles.quarterLabel}>Q1 2026</div>
            </div>
            <div className={styles.timelinePoint}></div>
          </div>

          {/* Phase 5 */}
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <div className={styles.phaseLabel}>Phase V</div>
              <h3 className={styles.phaseTitle}>Global Adoption & Legacy</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Integration of $ASKOLD into Metaverse Ecosystems</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Achieving 100,000+ Holder Milestone Globally</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Development of DeFi Tools Powered by $ASKOLD</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Global Expansion and Cultural Integration of the $ASKOLD Brand</p>
                </div>
              </div>
              <div className={styles.quarterLabel}>Q2–Q4 2026</div>
            </div>
            <div className={styles.timelinePoint}></div>
          </div>
        </div>

        <div className={styles.currentStatusBox}>
          <div className={styles.statusLabel}>Current Status:</div>
          <div className={styles.statusIndicator}>
            <div className={styles.statusBar}>
              <div className={styles.statusProgress}></div>
            </div>
            <div className={styles.statusPercentage}>25% Complete</div>
          </div>
          <p className={styles.statusNote}>
            Stay informed and be part of the revolution — follow us on Twitter, Discord, and Telegram to witness how each milestone brings us closer to establishing a new legacy for $ASKOLD on Solana.
          </p>
        </div>

        <div className={styles.visionStatement}>
          <div className={styles.quoteMarks}>
            "
          </div>
          <blockquote>
            Just as Prince Askold laid the foundation for the formation of the Kyivan Rus', our mission with $ASKOLD is to create a lasting and respected digital legacy. This roadmap is not just about features — it's about vision, values, and victory.
          </blockquote>
          <div className={styles.quoteAuthor}>— $ASKOLD Core Team</div>
        </div>
      </div>

      <div className={styles.mapDecoration}></div>
      <div className={styles.compassDecoration}></div>
    </section>
  );
};

export default Roadmap;
