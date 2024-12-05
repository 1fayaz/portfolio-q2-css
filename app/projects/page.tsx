import React from 'react';
import Image from 'next/image'; 
import Header from '../components/header/page';
import Footer from '../components/footer/page';
import styles from './Projects.module.css'; 

function projects  () {
    return (
        <div>
            <Header></Header>

        <section className={styles.projects} id="projects">
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.projectList}>
                
                    <div className={styles.projectItem}>
                        <Image src='/images/p1.jpg' alt="" width={200} height={200} className={styles.projectImage} />
                        <h3 className={styles.projectTitle}>Project 1</h3>
                        <p className={styles.projectDescription}>One-Side Form Layout with Icons</p>
                        <p className={styles.projectDescription}>
                            Designed a sleek footer layout featuring two cards and a prominent photo
                        </p>
                        <a href="#" className={styles.viewProjectButton}>View Project</a>
                    </div>

                    
                    <div className={styles.projectItem}>
                        <Image src="/images/p2.jpg" alt="" width={200} height={200} className={styles.projectImage} />
                        <h3 className={styles.projectTitle}>Project 2</h3>
                        <p className={styles.projectDescription}>One-Side Form Layout with Icons</p>
                        <p className={styles.projectDescription}>
                            Designed a sleek footer layout featuring two cards and a prominent photo
                        </p>
                        <a href="#" className={styles.viewProjectButton}>View Project</a>
                    </div>

                
                    <div className={styles.projectItem}>
                        <Image src='/images/p3.jpg' alt="" width={200} height={200} className={styles.projectImage} />
                        <h3 className={styles.projectTitle}>Project 3</h3>
                        <p className={styles.projectDescription}>One-Side Form Layout with Icons</p>
                        <p className={styles.projectDescription}>
                            Designed a sleek footer layout featuring two cards and a prominent photo
                        </p>
                        <a href="#" className={styles.viewProjectButton}>View Project</a>
                    </div>

            
                    <div className={styles.projectItem}>
                        <Image src='/images/p4.jpg' alt="" width={200} height={200} className={styles.projectImage} />
                        <h3 className={styles.projectTitle}>Project 4</h3>
                        <p className={styles.projectDescription}>One-Side Form Layout with Icons</p>
                        <p className={styles.projectDescription}>
                            Designed a sleek footer layout featuring two cards and a prominent photo
                        </p>
                        <a href="#" className={styles.viewProjectButton}>View Project</a>
                    </div>

                
                    <div className={styles.projectItem}>
                        <Image src='/images/p5.jpg' alt="" width={200} height={200} className={styles.projectImage} />
                        <h3 className={styles.projectTitle}>Project 5</h3>
                        <p className={styles.projectDescription}>One-Side Form Layout with Icons</p>
                        <p className={styles.projectDescription}>
                            Designed a sleek footer layout featuring two cards and a prominent photo
                        </p>
                        <a href="#" className={styles.viewProjectButton}>View Project</a>
                 </div>
             </div>
            </div>
    </section>
    <Footer></Footer>
    </div>
)};

export default projects;
