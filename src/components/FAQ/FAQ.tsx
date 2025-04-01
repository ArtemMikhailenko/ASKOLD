'use client'
import { useState } from 'react';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is $ASKOLD?",
      answer: "$ASKOLD is a memecoin inspired by the legendary Prince Askold, one of the earliest rulers of Kievan Rus in the 9th century. It combines the fun and community aspects of memecoins with a historical theme based on ancient Rus heritage. The token features a 3% transaction tax (2% burned and 1% redistributed to holders), creating a deflationary model that rewards long-term holders."
    },
    {
      question: "How do I buy $ASKOLD?",
      answer: "You can buy $ASKOLD on Uniswap using ETH. First, ensure you have a compatible wallet like MetaMask or Trust Wallet with ETH on the Ethereum network. Then visit Uniswap, connect your wallet, input the $ASKOLD contract address, set your desired amount, and complete the swap. We recommend setting slippage to 5-8% to account for the tokenomics. Detailed instructions are available in our 'How to Buy' section."
    },
    {
      question: "What makes $ASKOLD different from other memecoins?",
      answer: "Unlike many memecoins that lack substance, $ASKOLD draws inspiration from actual history - the story of Prince Askold who led Vikings to establish the early foundations of Kievan Rus. We've built a strong community focused on the long-term vision with tokenomics that reward holders through the automatic burn and redistribution mechanism. Our roadmap includes community governance, NFT collections, and strategic partnerships that will continue to build value around the $ASKOLD ecosystem."
    },
    {
      question: "Is the $ASKOLD contract audited?",
      answer: "Yes, the $ASKOLD smart contract has been fully audited by [Audit Firm Name], a respected security firm in the blockchain space. The audit verified that our contract is secure, properly implemented, and that the tokenomics function as described. The full audit report is available on our website and can be accessed from the 'Documents' section."
    },
    {
      question: "What is the total supply of $ASKOLD tokens?",
      answer: "The total supply of $ASKOLD is 862,000,000 tokens, inspired by the year 862 AD when Prince Askold is believed to have taken control of Kyiv. Of this, 2,000,000 tokens have already been permanently burned at launch. Additionally, 2% of every transaction is automatically burned, continuously reducing the supply over time and increasing scarcity."
    },
    {
      question: "How is the 3% transaction tax distributed?",
      answer: "The 3% transaction tax is divided as follows: 2% is automatically burned, permanently removing these tokens from circulation and reducing the total supply, which can lead to increased scarcity over time. The remaining 1% is redistributed to all existing token holders proportional to their holdings, rewarding those who maintain their investment in $ASKOLD."
    },
    {
      question: "When was $ASKOLD launched?",
      answer: "$ASKOLD was launched in Q2 2025. The project has completed its initial development phase, including smart contract development, security audit, website launch, and community building. We are currently in Phase II of our roadmap, expanding our presence across various platforms and exchanges."
    },
    {
      question: "Are there any restrictions on buying or selling $ASKOLD?",
      answer: "To protect against market manipulation, we've implemented a maximum transaction limit of 8,620,000 $ASKOLD tokens per transaction (approximately 1% of the total supply). Besides this anti-whale mechanism, there are no restrictions on buying or selling. The 3% transaction tax applies to all transactions equally."
    },
    {
      question: "How can I join the $ASKOLD community?",
      answer: "We have an active community across multiple platforms including Telegram, Twitter, Discord, and Reddit. You can find links to all our social platforms in the 'Community' section of our website. Join us to participate in discussions, receive the latest updates, and potentially participate in community events and giveaways."
    },
    {
      question: "What are the long-term goals for $ASKOLD?",
      answer: "Our vision extends far beyond being just another memecoin. We're building a community-driven ecosystem inspired by the conquering spirit of Prince Askold. Our roadmap includes launching an NFT collection featuring ancient Rus themes, implementing DAO governance for community decisions, expanding to multiple blockchains, organizing real-world events, and establishing partnerships with historical and educational organizations. We aim to become a recognized brand that bridges crypto culture with historical appreciation."
    }
  ];

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Common Questions</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <div className={styles.titleDecoration}>
            <span></span><span></span><span></span>
          </div>
          <p className={styles.description}>
            Find answers to the most common questions about $ASKOLD token. 
            If you can't find what you're looking for, reach out to our community on Telegram or Discord.
          </p>
        </div>

        <div className={styles.faqAccordion}>
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            >
              <div 
                className={styles.faqQuestion}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{item.question}</h3>
                <div className={styles.faqIcon}>
                  <span className={styles.iconBar}></span>
                  <span className={styles.iconBar}></span>
                </div>
              </div>
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.supportBox}>
          <div className={styles.supportContent}>
            <h3>Still have questions?</h3>
            <p>Our community managers and team are always happy to help with any questions you might have.</p>
            <div className={styles.supportButtons}>
              <a href="https://t.me/askoldcoin" target="_blank" rel="noopener noreferrer" className={styles.supportBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.4 3.6L3.6 10.8L9.6 13.2L16.8 7.2L12 14.4L18 20.4L20.4 3.6Z"></path>
                </svg>
                <span>Ask on Telegram</span>
              </a>
              <a href="https://discord.gg/askoldcoin" target="_blank" rel="noopener noreferrer" className={styles.supportBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="5" ry="5"></rect>
                  <path d="M8.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                  <path d="M15.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
                  <path d="M10 13h4"></path>
                </svg>
                <span>Join Discord</span>
              </a>
            </div>
          </div>
          <div className={styles.supportDecoration}></div>
        </div>
      </div>
      
      <div className={styles.scrollDecoration}></div>
    </section>
  );
};

export default FAQ;