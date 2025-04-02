'use client'
import { useEffect, useRef } from 'react';
import styles from './Tokenomics.module.css';

const Tokenomics = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
            $ASKOLD is a deflationary SPL token launched on the Solana blockchain. It is engineered to support long-term value, fair and transparent distribution, and incentivize holders through strategic mechanics such as burns and reflections. Inspired by the legacy of Prince Askold, our tokenomics are built to empower the community, fuel ecosystem development, and maintain sustainable growth.
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
                  <div className={styles.infoValue}>Solana</div>
                </div>
                <div className={styles.tokenInfoItem}>
                  <div className={styles.infoLabel}>Standard</div>
                  <div className={styles.infoValue}>SPL</div>
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
                  <div className={styles.infoValue}>Jupiter, Raydium</div>
                </div>
              </div>
              <div className={styles.contractBox}>
                <div className={styles.contractLabel}>Smart Contract:</div>
                <div className={styles.contractValue}>
                  <span>5itemFgavrdSuJDwJVERQwR2q9pQAQHqWUZ6rV1ViDBq</span>
                  <button className={styles.copyButton}>📋</button>
                </div>
              </div>
            </div>

            <div className={styles.incentivesBox}>
              <h3>Growth Mechanisms</h3>
              <div className={styles.incentiveItem}>
                <div className={styles.incentiveIcon}>🔥</div>
                <div className={styles.incentiveInfo}>
                  <h4>Burn Mechanism</h4>
                  <p>2% of every transaction is permanently removed from circulation. This deflationary strategy reduces supply over time, aiming to increase scarcity and token value.</p>
                </div>
              </div>
              <div className={styles.incentiveItem}>
                <div className={styles.incentiveIcon}>🎁</div>
                <div className={styles.incentiveInfo}>
                  <h4>Holder Rewards</h4>
                  <p>1% of every transaction is automatically redistributed among $ASKOLD holders. The more you hold, the more you earn passively.</p>
                </div>
              </div>
              <div className={styles.incentiveItem}>
                <div className={styles.incentiveIcon}>✅</div>
                <div className={styles.incentiveInfo}>
                  <h4>Contract Verification</h4>
                  <p>Our smart contract is fully verified on Solana. You can review it openly via Solscan, ensuring full transparency and trust for the community.</p>
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
                      <span className={styles.legendLabel}>Marketing & Growth</span>
                    </div>
                  </div>
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.color4}`}></div>
                    <div className={styles.legendText}>
                      <span className={styles.legendValue}>10%</span>
                      <span className={styles.legendLabel}>Team (Vested)</span>
                    </div>
                  </div>
                  <div className={styles.legendItem}>
                    <div className={`${styles.legendColor} ${styles.color5}`}></div>
                    <div className={styles.legendText}>
                      <span className={styles.legendValue}>10%</span>
                      <span className={styles.legendLabel}>Strategic Reserve</span>
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
                  <div className={styles.taxDescription}>Burn (Supply Reduction)</div>
                </div>
                <div className={styles.taxInfoItem}>
                  <div className={styles.taxPercentage}>1%</div>
                  <div className={styles.taxDescription}>Reflection to Holders</div>
                </div>
              </div>
              <div className={styles.taxNote}>
                Total supply of $ASKOLD is 862,000,000 tokens. As of today, 2,000,000 tokens have been permanently burned, contributing to scarcity and long-term value growth.
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
