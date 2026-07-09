import styles from './CaseNdaCard.module.scss';

export function CaseNdaCard({ title, description }: { title: string; description: string }) {
  return (
    <article className={styles.card}>
      <p className={styles.eyebrow}>Case sob NDA</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
