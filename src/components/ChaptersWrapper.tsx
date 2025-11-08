import Card from '@/components/Card';
import clsx from 'clsx';
import styles from './ChaptersWrapper.module.scss';

export default function ChaptersWrapper() {
  return (
    <section className={clsx(styles.chaptersWrapper, 'max-w-7xl', 'mx-auto', 'px-8', 'py-8', 'md:py-16', 'lg:py-24')}>
      <h2 className={clsx(styles.title, 'text-center', 'mb-4')}>Chapters</h2>
      <p className={clsx(styles.description, 'text-center', 'mb-16')}>
        The <strong>Three.js Journey</strong> is a comprehensive, project-based course that guided me from the fundamentals of <strong>WebGL</strong> to advanced <strong>Three.js</strong> development. Through more than 90 hours of hands-on lessons, 
        I gained practical experience building interactive 3D scenes, mastering shaders, and integrating <strong>React Three Fiber</strong> for modern web experiences.  
        Below is an overview of the main topics and skills I developed throughout the journey.
      </p>
      {/* Cards Grid */}
      <div className={clsx(styles.cards, 'grid', 'grid-cols-1', 'gap-6')}>
        <Card
          title={'Basics'}
          image={'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/twilight_desert_serenity.jpg'}
          priority={true}
          href={'/chapter-basics'}>
          <h3 className={clsx(styles.cardTitle, 'mb-4')}>Basics</h3>
          <p className={clsx(styles.cardDescription, 'mb-4')}>During this chapter, I learned the essential foundations of <strong>WebGL</strong> and <strong>Three.js</strong>, and how to set up and control a 3D scene from scratch.</p>
          <ul className={styles.cardList}>
            <li>Understanding <strong>WebGL</strong> and setting up a <strong>Three.js project</strong></li>
            <li>Applying <strong>transforms</strong> and creating <strong>animations</strong></li>
            <li>Working with <strong>cameras</strong> and <strong>controls</strong></li>
            <li>Handling <strong>fullscreen</strong>, <strong>resizing</strong>, and responsive design</li>
            <li>Exploring <strong>geometries</strong> and <strong>materials</strong></li>
            <li>Loading <strong>textures</strong> and adding <strong>3D text</strong></li>
            <li>Using a <strong>debug UI</strong> for real-time adjustments</li>
            <li>Deploying a finished <strong>Three.js scene online</strong></li>
          </ul>
        </Card>
        <Card
          title={'Classic Techniques'}
          image={'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/mystical_jungle_camp.jpg'}
          priority={false}
          href={'/chapter-classic-techniques'}>
          <h3 className={clsx(styles.cardTitle, 'mb-4')}>Classic Techniques</h3>
          <p className={clsx(styles.cardDescription, 'mb-4')}>In this chapter, I deepened my understanding of <strong>lighting, shadows, and particle systems</strong>, and created complete interactive scenes.</p>
          <ul className={styles.cardList}>
            <li>Configuring various <strong>lights</strong> and <strong>shadow settings</strong></li>
            <li>Building the <strong>Haunted House</strong> project</li>
            <li>Creating dynamic <strong>particle systems</strong></li>
            <li>Designing a procedural <strong>galaxy generator</strong></li>
            <li>Animating with <strong>scroll-based interactions</strong></li>
            <li>Combining <strong>lighting, particles, and motion</strong> in cohesive scenes</li>
          </ul>
        </Card>
        <Card
          title={'Advanced Techniques'}
          image={'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/motel_night_scene.jpg'}
          priority={false}
          href={'/chapter-advanced-techniques'}>
          <h3 className={clsx(styles.cardTitle, 'mb-4')}>Advanced Techniques</h3>
          <p className={clsx(styles.cardDescription, 'mb-4')}>This chapter focused on bringing realism and structure to 3D projects through <strong>physics</strong>, <strong>models</strong>, and <strong>optimized architecture</strong>.</p>
          <ul className={styles.cardList}>
            <li>Integrating <strong>physics simulations</strong></li>
            <li>Importing and optimizing <strong>3D models</strong> from Blender</li>
            <li>Using <strong>raycasting</strong> for <strong>mouse events</strong> and selection</li>
            <li>Applying <strong>environment maps</strong> and <strong>realistic lighting</strong></li>
            <li>Creating <strong>physically-based materials</strong></li>
            <li>Structuring scalable <strong>project architecture</strong></li>
          </ul>
        </Card>
        <Card
          title={'Shaders'}
          image={'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/cozy_low_poly_village.jpg'}
          priority={false}
          href={'/chapter-shaders'}>
          <h3 className={clsx(styles.cardTitle, 'mb-4')}>Shaders</h3>
          <p className={clsx(styles.cardDescription, 'mb-4')}>Here I learned to write and apply <strong>GLSL shaders</strong> to create unique visual effects and procedural materials.</p>
          <ul className={styles.cardList}>
            <li>Understanding <strong>GLSL syntax</strong> and shader structure</li>
            <li>Writing <strong>custom vertex</strong> and <strong>fragment shaders</strong></li>
            <li>Extending existing <strong>materials</strong> with shader code</li>
            <li>Developing visual effects such as <strong>smoke</strong>, <strong>holograms</strong>, and <strong>fireworks</strong></li>
            <li>Creating <strong>particle morphing</strong>, <strong>GPGPU flow fields</strong>, and <strong>wobbly surfaces</strong></li>
            <li>Designing <strong>procedural terrain</strong> and <strong>sliced model</strong> effects</li>
          </ul>
        </Card>
        <Card
          title={'Extra'}
          image={'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/mystical_castle_landscape.jpg'}
          priority={false}
          href={'/chapter-extra'}>
          <h3 className={clsx(styles.cardTitle, 'mb-4')}>Extra</h3>
          <p className={clsx(styles.cardDescription, 'mb-4')}>This chapter covered important topics to <strong>enhance performance</strong>, <strong>visual quality</strong>, and <strong>user experience</strong> in Three.js projects.</p>
          <ul className={styles.cardList}>
            <li>Applying <strong>post-processing</strong> effects</li>
            <li>Optimizing <strong>performance</strong> and <strong>load times</strong></li>
            <li>Adding <strong>loading progress indicators</strong></li>
            <li>Combining <strong>HTML</strong> and <strong>WebGL</strong> elements</li>
          </ul>
        </Card>
        <Card
          title={'Portal Scene'}
          image={'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/low_poly_city.jpg'}
          priority={false}
          href={'/chapter-portal-scene'}>
          <h3 className={clsx(styles.cardTitle, 'mb-4')}>Portal Scene</h3>
          <p className={clsx(styles.cardDescription, 'mb-4')}>In this project chapter, I built a complete <strong>stylized scene</strong> integrating <strong>Blender</strong> and <strong>Three.js</strong> workflows.</p>
          <ul className={styles.cardList}>
            <li>Modeling the <strong>portal scene</strong> in Blender</li>
            <li><strong>Baking</strong> lighting and textures for performance</li>
            <li>Importing, <strong>optimizing</strong>, and enhancing the scene in Three.js</li>
            <li>Adding final <strong>details and effects</strong></li>
          </ul>
        </Card>
        <Card
          title={'React Three Fiber'}
          image={'https://hobcxfhiydtdxnxh.public.blob.vercel-storage.com/futuristic_space_station.jpg'}
          priority={false}
          href={'/chapter-react-three-fiber'}>
          <h3 className={clsx(styles.cardTitle, 'mb-4')}>React Three Fiber</h3>
          <p className={clsx(styles.cardDescription, 'mb-4')}>In the final chapter, I integrated <strong>Three.js</strong> into <strong>React</strong> using <strong>React Three Fiber (R3F)</strong> and built interactive applications.</p>
          <ul className={styles.cardList}>
            <li>Mastering <strong>React</strong> and <strong>R3F</strong> fundamentals with <strong>Drei</strong></li>
            <li>Setting up <strong>environment</strong>, <strong>staging</strong>, and <strong>debug tools</strong></li>
            <li>Loading <strong>GLTF models</strong> and creating <strong>3D text</strong></li>
            <li>Handling <strong>mouse events</strong> and <strong>post-processing</strong></li>
            <li>Building a small <strong>portfolio project</strong> and <strong>interactive game</strong></li>
          </ul>
        </Card>
      </div>
    </section>
  );
}

