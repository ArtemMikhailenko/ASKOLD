'use client'
import { useEffect, useRef } from 'react';
import styles from './Tokenomics.module.css';

const Tokenomics = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation to reveal the chart sectors
    if (chartRef.current) {
      const sectors = chartRef.current.querySelectorAll(`.${styles.sector}`);
      
      sectors.forEach((sector, index) => {
        setTimeout(() => {
            //@ts-ignore
          sector.style.opacity = "1";
          //@ts-ignore
          sector.style.transform = "scale(1)";
        }, 200 * index);
      });
    }
  }, []);

  return (
    <section id="tokenomics" className={styles.tokenomics}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Token Distribution</span>
          <h2 className={styles.title}>Tokenomics</h2>
          <div className={styles.titleDecoration}>
            <span></span><span></span><span></span>
          </div>
          <p className={styles.description}>
            $ASKOLD is a deflationary token with a carefully designed economic model, inspired by the strategy of an ancient Rus prince. Like a true prince, $ASKOLD strives for a fair distribution of resources, ensuring growth and prosperity.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.tokenInfoColumn}>
            <div className={styles.tokenInfoBox}>
              <h3>Basic Information</h3>
              
              <div className={styles.tokenInfoGrid}>
                <div className={styles.tokenInfoItem}>
                  <div className={styles.infoLabel}>Ticker</div>
                  <div className={styles.infoValue}>$ASKOLD</div>
                </div>
                
                <div className={styles.tokenInfoItem}>
                  <div className={styles.infoLabel}>Network</div>
                  <div className={styles.infoValue}>Ethereum</div>
                </div>
                
                <div className={styles.tokenInfoItem}>
                  <div className={styles.infoLabel}>Standard</div>
                  <div className={styles.infoValue}>ERC-20</div>
                </div>
                
                <div className={styles.tokenInfoItem}>
                  <div className={styles.infoLabel}>Total Supply</div>
                  <div className={styles.infoValue}>862,000,000</div>
                </div>
                
                <div className={styles.tokenInfoItem}>
                  <div className={styles.infoLabel}>Initial Price</div>
                  <div className={styles.infoValue}>$0.000862</div>
                </div>
                
                <div className={styles.tokenInfoItem}>
                  <div className={styles.infoLabel}>Listing</div>
                  <div className={styles.infoValue}>Uniswap</div>
                </div>
              </div>
              
              <div className={styles.contractBox}>
                <div className={styles.contractLabel}>Smart Contract:</div>
                <div className={styles.contractValue}>
                  <span>0x862862ASKOLD...9d62</span>
                  <button className={styles.copyButton}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 4V16C8 16.5304 8.21071 17.0391 8.58579 17.4142C8.96086 17.7893 9.46957 18 10 18H18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16V7.242C20 6.97556 19.9467 6.71181 19.8433 6.46624C19.7399 6.22068 19.5885 5.99824 19.398 5.812L16.188 2.602C16.0018 2.41147 15.7793 2.26012 15.5338 2.15673C15.2882 2.05334 15.0244 2.00001 14.758 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 18V20C16 20.5304 15.7893 21.0391 15.4142 21.4142C15.0391 21.7893 14.5304 22 14 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H8" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            <div className={styles.incentivesBox}>
              <h3>Growth Mechanisms</h3>
              
              <div className={styles.incentiveItem}>
                <div className={styles.incentiveIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8L12 12L8 8" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3V12" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.incentiveInfo}>
                  <h4>Burn Mechanism</h4>
                  <p>2% of each transaction is automatically burned, reducing the total supply and increasing the value of remaining tokens.</p>
                </div>
              </div>
              
              <div className={styles.incentiveItem}>
                <div className={styles.incentiveIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.59 13.51L15.42 17.49" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.41 6.51L8.59 10.49" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.incentiveInfo}>
                  <h4>Holder Rewards</h4>
                  <p>1% of each transaction is distributed among current token holders as a reward for loyalty.</p>
                </div>
              </div>
              
              <div className={styles.incentiveItem}>
                <div className={styles.incentiveIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.incentiveInfo}>
                  <h4>Contract Verification</h4>
                  <p>The smart contract code is fully verified and available for audit, ensuring transparency and security.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.chartColumn}>
            <div className={styles.chartContainer}>
              <h3>Token Distribution</h3>
              
              <div className={styles.pieChartWrapper}>
                <div className={styles.pieChart} ref={chartRef}>
                  <div className={`${styles.sector} ${styles.sector1}`}></div>
                  <div className={`${styles.sector} ${styles.sector2}`}></div>
                  <div className={`${styles.sector} ${styles.sector3}`}></div>
                  <div className={`${styles.sector} ${styles.sector4}`}></div>
                  <div className={`${styles.sector} ${styles.sector5}`}></div>
                  <div className={styles.chartCenter}>
                    <span>$ASKOLD</span>
                  </div>
                </div>
                
                <div className={styles.chartLegend}>
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.color1}`}></div>
                    <div className={styles.legendText}>
                      <span className={styles.legendValue}>40%</span>
                      <span className={styles.legendLabel}>Public Sale</span>
                    </div>
                  </div>
                  
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.color2}`}></div>
                    <div className={styles.legendText}>
                      <span className={styles.legendValue}>25%</span>
                      <span className={styles.legendLabel}>Liquidity</span>
                    </div>
                  </div>
                  
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.color3}`}></div>
                    <div className={styles.legendText}>
                      <span className={styles.legendValue}>15%</span>
                      <span className={styles.legendLabel}>Marketing</span>
                    </div>
                  </div>
                  
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.color4}`}></div>
                    <div className={styles.legendText}>
                      <span className={styles.legendValue}>10%</span>
                      <span className={styles.legendLabel}>Team</span>
                    </div>
                  </div>
                  
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.color5}`}></div>
                    <div className={styles.legendText}>
                      <span className={styles.legendValue}>10%</span>
                      <span className={styles.legendLabel}>Reserve</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.taxInfoBox}>
              <h3>Transaction Tax: 3%</h3>
              
              <div className={styles.taxInfoGrid}>
                <div className={styles.taxInfoItem}>
                  <div className={styles.taxPercentage}>2%</div>
                  <div className={styles.taxDescription}>Burned</div>
                </div>
                
                <div className={styles.taxInfoItem}>
                  <div className={styles.taxPercentage}>1%</div>
                  <div className={styles.taxDescription}>To Holders</div>
                </div>
              </div>
              
              <div className={styles.taxNote}>
                Total tokens issued: 862,000,000 $ASKOLD, of which 2,000,000 have been permanently burned.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.curveDecoration}></div>
      <div className={styles.coinDecoration1}></div>
      <div className={styles.coinDecoration2}></div>
    </section>
  );
};

export default Tokenomics;
