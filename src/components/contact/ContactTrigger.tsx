'use client';

import { openContactModal } from './ContactModal';

export function ContactTrigger({
  children,
  className,
  style,
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const handleClick = () => {
    onClick?.();
    openContactModal();
  };

  return (
    <button type="button" className={className} style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
