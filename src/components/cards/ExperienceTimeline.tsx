import { useLanguage } from '@/components/language/LanguageProvider';
import styles from './ExperienceTimeline.module.scss';

export function ExperienceTimeline() {
  const { content } = useLanguage();
  const { experiences } = content;

  return (
    <ol className={styles.timeline}>
      {experiences.map((item) => (
        <li key={item.company} className={styles.item}>
          <div className={styles.dot} aria-hidden="true" />
          <div className={styles.content}>
            <div className={styles.header}>
              <div>
                <h3 className={styles.company}>{item.company}</h3>
                <p className={styles.role}>{item.role}</p>
              </div>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.summary}>{item.summary}</p>
            <div className={styles.stack}>
              {item.stack.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <p className={styles.note}>{item.note}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
