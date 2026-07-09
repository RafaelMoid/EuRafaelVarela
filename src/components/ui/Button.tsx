import Link from 'next/link';
import styles from './Button.module.scss';

export function Button({ children, href, variant = 'primary', external = false, onClick }: { children: React.ReactNode; href?: string; variant?: 'primary' | 'secondary'; external?: boolean; onClick?: () => void }) {
  const className = `${styles.button} ${variant === 'secondary' ? styles.secondary : styles.primary}`.trim();

  if (external) {
    return (
      <a className={className} href={href || '#'} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link className={className} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
