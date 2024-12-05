import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import styles from './Footer.module.css'; // Import the custom CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            {/* You can add content here if necessary */}
          </div>

          <div className={styles.footerColumn}>
            <h2>Quick Links</h2>
            <ol className={styles.footerLinks}>
              <li><Link href="/home">Home</Link></li>
              <li><Link href="aboutme">About Me</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/hero">What I Have Learn</Link></li>
            </ol>
          </div>

          <div className={styles.footerColumn}>
            <h2>Follow Us</h2>
            <div className={styles.footerSocialIcons}>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>2024 Made with ❤️ by Fayaz ALI</p>
      </div>
    </footer>
  )
};

export default Footer;