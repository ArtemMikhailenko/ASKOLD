'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  const coinRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Rotate the coin as the user scrolls
    const handleScroll = () => {
      if (coinRef.current) {
        const scrollY = window.scrollY;
        const rotateY = scrollY * 0.1;
        //@ts-ignore
        coinRef.current.style.transform = `rotateY(${rotateY}deg) rotateX(10deg)`;
      }
    };

    // Create floating particle effects
    const createParticles = () => {
      if (particlesRef.current) {
        for (let i = 0; i < 20; i++) {
          const particle = document.createElement('div');
          particle.classList.add(styles.particle);
          
          // Random position
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;
          
          // Random size
          const size = Math.random() * 8 + 2;
          
          // Random animation duration
          const animDuration = Math.random() * 15 + 5;
          
          particle.style.left = `${posX}%`;
          particle.style.top = `${posY}%`;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
          particle.style.animationDuration = `${animDuration}s`;
          particle.style.animationDelay = `${Math.random() * 5}s`;
          //@ts-ignore
          particlesRef.current.appendChild(particle);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    createParticles();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.particles} ref={particlesRef}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              <span className={styles.titleTop}>Ancient Rus Meme Coin</span>
              <span className={styles.highlight}>$ASKOLD</span>
            </h1>
            <div className={styles.runeDecoration}>
              <span></span><span></span><span></span>
            </div>
          </div>
          
          <p className={styles.subtitle}>
            Manage your portfolio like a true prince. Take part in the first meme coin dedicated to the legendary Prince Askold, who united the lands and treasures of ancient Rus.
          </p>
          
          <div className={styles.actions}>
            <Link href="#buy" className={styles.primaryBtn}>
              <span className={styles.buttonText}>Buy $ASKOLD</span>
              <span className={styles.buttonGlow}></span>
            </Link>
            <Link href="#about" className={styles.secondaryBtn}>
              <span>Learn the Story</span>
            </Link>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>1000x</h3>
              <p>Growth Potential</p>
              <div className={styles.statIcon} data-icon="↗"></div>
            </div>
            <div className={styles.statItem}>
              <h3>10K+</h3>
              <p>Holders</p>
              <div className={styles.statIcon} data-icon="👥"></div>
            </div>
            <div className={styles.statItem}>
              <h3>862 Yrs</h3>
              <p>Years of Rule</p>
              <div className={styles.statIcon} data-icon="👑"></div>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.coinWrapper}>
            <div className={styles.coinShadow}></div>
            <div className={styles.coin} ref={coinRef}>
              <div className={styles.coinFront}>
                <div className={styles.coinCircle}>
                  <div className={styles.coinSymbol}>A</div>
                  <div className={styles.coinPattern}></div>
                </div>
              </div>
              <div className={styles.coinBack}>
                <div className={styles.coinCircle}>
                  <div className={styles.coinProfile}></div>
                </div>
              </div>
              <div className={styles.coinEdge}></div>
            </div>
            <div className={styles.coinGlow}></div>
          </div>
        </div>
      </div>
      
      <div className={styles.scrollDown} onClick={handleScrollDown}>
        <div className={styles.scrollText}>Scroll Down</div>
        <div className={styles.scrollArrow}></div>
      </div>
      
      <div className={styles.heroDecoration1}></div>
      <div className={styles.heroDecoration2}></div>
    </section>
  );
};

export default Hero;
