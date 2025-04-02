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
      answer: "$ASKOLD is a Solana-based memecoin paying tribute to the legendary Prince Askold, one of the foundational figures of Kyivan Rus. It fuses historical heritage with modern decentralized finance, backed by a deflationary token model featuring a 3% transaction tax—2% is burned and 1% redistributed to holders—encouraging long-term holding and active community participation."
    },
    {
      question: "How do I buy $ASKOLD?",
      answer: "You can buy $ASKOLD on decentralized exchanges like Jupiter or Raydium on the Solana blockchain. First, install a Solana-compatible wallet such as Phantom or Solflare, top up your wallet with SOL for the purchase and transaction fees, then navigate to Jupiter or Raydium, paste the $ASKOLD token address, and complete the swap."
    },
    {
      question: "What makes $ASKOLD different from other memecoins?",
      answer: "$ASKOLD is more than just a meme—it's a cultural movement rooted in the historical figure of Prince Askold. The project is built with real community involvement, deflationary mechanics, and a long-term vision that includes governance, NFT collections, and partnerships. Our mission is to combine historical storytelling with blockchain innovation to create a legacy."
    },
    {
      question: "Is the $ASKOLD contract audited?",
      answer: "Yes, the $ASKOLD contract on Solana has undergone a full security audit to ensure it functions as intended and poses no security risks. The audit was conducted by a trusted third-party firm and is publicly accessible via our website in the 'Documents' section."
    },
    {
      question: "What is the total supply of $ASKOLD tokens?",
      answer: "The total supply of $ASKOLD is 862,000,000 tokens, symbolizing the year 862 AD when Askold arrived in Kyiv. At launch, 2,000,000 tokens were burned, and with each transaction, 2% continues to be burned, making the token increasingly scarce."
    },
    {
      question: "How is the 3% transaction tax distributed?",
      answer: "From every transaction, 2% of $ASKOLD is automatically burned, reducing total supply. The remaining 1% is distributed proportionally to all current holders, rewarding those who continue to hold and support the project."
    },
    {
      question: "When was $ASKOLD launched?",
      answer: "$ASKOLD was launched in Q2 2025 on the Solana blockchain. Following the successful deployment of the smart contract, the team launched the official website, opened community channels, and began building awareness through social media and community marketing."
    },
    {
      question: "Are there any restrictions on buying or selling $ASKOLD?",
      answer: "Yes, in order to prevent market manipulation and protect the community, there's a transaction cap of 8,620,000 tokens per transaction—representing 1% of the total supply. This anti-whale mechanism ensures fair distribution and trading behavior."
    },
    {
      question: "How can I join the $ASKOLD community?",
      answer: "Join our vibrant community on Telegram, Discord, and Twitter to connect with other holders, get real-time updates, participate in AMAs, events, and help shape the future of $ASKOLD. Links are available in the 'Community' section of our site."
    },
    {
      question: "What are the long-term goals for $ASKOLD?",
      answer: "$ASKOLD aims to be more than a memecoin. Our long-term vision includes launching an NFT collection rooted in Slavic heritage, building a DAO for community governance, expanding cross-chain, hosting real-world meetups, and collaborating with educational institutions to preserve and promote Eastern European history through blockchain."
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
            Find answers to the most frequently asked questions about $ASKOLD on the Solana blockchain. If you still need help, feel free to contact our moderators or join our community chat.
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
            <p>Our team and community moderators are always here to help. Join us on Telegram or Discord to get real-time support and updates.</p>
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
