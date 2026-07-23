import type { Metadata } from 'next';
import { constructMetadata } from '@/utils/seo';
import { PomodoroClient } from './PomodoroClient';

export const metadata: Metadata = constructMetadata({
  title: 'Pomodoro | Foque no que importa',
  description: 'Timer Pomodoro gratuito, sem login, com tarefas, ciclos de foco e pausas personalizáveis.',
  path: '/pomodoro',
  image: '/assets/projects/pomodoro-focus.svg'
});

export default function PomodoroPage() {
  return <PomodoroClient />;
}
