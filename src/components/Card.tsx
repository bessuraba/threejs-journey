import styles from './Card.module.scss';
import clsx from 'clsx';
import Image from 'next/image';
import Link, { type LinkProps } from 'next/link';

type CardProps = LinkProps & {
  title: string;
  image: string;
  priority?: boolean;
  children: React.ReactNode;
};

export default function Card({
  title, image, priority = false, children, href }: CardProps) {

  return (
    <Link 
      href={href}
      title={title}
      className={clsx(
        styles.card,
        // Mobile: vertical layout
        'flex flex-col',
        // Tablet/Desktop: horizontal layout with 16:9 aspect ratio
        'lg:flex-row lg:aspect-16/7'
      )}
    >
      {/* Image - Square on all sizes */}
      <div className={clsx(
        styles.image,
        'flex-shrink-0 relative',
        // Mobile: full width, aspect square
        'w-full aspect-video md:aspect-16/6 lg:aspect-square',
        // Tablet/Desktop: fixed width, aspect square
        'lg:w-auto lg:aspect-square lg:h-full'
      )}>
        <Image 
          src={image} 
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          unoptimized={true}
          priority={priority}
        />
      </div>

      {/* Content */}
      <div className={clsx(
        styles.content,
        'flex-1 flex flex-col justify-center'
      )}>
        {children}
      </div>
    </Link>
  );
}

