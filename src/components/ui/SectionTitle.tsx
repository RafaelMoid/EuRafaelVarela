import styles from './SectionTitle.module.scss';

export function SectionTitle({ eyebrow, title, description, id }: { eyebrow?: string; title: string; description?: string; id?: string }) {
  return (
    <div className={styles.wrapper}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title} id={id}>
        {title}
      </h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
