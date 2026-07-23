'use client';

import Link from 'next/link';
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import styles from './pomodoro.module.scss';

type Mode = 'focus' | 'deep' | 'short' | 'long';
type Task = { id: string; title: string; estimate: number; completed: number; done: boolean };
type Settings = { focus: number; deep: number; short: number; long: number; longInterval: number; autoBreak: boolean; autoFocus: boolean; sound: boolean; lofiVolume: number };

const DEFAULT_SETTINGS: Settings = { focus: 25, deep: 45, short: 5, long: 15, longInterval: 4, autoBreak: false, autoFocus: false, sound: true, lofiVolume: 32 };
const MODE_LABELS: Record<Mode, string> = { focus: 'Pomodoro', deep: 'Foco 45', short: 'Pausa curta', long: 'Pausa longa' };

const Icon = ({ name }: { name: 'home' | 'mail' | 'settings' | 'play' | 'pause' | 'skip' | 'plus' | 'trash' | 'check' | 'music' | 'volume' }) => {
  const paths = {
    home: <><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/></>,
    play: <path d="m9 7 8 5-8 5Z" fill="currentColor" stroke="none"/>,
    pause: <><path d="M9 7v10M15 7v10"/></>, skip: <><path d="m7 7 7 5-7 5Z"/><path d="M17 7v10"/></>,
    plus: <path d="M12 5v14M5 12h14"/>, trash: <><path d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    music: <><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></>,
    volume: <><path d="M11 5 6 9H3v6h3l5 4Z"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12"/></>
  };
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
};

