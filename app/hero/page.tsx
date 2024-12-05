import React from 'react';
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import styles from './Hero.module.css'; 

const hero = () => {
  return (
    <div>
       <Header></Header>
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>What I Have Learn</h1>
      </div>
      <div className={styles.grid}>
        
        <div className={styles.serviceItem} style={{ borderColor: '#3182ce' }}>
          <div className="text-center">
            <i className={`${styles.icon} ${styles.iconBlue} fas fa-code`}></i>
            <h5 className={styles.serviceItemTitle}>Web Development</h5>
            <p className={styles.serviceItemDescription}>
              Building responsive and interactive websites using modern frameworks.
            </p>
          </div>
        </div>

        
        <div className={styles.serviceItem} style={{ borderColor: '#48bb78' }}>
          <div className="text-center">
            <i className={`${styles.icon} ${styles.iconGreen} fas fa-paint-brush`}></i>
            <h5 className={styles.serviceItemTitle}>UI/UX Design</h5>
            <p className={styles.serviceItemDescription}>
              Creating user-friendly designs that enhance user experience and engagement.
            </p>
          </div>
        </div>

        
        <div className={styles.serviceItem} style={{ borderColor: '#63b3ed' }}>
          <div className="text-center">
            <i className={`${styles.icon} ${styles.iconBlueLight} fas fa-database`}></i>
            <h5 className={styles.serviceItemTitle}>Database Management</h5>
            <p className={styles.serviceItemDescription}>
              Managing and optimizing databases to ensure high performance and security.
            </p>
          </div>
        </div>

        
        <div className={styles.serviceItem} style={{ borderColor: '#e53e3e' }}>
          <div className="text-center">
            <i className={`${styles.icon} ${styles.iconRed} fas fa-cloud`}></i>
            <h5 className={styles.serviceItemTitle}>Cloud Computing</h5>
            <p className={styles.serviceItemDescription}>
              Leveraging cloud technology to build scalable and efficient applications.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )
};

export default hero;
