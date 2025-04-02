'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled down
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine the active section based on scrolling
      const sections = ['hero', 'about', 'tokenomics', 'roadmap', 'buy', 'community', 'faq'];
      let currentSection = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close the menu when clicking a link (for mobile version)
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.runicBorder}></div>
      
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoIcon}>
                <img src="/logo500.png" alt="" />
                <div className={styles.logoGlow}></div>
              </div>
              <span className={styles.logoText}>$ASKOLD</span>
            </div>
          </Link>
        </div>

        <div className={`${styles.mobileMenuBtn} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul>
            <li>
              <Link 
                href="#hero" 
                className={activeSection === 'hero' ? styles.activeLink : ''}
                onClick={handleLinkClick}
              >
                Home
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className={activeSection === 'about' ? styles.activeLink : ''}
                onClick={handleLinkClick}
              >
                About the Prince
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#tokenomics" 
                className={activeSection === 'tokenomics' ? styles.activeLink : ''}
                onClick={handleLinkClick}
              >
                Tokenomics
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#roadmap" 
                className={activeSection === 'roadmap' ? styles.activeLink : ''}
                onClick={handleLinkClick}
              >
                Roadmap
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#community" 
                className={activeSection === 'community' ? styles.activeLink : ''}
                onClick={handleLinkClick}
              >
                Community
                <span className={styles.linkHover}></span>
              </Link>
            </li>
            <li>
              <Link 
                href="#faq" 
                className={activeSection === 'faq' ? styles.activeLink : ''}
                onClick={handleLinkClick}
              >
                FAQ
                <span className={styles.linkHover}></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href="#buy" className={styles.buyBtn} onClick={handleLinkClick}>
            <span className={styles.btnText}>Buy $ASKOLD</span>
            <span className={styles.btnShine}></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
