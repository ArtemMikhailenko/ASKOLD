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
            to join our growing community of holders and become part of the ASKOLD legacy.
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
                      <div className={styles.stepIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="5" width="20" height="14" rx="2" />
                          <line x1="2" y1="10" x2="22" y2="10" />
                        </svg>
                      </div>
                      <div className={styles.stepNumber}>1</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Create a Wallet</h3>
                      <p>First, download and install a crypto wallet like MetaMask or Trust Wallet from your app store. These wallets will store your $ASKOLD tokens securely.</p>
                      <div className={styles.walletOptions}>
                        <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" className={styles.walletOption}>
                          <img src="https://placehold.co/50x50" alt="MetaMask" />
                          <span>MetaMask</span>
                        </a>
                        <a href="https://trustwallet.com/download" target="_blank" rel="noopener noreferrer" className={styles.walletOption}>
                          <img src="https://placehold.co/50x50" alt="Trust Wallet" />
                          <span>Trust Wallet</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.stepConnector}></div>
                  
                  <div className={styles.step}>
                    <div className={styles.stepIconBox}>
                      <div className={styles.stepIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                          <line x1="9" y1="9" x2="9.01" y2="9" />
                          <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                      </div>
                      <div className={styles.stepNumber}>2</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Purchase ETH</h3>
                      <p>You'll need Ethereum (ETH) to exchange for $ASKOLD. Buy ETH directly in your wallet or from an exchange like Coinbase or Binance, then transfer it to your wallet.</p>
                      <div className={styles.exchangeOptions}>
                        <a href="https://www.coinbase.com/" target="_blank" rel="noopener noreferrer" className={styles.exchangeOption}>
                          <img src="https://placehold.co/50x50" alt="Coinbase" />
                          <span>Coinbase</span>
                        </a>
                        <a href="https://www.binance.com/" target="_blank" rel="noopener noreferrer" className={styles.exchangeOption}>
                          <img src="https://placehold.co/50x50" alt="Binance" />
                          <span>Binance</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.stepConnector}></div>
                  
                  <div className={styles.step}>
                    <div className={styles.stepIconBox}>
                      <div className={styles.stepIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M16 16v-3a2 2 0 0 0-4 0" />
                          <path d="M12 9V5" />
                        </svg>
                      </div>
                      <div className={styles.stepNumber}>3</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Connect to Uniswap</h3>
                      <p>Visit Uniswap through your wallet's built-in browser. Connect your wallet by clicking the "Connect Wallet" button in the top-right corner and following the prompts.</p>
                      <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer" className={styles.uniswapLink}>
                        <img src="https://placehold.co/50x50" alt="Uniswap" />
                        <span>Open Uniswap</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className={styles.stepConnector}></div>
                  
                  <div className={styles.step}>
                    <div className={styles.stepIconBox}>
                      <div className={styles.stepIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </div>
                      <div className={styles.stepNumber}>4</div>
                    </div>
                    <div className={styles.stepContent}>
                      <h3>Swap ETH for $ASKOLD</h3>
                      <p>Enter the $ASKOLD contract address in the token search field. Set the amount of ETH you want to exchange, adjust slippage if needed (around 5-8% recommended), then click "Swap" to complete your purchase.</p>
                      <div className={styles.contractBox}>
                        <div className={styles.contractLabel}>Contract Address:</div>
                        <div className={styles.contractValue}>
                          <span>0x862862ASKOLD...9d62</span>
                          <button className={styles.copyButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.buyBox}>
                  <div className={styles.buyNowLabel}>Ready to join the kingdom?</div>
                  <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer" className={styles.buyNowBtn}>
                    Buy $ASKOLD Now
                  </a>
                  <div className={styles.buyNote}>
                    Always verify the contract address and research before investing.
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.experiencedContent}>
                <div className={styles.quickSteps}>
                  <div className={styles.quickStep}>
                    <div className={styles.quickStepNumber}>1</div>
                    <div className={styles.quickStepText}>
                      <h3>Get ETH on Ethereum mainnet</h3>
                      <p>Ensure you have ETH in your wallet on the Ethereum network to cover the token cost and gas fees.</p>
                    </div>
                  </div>
                  
                  <div className={styles.quickStep}>
                    <div className={styles.quickStepNumber}>2</div>
                    <div className={styles.quickStepText}>
                      <h3>Add $ASKOLD to your wallet</h3>
                      <p>Add custom token using the contract address below. Set decimals to 18 and symbol to $ASKOLD.</p>
                    </div>
                  </div>
                  
                  <div className={styles.quickStep}>
                    <div className={styles.quickStepNumber}>3</div>
                    <div className={styles.quickStepText}>
                      <h3>Use Uniswap or your preferred DEX</h3>
                      <p>Set slippage tolerance to 5-8% to account for tokenomics (3% transaction tax).</p>
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
                          <span>0x862862ASKOLD...9d62</span>
                          <button className={styles.copyButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </button>
                        </div>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Network:</span>
                        <span className={styles.detailValue}>Ethereum (ERC-20)</span>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Decimals:</span>
                        <span className={styles.detailValue}>18</span>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Tax:</span>
                        <span className={styles.detailValue}>3% (2% burn, 1% reflection)</span>
                      </li>
                      <li>
                        <span className={styles.detailLabel}>Max TX:</span>
                        <span className={styles.detailValue}>8,620,000 $ASKOLD (1% of supply)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className={styles.chartLinks}>
                    <h3>Charts & Links</h3>
                    <div className={styles.linkButtons}>
                      <a href="#" className={styles.linkButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                        <span>DexTools</span>
                      </a>
                      <a href="#" className={styles.linkButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <path d="M17.5 6.5h.01" />
                        </svg>
                        <span>Etherscan</span>
                      </a>
                      <a href="#" className={styles.linkButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 11v1a8 8 0 0 0 8 8h1" />
                          <path d="M21 13v-1a8 8 0 0 0-8-8h-1" />
                          <path d="M12 12V4h1" />
                          <path d="M12 12h8v1" />
                          <path d="M12 12v8" />
                          <path d="M12 12h-1" />
                        </svg>
                        <span>CoinGecko</span>
                      </a>
                      <a href="#" className={styles.linkButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                        </svg>
                        <span>CoinMarketCap</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer" className={styles.tradeBtnLarge}>
                  Trade on Uniswap
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