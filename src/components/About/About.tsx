import Image from 'next/image';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textColumn}>
            <div className={styles.sectionIntro}>
              <span className={styles.subtitle}>Historical Legend</span>
              <h2 className={styles.title}>About Prince Askold</h2>
              <div className={styles.titleDecoration}>
                <span></span><span></span><span></span>
              </div>
            </div>
            
            <p className={styles.description}>
              Prince Askold was a legendary Varangian ruler who, along with Dir, led a group of Vikings to settle in Kyiv in the 9th century. According to the Primary Chronicle, Askold and Dir were warriors in Rurik's retinue who asked permission to go to Constantinople. On their journey, they discovered Kyiv and decided to establish their rule there around 862 AD.
            </p>
            
            <div className={styles.featuredInfo}>
              <div className={styles.featuredItem}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>⚔️</div>
                </div>
                <div className={styles.info}>
                  <h3>Warrior Leader</h3>
                  <p>Led daring military campaigns and naval expeditions across Eastern Europe and against Byzantium</p>
                </div>
              </div>
              
              <div className={styles.featuredItem}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>👑</div>
                </div>
                <div className={styles.info}>
                  <h3>Founding Ruler</h3>
                  <p>One of the earliest leaders of Kyivan Rus', laying foundations for the powerful state</p>
                </div>
              </div>
              
              <div className={styles.featuredItem}>
                <div className={styles.iconWrapper}>
                  <div className={styles.icon}>🏛️</div>
                </div>
                <div className={styles.info}>
                  <h3>Cultural Pioneer</h3>
                  <p>Among the first rulers in the region to consider adopting Christianity, paving the way for cultural transformation</p>
                </div>
              </div>
            </div>
            
            <div className={styles.historicalNote}>
              <div className={styles.noteBorder}></div>
              <p>Prince Askold's legacy as a fearless explorer, conqueror, and forward-thinking ruler mirrors the pioneering spirit of $ASKOLD in the crypto realm - bold, visionary, and ahead of its time.</p>
            </div>
          </div>
          
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.imagePlaceholder}>
                <img src="/hero.png" alt="" />
              </div>
              <div className={styles.imageDecoration}></div>
            </div>
            
            <div className={styles.timelineWrapper}>
              <h3 className={styles.timelineTitle}>Key Historical Events</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>862</div>
                  <div className={styles.timelineContent}>
                    <h4>Rise to Power</h4>
                    <p>Askold and Dir take control of Kyiv, establishing their rule</p>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>866</div>
                  <div className={styles.timelineContent}>
                    <h4>Constantinople Raid</h4>
                    <p>Led a naval expedition against Byzantine Empire</p>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>874</div>
                  <div className={styles.timelineContent}>
                    <h4>Religious Interest</h4>
                    <p>Shows interest in Byzantine Christianity</p>
                  </div>
                </div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>882</div>
                  <div className={styles.timelineContent}>
                    <h4>Legendary End</h4>
                    <p>According to chronicles, killed by Prince Oleg who took control of Kyiv</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <blockquote>
            "Just as Prince Askold built his treasure through conquest and wise rule, $ASKOLD token holders build their wealth through strategic investment and community strength."
          </blockquote>
          <div className={styles.quoteAttribution}>— $ASKOLD Manifesto</div>
        </div>
      </div>
    </section>
  );
};

export default About;