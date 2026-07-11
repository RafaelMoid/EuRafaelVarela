'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { profile } from '@/data/profile';
import styles from './ContactModal.module.scss';

export function openContactModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  }
}

const contactItems = [
  { label: 'LinkedIn', value: 'linkedin.com/in/rafaelvarelati', href: profile.linkedin },
  { label: 'GitHub', value: 'github.com/RafaelMoid', href: profile.github },
];

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open-contact-modal', handleOpen as EventListener);

    return () => {
      window.removeEventListener('open-contact-modal', handleOpen as EventListener);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const fallbackCopyEmail = () => {
    const textarea = document.createElement('textarea');
    textarea.value = profile.email;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const copyEmail = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(profile.email);
    } else {
      fallbackCopyEmail();
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  };

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={styles.backdrop} role="presentation" onClick={() => setOpen(false)}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className={styles.closeButton} type="button" onClick={() => setOpen(false)} aria-label="Fechar modal de contato">
          <span aria-hidden="true">x</span>
        </button>

        <div className={styles.copy}>
          <span className={styles.icon} aria-hidden="true">...</span>
          <h2 id="contact-modal-title">Contact</h2>
          <div className={styles.shortLine} aria-hidden="true" />
          <p>
            Estou disponivel para oportunidades em desenvolvimento web, WordPress/PHP, front-end, web/full-stack e gestao tecnica. Vamos construir algo excepcional juntos.
          </p>
          <strong className={styles.available}>Available for work</strong>

          <div className={styles.reasons}>
            <span><strong>Fast Response</strong> Retorno objetivo</span>
            <span><strong>Professional</strong> Entrega clara</span>
            <span><strong>Open to Ideas</strong> Vamos discutir</span>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.actionCard} type="button" onClick={copyEmail}>
            <span className={styles.actionIcon} aria-hidden="true">@</span>
            <span>
              <strong>Email</strong>
              <small>{copied ? 'E-mail copiado' : profile.email}</small>
            </span>
            <b aria-hidden="true">→</b>
          </button>

          {contactItems.map((item) => (
            <a key={item.label} className={styles.actionCard} href={item.href} target="_blank" rel="noopener noreferrer">
              <span className={styles.actionIcon} aria-hidden="true">{item.label === 'LinkedIn' ? 'in' : 'GH'}</span>
              <span>
                <strong>{item.label}</strong>
                <small>{item.value}</small>
              </span>
              <b aria-hidden="true">→</b>
            </a>
          ))}

          <button className={styles.primaryAction} type="button" onClick={copyEmail}>
            {copied ? 'E-mail copiado' : 'Copiar meu e-mail'}
          </button>
        </div>

        <p className={styles.privacy}>Suas informacoes ficam seguras comigo. Respeito sua privacidade.</p>
      </div>
    </div>,
    document.body
  );
}
