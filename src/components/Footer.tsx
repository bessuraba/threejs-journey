import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/chapter-basics" className={styles.link}>
            Basics
          </Link>
          <Link href="#" className={styles.link}>
            About
          </Link>
          <Link href="#" className={styles.link}>
            Contact
          </Link>
        </div>
        <p className={styles.text}>
          © {new Date().getFullYear()} Three.js Journey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

