import Link from 'next/link';
import styles from './ResumeCard.module.scss';

export function ResumeCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link className={styles.link} href={href}>
        Abrir foco
      </Link>
    </article>
  );
}
