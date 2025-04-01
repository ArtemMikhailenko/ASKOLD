'use client'
import { useState } from 'react';
import styles from './Community.module.css';

const Community = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the email subscription functionality
    alert('Thank you for subscribing to $ASKOLD updates!');
    setEmail('');
  };

  return (
    <section id="community" className={styles.community}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtitle}>Join Our Kingdom</span>
          <h2 className={styles.title}>Community</h2>
          <div className={styles.titleDecoration}>
            <span></span><span></span><span></span>
          </div>
          <p className={styles.description}>
            Prince Askold built his power through allies and loyal followers. Join our thriving community
            of enthusiasts, traders, and believers. Together, we'll conquer the crypto realm and establish
            $ASKOLD as a legendary memecoin.
          </p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.socialsGrid}>
            <a href="https://t.me/askoldcoin" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <div className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.4 3.6L3.6 10.8L9.6 13.2L16.8 7.2L12 14.4L18 20.4L20.4 3.6Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.socialTitle}>Telegram</h3>
              <p className={styles.socialDescription}>Join our official Telegram channel for instant updates, community discussions, and direct access to the team.</p>
              <div className={styles.socialStats}>
                <span className={styles.statsNumber}>10K+</span>
                <span className={styles.statsLabel}>Members</span>
              </div>
              <div className={styles.joinBtn}>Join Now</div>
              <div className={styles.cardGlow}></div>
            </a>
            
            <a href="https://twitter.com/askoldcoin" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <div className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4.0099C21.1294 4.69531 20.1656 5.2333 19.14 5.5999C18.5754 4.93972 17.8273 4.47355 17 4.2599C16.1727 4.04626 15.3054 4.09615 14.5065 4.40255C13.7077 4.70895 13.0125 5.25925 12.5187 5.97641C12.0249 6.69356 11.7559 7.54781 11.75 8.4199V9.2499C10.2456 9.2957 8.75628 8.9751 7.39832 8.31567C6.04035 7.65624 4.86379 6.67612 3.98 5.4599C3.98 5.4599 0.62 12.4599 8.42 15.7999C6.64742 16.9799 4.55778 17.608 2.44 17.5999C10.24 21.7699 19.76 17.5999 19.76 8.3899C19.7584 8.1563 19.7357 7.9237 19.69 7.6999C20.6254 6.78487 21.277 5.58074 22 4.0099Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.socialTitle}>Twitter</h3>
              <p className={styles.socialDescription}>Follow us on Twitter for the latest news, memes, and to participate in exclusive giveaways and contests.</p>
              <div className={styles.socialStats}>
                <span className={styles.statsNumber}>8.5K+</span>
                <span className={styles.statsLabel}>Followers</span>
              </div>
              <div className={styles.joinBtn}>Follow</div>
              <div className={styles.cardGlow}></div>
            </a>
            
            <a href="https://discord.gg/askoldcoin" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <div className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 13C8.5 13.8284 7.82843 14.5 7 14.5C6.17157 14.5 5.5 13.8284 5.5 13C5.5 12.1716 6.17157 11.5 7 11.5C7.82843 11.5 8.5 12.1716 8.5 13Z" fill="#b39243"/>
                  <path d="M17 14.5C17.8284 14.5 18.5 13.8284 18.5 13C18.5 12.1716 17.8284 11.5 17 11.5C16.1716 11.5 15.5 12.1716 15.5 13C15.5 13.8284 16.1716 14.5 17 14.5Z" fill="#b39243"/>
                  <path d="M8.46756 17.1888L8.76957 16.6332L8.46756 17.1888ZM15.5324 17.1888L15.8344 17.7443H15.8344L15.5324 17.1888ZM16.6508 16.575L16.1537 16.9794L16.1537 16.9794L16.6508 16.575ZM7.34919 16.575L6.85212 16.1706L6.85212 16.1706L7.34919 16.575ZM18.75 12C18.75 12.4142 18.4142 12.75 18 12.75C17.5858 12.75 17.25 12.4142 17.25 12H18.75ZM6.75 12C6.75 12.4142 6.41421 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12H6.75ZM17.25 13C17.25 13.5 17 16 14 16V17.5C18 17.5 18.75 14 18.75 13H17.25ZM10 16C7 16 6.75 13.5 6.75 13H5.25C5.25 14 6 17.5 10 17.5V16ZM16.7646 15.1619L16.1537 16.9794L17.1479 17.5706L17.7588 15.7531L16.7646 15.1619ZM14 16C12.8348 16 11.9371 15.938 11.2631 15.8445C10.564 15.7472 10.1271 15.6263 9.7944 15.4817C9.46953 15.3402 9.27035 15.1806 9.13002 15.0055C8.98189 14.8219 8.86124 14.5873 8.76957 14.2777L7.36755 14.7779C7.51376 15.2709 7.72436 15.71 8.04373 16.0982C8.3709 16.4949 8.78422 16.7885 9.3306 17.0214C9.86919 17.2512 10.5285 17.4028 11.3369 17.5179C12.1704 17.637 13.1902 17.7 14 17.7V16ZM7.84626 17.7443C8.19837 17.1233 8.53092 16.4371 8.76957 15.6332L7.36755 15.1224C7.18218 15.7629 6.93178 16.2817 6.69051 16.6332L7.84626 17.7443ZM9 7.75C6.65279 7.75 5.25 9.4375 5.25 12H6.75C6.75 10.0625 7.73221 9.25 9 9.25V7.75ZM15 9.25C16.2678 9.25 17.25 10.0625 17.25 12H18.75C18.75 9.4375 17.3472 7.75 15 7.75V9.25ZM15 7.75C13.2429 7.75 11.8085 7.24154 10.75 6.5H9.25C10.1208 7.74748 12.0732 9.25 15 9.25V7.75ZM9 9.25C11.9268 9.25 13.8792 7.74748 14.75 6.5H13.25C12.1915 7.24154 10.7571 7.75 9 7.75V9.25ZM16.1537 16.9794C16.0206 17.3367 15.8222 17.6715 15.5324 17.1888L15.8344 17.7443C16.2361 18.8415 17.0066 18.1361 17.1479 17.5706L16.1537 16.9794ZM8.76957 16.6332C8.48979 17.1159 8.29135 17.3367 8.15833 16.9794L7.16414 17.5706C7.30539 18.1361 8.07587 18.8415 8.46756 17.7443L8.76957 16.6332ZM8.15833 16.9794L6.85212 16.1706L7.84626 16.9794L9.15247 17.7882L8.15833 16.9794ZM6.85212 16.1706C6.72436 16.0694 6.63406 15.9472 6.64168 15.7588C6.6493 15.5704 6.76112 15.3343 7.16414 15.1224L7.84626 16.5332C7.93351 16.4863 7.96087 16.4366 7.96774 16.4174C7.97068 16.4092 7.96581 16.4113 7.96233 16.4362C7.95871 16.4621 7.96053 16.4992 7.97258 16.5424C7.98471 16.5861 8.01081 16.644 8.07587 16.6918L6.85212 16.1706ZM17.1479 17.5706C18.0074 17.1105 18.0074 16.0706 17.1479 15.6105L16.1537 16.9794C16.1537 16.9794 16.1537 16.9794 16.1537 16.9794C16.1537 16.9794 16.1537 16.9794 16.1537 16.9794L17.1479 17.5706ZM15.5324 17.1888L13.8344 15.7444L14.7394 14.6334L16.4373 16.0777L15.5324 17.1888Z" stroke="#b39243" strokeWidth="0.5"/>
                </svg>
              </div>
              <h3 className={styles.socialTitle}>Discord</h3>
              <p className={styles.socialDescription}>Engage with our vibrant Discord community for in-depth discussions, technical support, and exclusive AMAs.</p>
              <div className={styles.socialStats}>
                <span className={styles.statsNumber}>7K+</span>
                <span className={styles.statsLabel}>Members</span>
              </div>
              <div className={styles.joinBtn}>Join Server</div>
              <div className={styles.cardGlow}></div>
            </a>
            
            <a href="https://reddit.com/r/askoldcoin" target="_blank" rel="noopener noreferrer" className={styles.socialCard}>
              <div className={styles.socialIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12C16 10.9 15.1 10 14 10C12.9 10 12 10.9 12 12M16 12C16 13.1 15.1 14 14 14C12.9 14 12 13.1 12 12M16 12H19M12 12C12 10.9 11.1 10 10 10C8.9 10 8 10.9 8 12M12 12C12 13.1 11.1 14 10 14C8.9 14 8 13.1 8 12M8 12H5M12 14.5V17.5" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 7.51611C17 8.34511 16.328 9.01611 15.5 9.01611C14.672 9.01611 14 8.34511 14 7.51611C14 6.68711 14.672 6.01611 15.5 6.01611C16.328 6.01611 17 6.68711 17 7.51611Z" stroke="#b39243" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className={styles.socialTitle}>Reddit</h3>
              <p className={styles.socialDescription}>Subscribe to our subreddit for community-driven content, memes, and detailed discussions about $ASKOLD.</p>
              <div className={styles.socialStats}>
                <span className={styles.statsNumber}>5K+</span>
                <span className={styles.statsLabel}>Members</span>
              </div>
              <div className={styles.joinBtn}>Subscribe</div>
              <div className={styles.cardGlow}></div>
            </a>
          </div>
          
          <div className={styles.communityBoxes}>
            <div className={styles.newsletterBox}>
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter to receive the latest news, token updates, and exclusive content directly to your inbox.</p>
              <form onSubmit={handleSubmit} className={styles.subscribeForm}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
              <div className={styles.privacyNote}>
                We respect your privacy and will never share your information.
              </div>
            </div>
            
            <div className={styles.ambassadorBox}>
              <h3>Become an Ambassador</h3>
              <p>Join our Knight's Council and help spread the word about $ASKOLD. Our ambassadors receive exclusive rewards and first access to new developments.</p>
              <div className={styles.ambassadorPerks}>
                <div className={styles.perk}>
                  <div className={styles.perkIcon}>🎁</div>
                  <div className={styles.perkText}>Exclusive Rewards</div>
                </div>
                <div className={styles.perk}>
                  <div className={styles.perkIcon}>🔑</div>
                  <div className={styles.perkText}>Early Access</div>
                </div>
                <div className={styles.perk}>
                  <div className={styles.perkIcon}>👑</div>
                  <div className={styles.perkText}>Special Role</div>
                </div>
              </div>
              <a href="#" className={styles.applyBtn}>Apply Now</a>
            </div>
          </div>
        </div>
        
        <div className={styles.tweetFeed}>
          <h3 className={styles.feedTitle}>Latest from the Kingdom</h3>
          <div className={styles.tweets}>
            <div className={styles.tweet}>
              <div className={styles.tweetHeader}>
                <div className={styles.tweetAvatar}>
                  <span>A</span>
                </div>
                <div className={styles.tweetAuthor}>
                  <div className={styles.tweetName}>$ASKOLD Official</div>
                  <div className={styles.tweetHandle}>@askoldcoin</div>
                </div>
                <div className={styles.tweetLogo}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.0099C21.1294 4.69531 20.1656 5.2333 19.14 5.5999C18.5754 4.93972 17.8273 4.47355 17 4.2599C16.1727 4.04626 15.3054 4.09615 14.5065 4.40255C13.7077 4.70895 13.0125 5.25925 12.5187 5.97641C12.0249 6.69356 11.7559 7.54781 11.75 8.4199V9.2499C10.2456 9.2957 8.75628 8.9751 7.39832 8.31567C6.04035 7.65624 4.86379 6.67612 3.98 5.4599C3.98 5.4599 0.62 12.4599 8.42 15.7999C6.64742 16.9799 4.55778 17.608 2.44 17.5999C10.24 21.7699 19.76 17.5999 19.76 8.3899C19.7584 8.1563 19.7357 7.9237 19.69 7.6999C20.6254 6.78487 21.277 5.58074 22 4.0099Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.tweetContent}>
                Exciting news, fellow warriors! We're thrilled to announce our upcoming partnership with a major exchange. Stay tuned for the official announcement next week! 🚀 $ASKOLD #ToValhalla
              </div>
              <div className={styles.tweetTime}>2 hours ago</div>
            </div>
            
            <div className={styles.tweet}>
              <div className={styles.tweetHeader}>
                <div className={styles.tweetAvatar}>
                  <span>A</span>
                </div>
                <div className={styles.tweetAuthor}>
                  <div className={styles.tweetName}>$ASKOLD Official</div>
                  <div className={styles.tweetHandle}>@askoldcoin</div>
                </div>
                <div className={styles.tweetLogo}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.0099C21.1294 4.69531 20.1656 5.2333 19.14 5.5999C18.5754 4.93972 17.8273 4.47355 17 4.2599C16.1727 4.04626 15.3054 4.09615 14.5065 4.40255C13.7077 4.70895 13.0125 5.25925 12.5187 5.97641C12.0249 6.69356 11.7559 7.54781 11.75 8.4199V9.2499C10.2456 9.2957 8.75628 8.9751 7.39832 8.31567C6.04035 7.65624 4.86379 6.67612 3.98 5.4599C3.98 5.4599 0.62 12.4599 8.42 15.7999C6.64742 16.9799 4.55778 17.608 2.44 17.5999C10.24 21.7699 19.76 17.5999 19.76 8.3899C19.7584 8.1563 19.7357 7.9237 19.69 7.6999C20.6254 6.78487 21.277 5.58074 22 4.0099Z" stroke="#b39243" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className={styles.tweetContent}>
                We've just hit 10,000 members in our Telegram community! Thank you for your support and belief in the $ASKOLD vision. The ancient prince would be proud! 👑 #ASKOLD #memecoin
              </div>
              <div className={styles.tweetTime}>1 day ago</div>
            </div>
          </div>
          <a href="https://twitter.com/askoldcoin" target="_blank" rel="noopener noreferrer" className={styles.viewAllBtn}>
            View All Tweets
          </a>
        </div>
      </div>
      
      <div className={styles.communityDecoration}></div>
    </section>
  );
};

export default Community;