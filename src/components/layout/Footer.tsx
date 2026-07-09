import Link from 'next/link';
import { profile } from '@/data/profile';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import styles from './Footer.module.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.title}>{profile.name}</h2>
          <p className={styles.summary}>Desenvolvedor web com foco em WordPress, front-end, sistemas digitais e gestão técnica.</p>
        </div>
        <div className={styles.links}>
          <Link href="/projetos">Projetos</Link>
          <Link href="/experiencia">Experiência</Link>
          <ContactTrigger className={styles.contactLink}>Contato</ContactTrigger>
        </div>
        <div className={styles.stack}>
          <span>WordPress/PHP</span>
          <span>Front-end</span>
          <span>SEO</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>© {year} {profile.name}. Todos os direitos reservados.</p>
        <p>Portfólio desenvolvido com Next.js, TypeScript e SCSS Modules.</p>
      </div>
    </footer>
  );
}