export function PomodoroClient() {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [mode, setMode] = useState<Mode>('focus');
  const [seconds, setSeconds] = useState(DEFAULT_SETTINGS.focus * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [taskTitle, setTaskTitle] = useState('');
  const [estimate, setEstimate] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [lofiPlaying, setLofiPlaying] = useState(false);
  const endAt = useRef<number | null>(null);
  const audioContext = useRef<AudioContext | null>(null);
  const lofiSource = useRef<AudioBufferSourceNode | null>(null);
  const lofiGain = useRef<GainNode | null>(null);

  const durationFor = useCallback((value: Mode, current = settings) => current[value] * 60, [settings]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('rv-pomodoro');
      if (stored) {
        const data = JSON.parse(stored);
        if (data.settings) setSettings({ ...DEFAULT_SETTINGS, ...data.settings });
        if (Array.isArray(data.tasks)) setTasks(data.tasks);
        if (typeof data.sessions === 'number') setSessions(data.sessions);
      }
    } catch { /* dados inválidos são ignorados */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem('rv-pomodoro', JSON.stringify({ settings, tasks, sessions }));
  }, [hydrated, settings, tasks, sessions]);

  const getAudioContext = useCallback(() => {
    const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;
    if (!audioContext.current || audioContext.current.state === 'closed') audioContext.current = new AudioContextClass();
    void audioContext.current.resume();
    return audioContext.current;
  }, []);

  const createLofiLoop = useCallback((context: AudioContext) => {
    const secondsLong = 16;
    const sampleRate = context.sampleRate;
    const length = sampleRate * secondsLong;
    const buffer = context.createBuffer(2, length, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);
    for (let i = 0; i < length; i += 1) {
      left[i] = 0;
      right[i] = 0;
    }
    const chords = [
      [220, 261.63, 329.63, 392],
      [164.81, 220, 261.63, 329.63],
      [174.61, 220, 261.63, 349.23],
      [196, 246.94, 293.66, 392]
    ];
    chords.forEach((chord, chordIndex) => {
      const start = chordIndex * 4;
      chord.forEach((frequency, noteIndex) => {
        const noteStart = Math.floor(start * sampleRate);
        const noteEnd = Math.min(length, noteStart + Math.floor(3.85 * sampleRate));
        for (let i = noteStart; i < noteEnd; i += 1) {
          const time = (i - noteStart) / sampleRate;
          const envelope = Math.min(1, time * 5) * Math.max(0, 1 - time / 4);
          const wobble = Math.sin(time * Math.PI * 2 * .35) * .7;
          const tone = Math.sin(Math.PI * 2 * (frequency + wobble) * time)
            + .28 * Math.sin(Math.PI * 2 * frequency * 2 * time);
          const pan = noteIndex % 2 === 0 ? .82 : 1;
          left[i] += tone * envelope * .038 * pan;
          right[i] += tone * envelope * .038 * (1.82 - pan);
        }
      });
    });
    for (let beat = 0; beat < 32; beat += 1) {
      const start = Math.floor(beat * .5 * sampleRate);
      const kick = beat % 4 === 0;
      const snare = beat % 4 === 2;
      for (let i = start; i < Math.min(length, start + sampleRate * .18); i += 1) {
        const time = (i - start) / sampleRate;
        const envelope = Math.exp(-time * (kick ? 24 : 35));
        const sample = kick
          ? Math.sin(Math.PI * 2 * (72 - time * 150) * time) * envelope * .16
          : Math.sin(Math.PI * 2 * (snare ? 185 : 420) * time) * envelope * (snare ? .055 : .018);
        left[i] += sample;
        right[i] += sample;
      }
    }
    return buffer;
  }, []);

  const toggleLofi = useCallback(() => {
    if (lofiPlaying) {
      lofiSource.current?.stop();
      lofiSource.current = null;
      setLofiPlaying(false);
      return;
    }
    const context = getAudioContext();
    if (!context) return;
    const source = context.createBufferSource();
    const gain = context.createGain();
    source.buffer = createLofiLoop(context);
    source.loop = true;
    gain.gain.value = settings.lofiVolume / 100;
    source.connect(gain);
    gain.connect(context.destination);
    source.start();
    lofiSource.current = source;
    lofiGain.current = gain;
    setLofiPlaying(true);
  }, [createLofiLoop, getAudioContext, lofiPlaying, settings.lofiVolume]);

  useEffect(() => {
    if (lofiGain.current) lofiGain.current.gain.value = settings.lofiVolume / 100;
  }, [settings.lofiVolume]);

  useEffect(() => () => {
    lofiSource.current?.stop();
    void audioContext.current?.close();
  }, []);

  const notify = useCallback(() => {
    if (!settings.sound) return;
    const context = getAudioContext();
    if (!context) return;
    const start = context.currentTime + .04;
    [0, .72, 1.44].forEach((delay) => {
      [784, 1046.5].forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        const at = start + delay + index * .09;
        oscillator.type = 'sine';
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(.0001, at);
        gain.gain.exponentialRampToValueAtTime(.34, at + .025);
        gain.gain.exponentialRampToValueAtTime(.0001, at + .5);
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start(at);
        oscillator.stop(at + .52);
      });
    });
  }, [getAudioContext, settings.sound]);

  const selectMode = useCallback((next: Mode, autoStart = false) => {
    setMode(next); setSeconds(durationFor(next)); setRunning(autoStart);
    endAt.current = autoStart ? Date.now() + durationFor(next) * 1000 : null;
  }, [durationFor]);

  const finishSession = useCallback(() => {
    notify();
    if (mode === 'focus' || mode === 'deep') {
      const nextCount = sessions + 1;
      setSessions(nextCount);
      if (activeTask) setTasks((current) => current.map((task) => task.id === activeTask ? { ...task, completed: task.completed + 1 } : task));
      const nextMode: Mode = nextCount % settings.longInterval === 0 ? 'long' : 'short';
      selectMode(nextMode, settings.autoBreak);
    } else {
      selectMode('focus', settings.autoFocus);
    }
  }, [activeTask, mode, notify, selectMode, sessions, settings]);

  useEffect(() => {
    if (!running) return;
    if (!endAt.current) return;
    const tick = () => {
      const left = Math.max(0, Math.ceil(((endAt.current ?? Date.now()) - Date.now()) / 1000));
      setSeconds(left);
      if (left === 0) finishSession();
    };
    tick();
    const interval = window.setInterval(tick, 250);
    return () => window.clearInterval(interval);
  }, [running, finishSession]);

  useEffect(() => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.title = running ? `${mins}:${secs} — ${MODE_LABELS[mode]}` : 'Pomodoro | Rafael Varela';
    return () => { document.title = 'Rafael Varela'; };
  }, [mode, running, seconds]);

  const toggleTimer = () => {
    if (running) { setRunning(false); endAt.current = null; }
    else { getAudioContext(); endAt.current = Date.now() + seconds * 1000; setRunning(true); }
  };

  const addTask = (event: FormEvent) => {
    event.preventDefault();
    const title = taskTitle.trim();
    if (!title) return;
    const id = crypto.randomUUID?.() ?? String(Date.now());
    setTasks((current) => [...current, { id, title, estimate, completed: 0, done: false }]);
    setActiveTask((current) => current ?? id); setTaskTitle(''); setEstimate(1); setShowForm(false);
  };

  const updateSettings = (key: keyof Settings, value: number | boolean) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const saveSettings = () => {
    setShowSettings(false); setRunning(false); endAt.current = null; setSeconds(durationFor(mode, settings));
  };

  const totalEstimate = tasks.reduce((sum, task) => sum + task.estimate, 0);
  const totalDone = tasks.reduce((sum, task) => sum + task.completed, 0);
  const progress = durationFor(mode) ? ((durationFor(mode) - seconds) / durationFor(mode)) * 100 : 0;
  const active = tasks.find((task) => task.id === activeTask);

  return (
    <div className={`${styles.page} ${styles[mode]}`} style={{ '--progress': `${Math.max(0, progress)}%` } as React.CSSProperties}>
      <header className={styles.toolHeader}>
        <Link href="/pomodoro" className={styles.logo}><span className={styles.logoMark}><Icon name="check" /></span><span>Foco<span>.</span></span></Link>
        <nav aria-label="Atalhos do Pomodoro">
          <Link href="/" className={styles.headerAction}><Icon name="home" /><span>Portfólio</span></Link>
          <ContactTrigger className={styles.headerAction}><Icon name="mail" /><span>Contato</span></ContactTrigger>
          <button className={styles.headerAction} type="button" onClick={() => setShowSettings(true)}><Icon name="settings" /><span>Ajustes</span></button>
        </nav>
      </header>

      <main className={styles.workspace}>
        <section className={styles.timerCard} aria-label="Timer Pomodoro">
          <div className={styles.modes} role="tablist" aria-label="Tipo de sessão">
            {(Object.keys(MODE_LABELS) as Mode[]).map((item) => <button key={item} role="tab" aria-selected={mode === item} onClick={() => selectMode(item)}>{MODE_LABELS[item]}</button>)}
          </div>
          <div className={styles.timer} aria-live="polite">{String(Math.floor(seconds / 60)).padStart(2, '0')}<span>:</span>{String(seconds % 60).padStart(2, '0')}</div>
          <div className={styles.progressTrack}><span /></div>
          <div className={styles.controls}>
            <button className={styles.startButton} type="button" onClick={toggleTimer}><Icon name={running ? 'pause' : 'play'} />{running ? 'Pausar' : 'Começar'}</button>
            <button className={styles.skipButton} type="button" onClick={finishSession} aria-label="Pular sessão"><Icon name="skip" /></button>
          </div>
        </section>

        <div className={styles.sessionText}>
          <span>Sessão #{sessions + 1}</span>
          <strong>{active?.title ?? (mode === 'focus' || mode === 'deep' ? 'Hora de focar!' : 'Respire e recarregue.')}</strong>
        </div>

        <section className={styles.lofiPlayer} aria-label="Player lofi">
          <div className={styles.lofiArtwork}><Icon name="music" /></div>
          <div className={styles.lofiInfo}>
            <span>LOFI ORIGINAL</span>
            <strong>Café em dia de chuva</strong>
            <small>Gerado localmente — livre de direitos autorais</small>
          </div>
          <button className={styles.lofiButton} type="button" onClick={toggleLofi} aria-label={lofiPlaying ? 'Pausar lofi' : 'Tocar lofi'}>
            <Icon name={lofiPlaying ? 'pause' : 'play'} />
          </button>
          <label className={styles.volumeControl}>
            <Icon name="volume" />
            <span className="sr-only">Volume</span>
            <input type="range" min="0" max="70" value={settings.lofiVolume} onChange={(event) => updateSettings('lofiVolume', Number(event.target.value))} />
          </label>
        </section>

        <section className={styles.tasks} aria-labelledby="tasks-title">
          <div className={styles.tasksHeader}><div><span>PLANO DE FOCO</span><h1 id="tasks-title">Suas tarefas</h1></div><span className={styles.counter}>{tasks.filter((task) => task.done).length}/{tasks.length}</span></div>
          <div className={styles.taskList}>
            {tasks.length === 0 && <div className={styles.empty}><span><Icon name="check" /></span><strong>Seu foco começa aqui</strong><p>Adicione uma tarefa e dedique uma sessão a ela.</p></div>}
            {tasks.map((task) => (
              <article key={task.id} className={`${styles.task} ${activeTask === task.id ? styles.activeTask : ''}`} onClick={() => setActiveTask(task.id)}>
                <button type="button" className={styles.check} aria-label={task.done ? 'Reabrir tarefa' : 'Concluir tarefa'} onClick={(event) => { event.stopPropagation(); setTasks((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item)); }}><Icon name="check" /></button>
                <span className={task.done ? styles.done : ''}>{task.title}</span><small>{task.completed}/{task.estimate}</small>
                <button type="button" className={styles.delete} aria-label="Excluir tarefa" onClick={(event) => { event.stopPropagation(); setTasks((current) => current.filter((item) => item.id !== task.id)); if (activeTask === task.id) setActiveTask(null); }}><Icon name="trash" /></button>
              </article>
            ))}
          </div>
          {showForm ? <form className={styles.taskForm} onSubmit={addTask}><label>Tarefa<input autoFocus value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} placeholder="No que você vai focar?" maxLength={100} /></label><label>Pomodoros estimados<input type="number" min="1" max="20" value={estimate} onChange={(event) => setEstimate(Math.max(1, Number(event.target.value)))} /></label><div><button type="button" onClick={() => setShowForm(false)}>Cancelar</button><button type="submit">Adicionar tarefa</button></div></form> : <button className={styles.addTask} type="button" onClick={() => setShowForm(true)}><Icon name="plus" />Adicionar tarefa</button>}
          {tasks.length > 0 && <div className={styles.summary}><span>Concluídos <strong>{totalDone}</strong></span><span>Estimativa <strong>{totalEstimate}</strong></span><span>Tempo focado <strong>{Math.round(totalDone * settings.focus / 60 * 10) / 10}h</strong></span></div>}
        </section>

        <section className={styles.about}><span>FOCO, SEM COMPLICAÇÃO</span><h2>Um timer simples para fazer o trabalho acontecer.</h2><p>Organize suas tarefas, trabalhe em blocos de foco e faça pausas no momento certo. Tudo fica salvo apenas neste navegador — sem cadastro, sem distrações.</p><div><Link href="/">Conheça meu portfólio <span>→</span></Link><ContactTrigger>Fale comigo <span>→</span></ContactTrigger></div></section>
      </main>

      {showSettings && <div className={styles.modalBackdrop} onMouseDown={(event) => event.target === event.currentTarget && setShowSettings(false)}><section className={styles.settingsModal} role="dialog" aria-modal="true" aria-labelledby="settings-title"><div className={styles.modalTitle}><div><span>PERSONALIZE SEU RITMO</span><h2 id="settings-title">Ajustes do timer</h2></div><button type="button" onClick={() => setShowSettings(false)} aria-label="Fechar">×</button></div><div className={styles.durationGrid}>{(['focus', 'deep', 'short', 'long'] as const).map((key) => <label key={key}>{MODE_LABELS[key]}<span><input type="number" min="1" max="120" value={settings[key]} onChange={(event) => updateSettings(key, Math.max(1, Number(event.target.value)))} /> min</span></label>)}</div><label className={styles.interval}>Pausa longa a cada <span><input type="number" min="2" max="10" value={settings.longInterval} onChange={(event) => updateSettings('longInterval', Math.max(2, Number(event.target.value)))} /> sessões</span></label>{([['autoBreak', 'Iniciar pausas automaticamente'], ['autoFocus', 'Iniciar foco automaticamente'], ['sound', 'Som ao finalizar']] as const).map(([key, label]) => <label className={styles.toggle} key={key}><span>{label}</span><input type="checkbox" checked={settings[key]} onChange={(event) => updateSettings(key, event.target.checked)} /></label>)}<button className={styles.saveButton} type="button" onClick={saveSettings}>Salvar ajustes</button></section></div>}
    </div>
  );
}
