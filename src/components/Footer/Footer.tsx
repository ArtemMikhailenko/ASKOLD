import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.runicBorder}></div>
      
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoIcon}>A</div>
              <span className={styles.logoText}>$ASKOLD</span>
            </div>
            <p className={styles.tagline}>The Legendary Memecoin of Prince Askold</p>
          </div>

          <div className={styles.footerNavs}>
            <div className={styles.navColumn}>
              <h3>Navigation</h3>
              <ul>
                <li><Link href="/#hero">Home</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/#tokenomics">Tokenomics</Link></li>
                <li><Link href="/#roadmap">Roadmap</Link></li>
                <li><Link href="/#community">Community</Link></li>
                <li><Link href="/#buy">How to Buy</Link></li>
                <li><Link href="/#faq">FAQ</Link></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h3>Resources</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Audit Report</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Press Kit</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Blog</a></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h3>Social Media</h3>
              <ul>
                <li>
                  <a href="https://t.me/askoldcoin" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.4 3.6L3.6 10.8L9.6 13.2L16.8 7.2L12 14.4L18 20.4L20.4 3.6Z"></path>
                    </svg>
                    <span>Telegram</span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/askoldcoin" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4.0099C21.1294 4.69531 20.1656 5.2333 19.14 5.5999C18.5754 4.93972 17.8273 4.47355 17 4.2599C16.1727 4.04626 15.3054 4.09615 14.5065 4.40255C13.7077 4.70895 13.0125 5.25925 12.5187 5.97641C12.0249 6.69356 11.7559 7.54781 11.75 8.4199V9.2499C10.2456 9.2957 8.75628 8.9751 7.39832 8.31567C6.04035 7.65624 4.86379 6.67612 3.98 5.4599C3.98 5.4599 0.62 12.4599 8.42 15.7999C6.64742 16.9799 4.55778 17.608 2.44 17.5999C10.24 21.7699 19.76 17.5999 19.76 8.3899C19.7584 8.1563 19.7357 7.9237 19.69 7.6999C20.6254 6.78487 21.277 5.58074 22 4.0099Z"></path>
                    </svg>
                    <span>Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/askoldcoin" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.5 13C8.5 13.8284 7.82843 14.5 7 14.5C6.17157 14.5 5.5 13.8284 5.5 13C5.5 12.1716 6.17157 11.5 7 11.5C7.82843 11.5 8.5 12.1716 8.5 13Z"></path>
                      <path d="M17 14.5C17.8284 14.5 18.5 13.8284 18.5 13C18.5 12.1716 17.8284 11.5 17 11.5C16.1716 11.5 15.5 12.1716 15.5 13C15.5 13.8284 16.1716 14.5 17 14.5Z"></path>
                      <path d="M18 12C18 15.5 15.5 18 12 18C8.5 18 6 15.5 6 12"></path>
                      <path d="M9 7.75C6.65279 7.75 5.25 9.4375 5.25 12H6.75C6.75 10.0625 7.73221 9.25 9 9.25V7.75Z"></path>
                      <path d="M15 7.75C17.3472 7.75 18.75 9.4375 18.75 12H17.25C17.25 10.0625 16.2678 9.25 15 9.25V7.75Z"></path>
                      <path d="M9 9.25C11.9268 9.25 13.8792 7.74748 14.75 6.5H13.25C12.1915 7.24154 10.7571 7.75 9 7.75V9.25Z"></path>
                      <path d="M15 9.25C12.0732 9.25 10.1208 7.74748 9.25 6.5H10.75C11.8085 7.24154 13.2429 7.75 15 7.75V9.25Z"></path>
                    </svg>
                    <span>Discord</span>
                  </a>
                </li>
                <li>
                  <a href="https://reddit.com/r/askoldcoin" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16 12c0-1.1-.9-2-2-2-1.1 0-2 .9-2 2"></path>
                      <path d="M8 12c0-1.1.9-2 2-2 1.1 0 2 .9 2 2"></path>
                      <path d="M12 16c1.5 0 3-1.2 3-2.5"></path>
                      <path d="M9 16c1.5 0 3-1.2 3-2.5"></path>
                      <line x1="12" y1="18" x2="12" y2="18.01"></line>
                      <path d="M17 4c0 1.1-.9 2-2 2-1.1 0-2-.9-2-2 0-1.1.9-2 2-2 1.1 0 2 .9 2 2z"></path>
                    </svg>
                    <span>Reddit</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <h3>Legal</h3>
              <ul>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Risk Disclaimer</a></li>
                <li><a href="#" target="_blank" rel="noopener noreferrer">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.contractInfo}>
          <span className={styles.contractLabel}>Smart Contract:</span>
          <div className={styles.contractAddress}>
            <span>0x862862ASKOLD...9d62</span>
            <button className={styles.copyButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            </button>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.disclaimer}>
            <p>
              <strong>Disclaimer:</strong> Cryptocurrency investments are volatile and high risk in nature. Do not invest more than what you are willing to lose. $ASKOLD is an experimental memecoin with no intrinsic value or expectation of financial return. The token exists for entertainment and community purposes only.
            </p>
          </div>

          <div className={styles.copyright}>
            <p>© {currentYear} $ASKOLD. All rights reserved.</p>
            <p>Made with ⚔️ by the ASKOLD team</p>
          </div>
        </div>
      </div>

      <div className={styles.leftCornerDecoration}></div>
      <div className={styles.rightCornerDecoration}></div>
    </footer>
  );
};

export default Footer;