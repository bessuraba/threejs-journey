import Link from 'next/link'
import clsx from 'clsx'
import styles from './BackLink.module.scss'

interface BackLinkProps {
  href: string
  text?: string
  className?: string
}

export default function BackLink({ href, text = 'Back', className }: BackLinkProps) {
  return (
    <Link href={href} className={clsx(styles.link, className)}>
      ← {text}
    </Link>
  )
}

