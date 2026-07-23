'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/language/LanguageProvider';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.scss';

export function ProjectCard({ project }: { project: Project }) {
  const { translate } = useLanguage();

  return (
    <Link className={styles.card} href={`/projetos/${project.slug}`} aria-label={`${translate.home.projects.details}: ${project.title}`}>
      <article>
      <div className={styles.imageWrap}>
        <Image src={project.image} alt={`${translate.projectDetail.imageAlt} ${project.title}`} width={800} height={450} priority={false} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.type}</p>
        <div className={styles.stack}>
          {project.stack.slice(0, 3).map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <span className={styles.link}>
          {translate.home.projects.details} →
        </span>
      </div>
      </article>
    </Link>
  );
}
