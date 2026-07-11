import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.scss';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image src={project.image} alt={`Imagem do projeto ${project.title}`} width={800} height={450} priority={false} />
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
          Ver detalhes →
        </Link>
      </div>
    </article>
  );
}
