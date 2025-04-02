'use client'
import React, { useState } from 'react';
import styles from './HowToBuy.module.css';

const HowToBuy = () => {
  const [activeTab, setActiveTab] = useState('beginner');

  return (
    <section id="buy" className={styles.howtobuy}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Join the Conquest</span>
          <h2 className={styles.title}>How to Buy $ASKOLD</h2>
          <div className={styles.titleDecoration}>
            <span></span><span></span><span></span>
          </div>
          <p className={styles.description}>
            Ready to add $ASKOLD to your crypto treasure chest? Follow these straightforward steps 
            to join our growing community of holders and become part of the ASKOLD legend on the Solana blockchain.
          </p>
        </div>

        <div className={styles.buyTabs}>
          <div className={styles.tabButtons}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'beginner' ? styles.active : ''}`}
              onClick={() => setActiveTab('beginner')}
            >
              For Beginners
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'experienced' ? styles.active : ''}`}
              onClick={() => setActiveTab('experienced')}
            >
              For Experienced
            </button>
          </div>
          
          <div className={styles.tabContent}>
            {activeTab === 'beginner' ? (
              <div className={styles.beginnerContent}>
                <div className={styles.steps}>
                  <div className={styles.step}>
                    <div className={styles.stepIconBox}>
                      <div className={styles.stepIcon}>🦊</div>
                      <div className={styles.stepNumber}>1</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Create a Solana Wallet</h3>
                      <p>First, download and install a Solana-compatible wallet like Phantom or Solflare from your app store or browser extension. These wallets will store your $ASKOLD tokens securely and allow you to interact with dApps on Solana.</p>
                      <div className={styles.walletOptions}>
                        <a href="https://phantom.app/download" target="_blank" rel="noopener noreferrer" className={styles.walletOption}>
                          <img src="https://placehold.co/50x50" alt="Phantom" />
                          <span>Phantom</span>
                        </a>
                        <a href="https://solflare.com/download" target="_blank" rel="noopener noreferrer" className={styles.walletOption}>
                          <img src="https://placehold.co/50x50" alt="Solflare" />
                          <span>Solflare</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.stepConnector}></div>
                  
                  <div className={styles.step}>
                    <div className={styles.stepIconBox}>
                      <div className={styles.stepIcon}>💰</div>
                      <div className={styles.stepNumber}>2</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Purchase SOL</h3>
                      <p>You’ll need Solana (SOL) to exchange for $ASKOLD. Buy SOL directly in your wallet or from an exchange like Binance or Bybit, then transfer it to your wallet address.</p>
                      <div className={styles.exchangeOptions}>
                        <a href="https://www.binance.com/" target="_blank" rel="noopener noreferrer" className={styles.exchangeOption}>
                          <img src="https://placehold.co/50x50" alt="Binance" />
                          <span>Binance</span>
                        </a>
                        <a href="https://www.bybit.com/" target="_blank" rel="noopener noreferrer" className={styles.exchangeOption}>
                          <img src="https://placehold.co/50x50" alt="Bybit" />
                          <span>Bybit</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.stepConnector}></div>
                  
                  <div className={styles.step}>
                    <div className={styles.stepIconBox}>
                      <div className={styles.stepIcon}>🌐</div>
                      <div className={styles.stepNumber}>3</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Connect to Jupiter</h3>
                      <p>Visit <a href="https://jup.ag" target="_blank" rel="noopener noreferrer">Jupiter Aggregator</a> via your wallet’s browser or your desktop browser. Connect your wallet by clicking the “Connect Wallet” button in the top-right corner.</p>
                    </div>
                  </div>
                  
                  <div className={styles.stepConnector}></div>
                  
                  <div className={styles.step}>
                    <div className={styles.stepIconBox}>
                      <div className={styles.stepIcon}>🔄</div>
                      <div className={styles.stepNumber}>4</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Swap SOL for $ASKOLD</h3>
                      <p>Paste the $ASKOLD contract address in the token search field. Set the amount of SOL you want to exchange, adjust slippage if needed (1–2% recommended), then click “Swap” to complete your purchase.</p>
                      <div className={styles.contractBox}>
                        <div className={styles.contractLabel}>Token Address:</div>
                        <div className={styles.contractValue}>
                          <span>5itemFgavrdSuJDwJVERQwR2q9pQAQHqWUZ6rV1ViDBq</span>
                          <button className={styles.copyButton}>📋</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.buyBox}>
                  <div className={styles.buyNowLabel}>Ready to join the kingdom?</div>
                  <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className={styles.buyNowBtn}>
                    Buy $ASKOLD Now
                  </a>
                  <div className={styles.buyNote}>
                    Always verify the contract address and research before investing. Solana blockchain is fast, secure, and low-cost — but always do your due diligence.
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.experiencedContent}>
                <div className={styles.quickSteps}>
                  <div className={styles.quickStep}>
                    <div className={styles.quickStepNumber}>1</div>
                    <div className={styles.quickStepText}>
                      <h3>Get SOL on Solana mainnet</h3>
                      <p>Ensure you have SOL in your wallet to cover token cost and transaction fees. SOL is used for all operations on the Solana network.</p>
                    </div>
                  </div>
                  
                  <div className={styles.quickStep}>
                    <div className={styles.quickStepNumber}>2</div>
                    <div className={styles.quickStepText}>
                      <h3>Add $ASKOLD to your wallet</h3>
                      <p>Add the custom SPL token to your wallet using the contract address below. Symbol: $ASKOLD, Decimals: 9.</p>
                    </div>
                  </div>
                  
                  <div className={styles.quickStep}>
                    <div className={styles.quickStepNumber}>3</div>
                    <div className={styles.quickStepText}>
                      <h3>Use Jupiter or Raydium</h3>
                      <p>Use your preferred Solana DEX aggregator like Jupiter or swap directly on Raydium. Set slippage tolerance to 1–2% to ensure smooth transactions.</p>
                    </div>
                  </div>
                </div>
                
                <div className={styles.advancedDetails}>
                  <div className={styles.detailsBox}>
                    <h3>Technical Details</h3>
                    <ul className={styles.detailsList}>
                      <li>
                        <span className={styles.detailLabel}>Contract:</span>
                        <div className={styles.contractValueSmall}>
                          <span>5itemFgavrdSuJDwJVERQwR2q9pQAQHqWUZ6rV1ViDBq</span>
                          <button className={styles.copyButton}>📋</button>
                        </div>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Network:</span>
                        <span className={styles.detailValue}>Solana (SPL)</span>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Decimals:</span>
                        <span className={styles.detailValue}>9</span>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Tax:</span>
                        <span className={styles.detailValue}>0%</span>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Max TX:</span>
                        <span className={styles.detailValue}>1% of supply per transaction</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={styles.chartLinks}>
                    <h3>Charts & Links</h3>
                    <div className={styles.linkButtons}>
                      <a href="https://solscan.io/token/5itemFgavrdSuJDwJVERQwR2q9pQAQHqWUZ6rV1ViDBq" className={styles.linkButton} target="_blank" rel="noopener noreferrer">Solscan</a>
                      <a href="https://jup.ag" className={styles.linkButton} target="_blank" rel="noopener noreferrer">Jupiter</a>
                      <a href="https://raydium.io/swap" className={styles.linkButton} target="_blank" rel="noopener noreferrer">Raydium</a>
                      <a href="#" className={styles.linkButton}>CoinGecko</a>
                      <a href="#" className={styles.linkButton}>CoinMarketCap</a>
                    </div>
                  </div>
                </div>
                
                <a href="https://jup.ag" target="_blank" rel="noopener noreferrer" className={styles.tradeBtnLarge}>
                  Trade on Jupiter
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.tradeIcon}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.treasureDecoration}></div>
    </section>
  );
};

export default HowToBuy;
