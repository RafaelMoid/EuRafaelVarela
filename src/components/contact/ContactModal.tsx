'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ContactCard } from '@/components/cards/ContactCard';
import styles from './ContactModal.module.scss';

export function openContactModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  }
}

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement | null>(null);

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

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={styles.backdrop} role="presentation" onClick={() => setOpen(false)}>
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className={styles.closeButton} type="button" onClick={() => setOpen(false)} aria-label="Fechar formulário de contato">
          <span aria-hidden="true">×</span>
        </button>
        <ContactCard compact onClose={() => setOpen(false)} />
      </div>
    </div>,
    document.body
  );
}
