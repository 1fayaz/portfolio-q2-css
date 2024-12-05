import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'; // Import custom CSS module


const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <Image src='/images/p8.png' alt="" width={150} height={100} />
      </div>
      <div className={styles.links}>
        <Link href='/aboutme'>Home</Link>
        <Link href='/aboutme'>About Me</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/hero'>What I have Learn</Link>
      </div>
    </nav>
  )
};

export default Header;
