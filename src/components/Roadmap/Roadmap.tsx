'use client'
import { useEffect, useRef } from 'react';
import styles from './Roadmap.module.css';

const Roadmap = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    // Animation for the timeline items
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
            Like Prince Askold's conquest strategy, our roadmap outlines a bold vision for $ASKOLD. 
            Each milestone represents a step towards building a strong community and establishing $ASKOLD 
            as a prominent memecoin in the crypto realm.
          </p>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineRuler}></div>
          
          {/* Phase 1 */}
          <div className={`${styles.timelineItem} ${styles.left}`}>
            <div className={styles.timelineContent}>
              <div className={styles.phaseLabel}>Phase I</div>
              <h3 className={styles.phaseTitle}>Foundation</h3>
              <div className={styles.checklistItems}>
                <div className={`${styles.checklistItem} ${styles.completed}`}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>Smart Contract Development & Audit</p>
                </div>
                <div className={`${styles.checklistItem} ${styles.completed}`}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>Website Launch</p>
                </div>
                <div className={`${styles.checklistItem} ${styles.completed}`}>
                  <div className={styles.checkIcon}>✓</div>
                  <p>Social Media Establishment</p>
                </div>
                <div className={`${styles.checklistItem} ${styles.active}`}>
                  <div className={styles.checkIcon}>⌛</div>
                  <p>Community Building</p>
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
              <h3 className={styles.phaseTitle}>Territory Expansion</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Token Launch on Uniswap</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Marketing Campaign</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>1,000+ Holders Milestone</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>CoinGecko & CoinMarketCap Listings</p>
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
              <h3 className={styles.phaseTitle}>Strategic Alliances</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>CEX Listings</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>NFT Collection Launch</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Strategic Partnerships</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>10,000+ Holders Milestone</p>
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
              <h3 className={styles.phaseTitle}>Empire Building</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>DAO Governance Implementation</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Cross-Chain Expansion</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Real-World Events & Meetups</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Charitable Initiatives</p>
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
              <h3 className={styles.phaseTitle}>Legacy & Beyond</h3>
              <div className={styles.checklistItems}>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Metaverse Integration</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>100,000+ Holders Milestone</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>DeFi Product Suite</p>
                </div>
                <div className={styles.checklistItem}>
                  <div className={styles.checkIcon}></div>
                  <p>Global Community Expansion</p>
                </div>
              </div>
              <div className={styles.quarterLabel}>Q2-Q4 2026</div>
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
            Follow our journey on social media to stay updated with the latest developments and milestone achievements.
          </p>
        </div>
        
        <div className={styles.visionStatement}>
          <div className={styles.quoteMarks}>"</div>
          <blockquote>
            Just as Prince Askold laid the foundation for Kyivan Rus', we are building a strong and 
            lasting presence in the crypto realm. Our roadmap isn't just about milestones; 
            it's about creating a legacy.
          </blockquote>
          <div className={styles.quoteAuthor}>— $ASKOLD Team</div>
        </div>
      </div>
      
      <div className={styles.mapDecoration}></div>
      <div className={styles.compassDecoration}></div>
    </section>
  );
};

export default Roadmap;