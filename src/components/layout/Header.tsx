'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import { useLanguage } from '@/components/language/LanguageProvider';
import styles from './Header.module.scss';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { translate } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { href: '/', label: translate.nav.home },
    { href: '/projetos', label: translate.nav.projects },
    { href: '/experiencia', label: translate.nav.experience },
    { href: '/sobre', label: translate.nav.about },
    { href: '/curriculo', label: translate.nav.resume },
    { href: 'contact', label: translate.nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="Inicio do portfolio">
          RV
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? translate.header.closeMenu : translate.header.openMenu}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-navigation" className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Navegacao principal">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.href === 'contact') {
              return (
                <ContactTrigger
                  key={item.href}
                  className={`${styles.link} ${styles.contactButton} ${isActive ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </ContactTrigger>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                onClick={closeMenu}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <ContactTrigger className={styles.desktopContact} onClick={closeMenu}>
          Contact Me
        </ContactTrigger>
      </div>
    </header>
  );
}
