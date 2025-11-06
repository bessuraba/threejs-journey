import styles from './Card.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  variant: 'orange' | 'magenta' | 'redOrange';
  image: string;
  isEven: boolean;
};

export default function Card({ title, description, variant, image, isEven }: CardProps) {
  const cardClass = 
    variant === 'orange' ? styles.cardOrange :
    variant === 'magenta' ? styles.cardMagenta :
    styles.cardRedOrange;

  const titleClass =
    variant === 'orange' ? styles.titleOrange :
    variant === 'magenta' ? styles.titleMagenta :
    styles.titleRedOrange;

  return (
    <div 
      className={clsx(
        cardClass,
        // Mobile: vertical layout
        'flex flex-col',
        // Tablet/Desktop: horizontal layout with 16:9 aspect ratio
        'md:flex-row md:aspect-video',
        // Reverse order for even cards on tablet/desktop
        isEven && 'md:flex-row-reverse'
      )}
    >
      {/* Image - Square on all sizes */}
      <div className={clsx(
        'flex-shrink-0 relative',
        // Mobile: full width, aspect square
        'w-full aspect-square',
        // Tablet/Desktop: fixed width, aspect square
        'md:w-auto md:aspect-square md:h-full'
      )}>
        <Image 
          src={image} 
          alt={title}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div className={clsx(
        styles.content,
        'flex-1 flex flex-col justify-center'
      )}>
        <h2 className={titleClass}>
          {title}
        </h2>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}

