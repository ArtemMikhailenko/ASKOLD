import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import styles from './page.module.css';
import About from '@/components/About/About';
import Tokenomics from '@/components/Tokenomics/Tokenomics';
import Roadmap from '@/components/Roadmap/Roadmap';
import Community from '@/components/Community/Community';
import HowToBuy from '@/components/HowToBuy/HowToBuy';
import FAQ from '@/components/FAQ/FAQ';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.starsBackground}></div>
      <div className={styles.runicOverlay}></div>
      
      <Header />
      <Hero />
      
      {/* About Prince Askold */}
      <section id="about" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>The Story of Prince Askold</h2>
            <div className={styles.titleDecoration}>
              <span></span><span></span><span></span>
            </div>
          </div>
          <About />
        </div>
        <div className={styles.shieldDecoration}></div>
      </section>
      
      {/* Tokenomics */}
      <section id="tokenomics" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Tokenomics</h2>
            <div className={styles.titleDecoration}>
              <span></span><span></span><span></span>
            </div>
          </div>
          <Tokenomics />
        </div>
        <div className={styles.coinDecoration}></div>
      </section>
      
      {/* Roadmap */}
      <section id="roadmap" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Roadmap</h2>
            <div className={styles.titleDecoration}>
              <span></span><span></span><span></span>
            </div>
          </div>
          <Roadmap />
        </div>
        <div className={styles.mapDecoration}></div>
      </section>
      
      {/* How to Buy */}
      <section id="buy" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>How to Buy $ASKOLD</h2>
            <div className={styles.titleDecoration}>
              <span></span><span></span><span></span>
            </div>
          </div>
          <HowToBuy />
        </div>
        <div className={styles.treasureDecoration}></div>
      </section>
      
      {/* Community */}
      <section id="community" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Community</h2>
            <div className={styles.titleDecoration}>
              <span></span><span></span><span></span>
            </div>
          </div>
          <Community />
        </div>
        <div className={styles.communityDecoration}></div>
      </section>
      
      {/* FAQ */}
      <section id="faq" className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.titleDecoration}>
              <span></span><span></span><span></span>
            </div>
          </div>
          <FAQ />
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
