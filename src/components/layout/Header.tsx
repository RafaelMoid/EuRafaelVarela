'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navigation } from '@/data/navigation';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import styles from './Header.module.scss';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={closeMenu} aria-label="Início do portfólio">
          Rafael Varela
        </Link>
        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="site-navigation" className={`${styles.nav} ${menuOpen ? styles.open : ''}`} aria-label="Navegação principal">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            if (item.href === '/contato') {
              return (
                <ContactTrigger
                  key={item.href}
                  className={`${styles.link} ${styles.contactButton} ${isActive ? styles.active : ''}`}
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
      </div>
    </header>
  );
}
