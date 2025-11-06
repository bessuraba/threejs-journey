import styles from './Jumbotron.module.scss';

export default function Jumbotron() {
  return (
    <section className={styles.jumbotron}>
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
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to my Three.js journey
        </h1>
        <p className={styles.description}>
          Embark on an exciting adventure into the world of 3D graphics and WebGL. 
          Learn how to create stunning 3D experiences that run smoothly in any browser.
        </p>
      </div>
    </section>
  );
}

