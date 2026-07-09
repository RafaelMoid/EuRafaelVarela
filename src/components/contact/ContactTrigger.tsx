'use client';

import { openContactModal } from './ContactModal';

export function ContactTrigger({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <button type="button" className={className} style={style} onClick={openContactModal}>
      {children}
    </button>
  );
}
