import React from "react";
import Image from "next/image";
import styles from "./Aboutme.module.css"; // Import the custom CSS module
import Header from "../components/header/page";
import Footer from "../components/footer/page";


const aboutme = () => {
  return (
    <div>
      <Header></Header>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src='/images/p7.jpeg'
          alt=""
          width={1200}
          height={700}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h6>About Me</h6>
        <h1>
          Welcome to My<span className={styles.highlight}> Protfolio </span>
        </h1>
        <p>
          Tempor erat elitr rebum at clita Diam dolor diam ipsum sit Aliqu
          diam amet diam et eos Clita erat ipsum et lorem et sit
        </p>
        <p>
          Tempor erat elitr rebum at clita Diam dolor diam ipsum sit Aliqu
          diam amet diam et eos Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <a href="">Read More</a>
      </div>
    </div>
    <Footer></Footer>
    </div>
  )};

export default aboutme;
