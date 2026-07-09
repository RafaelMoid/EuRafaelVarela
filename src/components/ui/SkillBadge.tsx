import styles from './SkillBadge.module.scss';

export function SkillBadge({ children }: { children: React.ReactNode }) {
  return <span className={styles.skill}>{children}</span>;
}
