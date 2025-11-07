import styles from './Jumbotron.module.scss';
import clsx from 'clsx';

export default function Jumbotron() {
  return (
    <section className={clsx(styles.jumbotron, 'p-16', 'md:p-24', 'lg:p-32')}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.video}
      >
        <source src="https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/jumbotron.mp4" type="video/mp4" />
      </video>
      
      <div className={clsx(styles.content, 'max-w-5xl max-w-7md mx-auto')}>
        <h1 className={clsx(styles.title, 'text-center', 'mb-16')}>
          Welcome to my Three.js journey
        </h1>
        <p className={clsx(styles.description, 'text-center')}>
          My personal journey through Three.js — exploring how creative code and WebGL come together to build interactive 3D worlds in the browser.
        </p>
      </div>
    </section>
  );
}

