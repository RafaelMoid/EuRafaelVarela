'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/components/language/LanguageProvider';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.scss';

export function ProjectCard({ project }: { project: Project }) {
  const { translate } = useLanguage();

  return (
    <article className={styles.card}>
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
        <Link className={styles.link} href={`/projetos/${project.slug}`}>
          {translate.home.projects.details} →
        </Link>
      </div>
    </article>
  );
}
