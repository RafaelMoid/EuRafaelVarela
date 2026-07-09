import Image from 'next/image';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { openContactModal } from '@/components/contact/ContactModal';
import styles from './HeroSection.module.scss';

export function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Portfólio profissional</p>
        <h1 id="hero-title" className={styles.title}>{profile.title}</h1>
        <p className={styles.description}>
          Sou Rafael Varela, profissional de tecnologia com experiência em desenvolvimento front-end, WordPress/PHP, sistemas web e gestão técnica de projetos. Crio soluções seguras, performáticas, acessíveis e fáceis de manter, conectando necessidades de negócio a produtos digitais funcionais.
        </p>
        <div className={styles.actions}>
          <Button href="/projetos">Ver projetos</Button>
          <Button href={profile.cvPath} variant="secondary">Baixar currículo</Button>
          <Button variant="secondary" onClick={openContactModal}>Falar comigo</Button>
        </div>
        <div className={styles.badges}>
          {profile.heroBadges.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
      <div className={styles.media}>
        <div className={styles.card}>
          <Image src="/assets/profile/rafael-varela.webp" alt="Foto profissional de Rafael Varela" width={800} height={800} priority />
          <div className={styles.cardText}>
            <p>Desenvolvedor Web</p>
            <strong>WordPress / Front-end / Sistemas web</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
