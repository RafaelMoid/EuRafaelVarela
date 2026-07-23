'use client';

import Link from 'next/link';
import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ContactTrigger } from '@/components/contact/ContactTrigger';
import { profile } from '@/data/profile';
import styles from './pomodoro.module.scss';

type Mode = 'focus' | 'deep' | 'short' | 'long';
type Theme = 'classic' | 'cute' | 'rock' | 'medieval';
type Task = { id: string; title: string; estimate: number; completed: number; done: boolean };
type Settings = { focus: number; deep: number; short: number; long: number; longInterval: number; autoBreak: boolean; autoFocus: boolean; sound: boolean; lofiVolume: number; lofiTrack: number; theme: Theme };
type LofiTrack = { title: string; mood: string; chords: number[][]; beat: number; warmth: number; rhythm: number[]; melody: number[] };

const DEFAULT_SETTINGS: Settings = { focus: 25, deep: 45, short: 5, long: 15, longInterval: 4, autoBreak: false, autoFocus: false, sound: true, lofiVolume: 32, lofiTrack: 0, theme: 'classic' };
const MODE_LABELS: Record<Mode, string> = { focus: 'Pomodoro', deep: 'Foco longo', short: 'Pausa curta', long: 'Pausa longa' };
const THEMES: { id: Theme; name: string; icon: string; description: string }[] = [
  { id: 'classic', name: 'Clássico', icon: '◷', description: 'Limpo e acolhedor' },
  { id: 'cute', name: 'Fofinho', icon: '♡', description: 'Rosa, gatos e coelhos' },
  { id: 'rock', name: 'Rock', icon: '⚡', description: 'Preto, vermelho e atitude' },
  { id: 'medieval', name: 'Medieval', icon: '♜', description: 'Fantasia e aventura' }
];
const LOFI_TRACKS: LofiTrack[] = [
  { title: 'Café em dia de chuva', mood: 'Calmo e aconchegante', beat: .55, warmth: .28, rhythm: [0, 1.5, 3], melody: [0,-1,1,2,-1,1,3,-1], chords: [[220,261.63,329.63,392],[164.81,220,261.63,329.63],[174.61,220,261.63,349.23],[196,246.94,293.66,392]] },
  { title: 'Janela ao entardecer', mood: 'Leve e contemplativo', beat: .6, warmth: .2, rhythm: [0, 2, 3.5], melody: [2,-1,1,-1,3,2,-1,0], chords: [[261.63,329.63,392,493.88],[220,261.63,329.63,440],[174.61,261.63,349.23,440],[196,293.66,392,493.88]] },
  { title: 'Biblioteca vazia', mood: 'Profundo e silencioso', beat: .68, warmth: .36, rhythm: [0, 2.5], melody: [0,-1,-1,2,-1,-1,1,-1], chords: [[146.83,220,293.66,349.23],[130.81,196,261.63,329.63],[164.81,246.94,329.63,392],[146.83,220,277.18,369.99]] },
  { title: 'Nuvens de algodão', mood: 'Doce e sonhador', beat: .5, warmth: .16, rhythm: [0, 1, 2.5, 3.5], melody: [0,1,2,-1,3,2,1,-1], chords: [[293.66,369.99,440,554.37],[246.94,329.63,369.99,493.88],[261.63,329.63,392,523.25],[220,293.66,369.99,440]] },
  { title: 'Neon depois da meia-noite', mood: 'Urbano e noturno', beat: .43, warmth: .42, rhythm: [0, .75, 2, 2.75], melody: [0,-1,2,1,-1,3,2,0], chords: [[110,164.81,220,261.63],[130.81,196,246.94,329.63],[98,146.83,196,246.94],[123.47,185,246.94,293.66]] },
  { title: 'Chá no jardim', mood: 'Delicado e ensolarado', beat: .57, warmth: .12, rhythm: [0, 1.5, 2.5], melody: [3,2,-1,1,2,-1,0,1], chords: [[329.63,392,493.88,587.33],[293.66,369.99,440,554.37],[261.63,329.63,440,523.25],[293.66,392,493.88,587.33]] },
  { title: 'Estrada sem pressa', mood: 'Aberto e nostálgico', beat: .52, warmth: .3, rhythm: [0, 1, 3], melody: [0,-1,2,-1,1,2,3,-1], chords: [[196,246.94,293.66,392],[220,277.18,329.63,440],[164.81,220,261.63,329.63],[174.61,233.08,293.66,349.23]] },
  { title: 'Pixel e madrugada', mood: 'Retrô e concentrado', beat: .4, warmth: .1, rhythm: [0, .5, 1.5, 2.5, 3.5], melody: [0,2,1,3,2,1,0,-1], chords: [[246.94,311.13,369.99,493.88],[207.65,261.63,311.13,415.3],[220,277.18,329.63,440],[185,246.94,311.13,369.99]] },
  { title: 'Lua sobre o castelo', mood: 'Místico e sereno', beat: .7, warmth: .4, rhythm: [0, 1.5, 3.5], melody: [0,-1,3,-1,2,1,-1,0], chords: [[146.83,220,261.63,349.23],[130.81,196,246.94,329.63],[110,164.81,220,293.66],[123.47,185,246.94,311.13]] },
  { title: 'Manhã de domingo', mood: 'Suave e otimista', beat: .54, warmth: .18, rhythm: [0, 2, 3], melody: [0,1,-1,2,3,-1,2,1], chords: [[261.63,329.63,392,523.25],[196,261.63,329.63,392],[220,293.66,349.23,440],[174.61,261.63,349.23,440]] }
];

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
  const [cleanMode, setCleanMode] = useState(false);
  const endAt = useRef<number | null>(null);
  const audioContext = useRef<AudioContext | null>(null);
  const lofiSource = useRef<AudioBufferSourceNode | null>(null);
  const lofiGain = useRef<GainNode | null>(null);

  const durationFor = useCallback((value: Mode, current = settings) => current[value] * 60, [settings]);

  useEffect(() => {
    try {
      setCleanMode(localStorage.getItem('rv-clean-mode') === 'true');
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

  const createLofiLoop = useCallback((context: AudioContext, track: LofiTrack) => {
    const bars = 16;
    const secondsLong = bars * 4 * track.beat;
    const sampleRate = context.sampleRate;
    const length = sampleRate * secondsLong;
    const buffer = context.createBuffer(2, length, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    const addNote = (
      start: number,
      duration: number,
      frequency: number,
      volume: number,
      voice: 'keys' | 'pad' | 'bass' | 'pluck',
      pan = 0
    ) => {
      const noteStart = Math.max(0, Math.floor(start * sampleRate));
      const noteEnd = Math.min(length, noteStart + Math.floor(duration * sampleRate));
      for (let i = noteStart; i < noteEnd; i += 1) {
        const time = (i - noteStart) / sampleRate;
        const release = Math.max(0, 1 - time / duration);
        const attack = Math.min(1, time * (voice === 'pad' ? 1.4 : voice === 'keys' ? 7 : 25));
        const envelope = voice === 'pluck' ? Math.exp(-time * 4.5) : attack * Math.pow(release, voice === 'pad' ? .65 : 1.25);
        const wobble = Math.sin(time * Math.PI * 2 * (.18 + track.warmth * .4)) * track.warmth;
        let tone = Math.sin(Math.PI * 2 * (frequency + wobble) * time);
        if (voice === 'keys') tone += Math.sin(Math.PI * 2 * frequency * 2 * time) * .22 + Math.sin(Math.PI * 2 * frequency * 3 * time) * .07;
        if (voice === 'pad') tone += Math.sin(Math.PI * 2 * frequency * .5 * time) * .3;
        if (voice === 'bass') tone += Math.sin(Math.PI * 2 * frequency * .5 * time) * .4;
        if (voice === 'pluck') tone += Math.sin(Math.PI * 2 * frequency * 2 * time) * .35;
        const value = tone * envelope * volume;
        left[i] += value * (1 - Math.max(0, pan) * .55);
        right[i] += value * (1 + Math.min(0, pan) * .55);
      }
    };

    // Dezesseis compassos em 4/4: quatro seções e quatro voltas harmônicas completas.
    for (let bar = 0; bar < bars; bar += 1) {
      const barStart = bar * 4 * track.beat;
      const barDuration = 4 * track.beat;
      const section = Math.floor(bar / 4);
      const chord = track.chords[bar % track.chords.length];

      // Pad sustenta a harmonia no tempo forte; as teclas usam síncopes próprias de cada faixa.
      chord.forEach((frequency, noteIndex) => {
        if (section !== 2 || bar % 2 === 0) addNote(barStart, barDuration * .98, frequency / 2, section === 0 ? .016 : .011, 'pad', noteIndex % 2 ? -.35 : .35);
        track.rhythm.forEach((beatPosition, hitIndex) => {
          if (section === 0 && hitIndex > 1) return;
          const anticipated = beatPosition >= 3.5 && bar < bars - 1;
          const hitChord = anticipated ? track.chords[(bar + 1) % track.chords.length] : chord;
          addNote(barStart + beatPosition * track.beat, track.beat * .72, hitChord[noteIndex], .022, 'keys', noteIndex % 2 ? .28 : -.28);
        });
      });

      // Baixo estritamente harmônico: fundamental no tempo 1 e quinta no tempo 3/contratempo.
      if (section > 0 && !(section === 2 && bar % 2 === 1)) {
        addNote(barStart, track.beat * 1.65, chord[0] / 2, .06, 'bass');
        const secondBassBeat = section === 3 ? 2.5 : 2;
        addNote(barStart + secondBassBeat * track.beat, track.beat * 1.15, chord[2] / 2, .045, 'bass');
      }

      // Groove 4/4: bumbo nos tempos fortes, caixa em 2 e 4, condução nos contratempos.
      if (section === 1 || section === 3) {
        [0, 2].forEach((position) => addNote(barStart + position * track.beat, .13, 58, .105, 'bass'));
        if (section === 3) addNote(barStart + 2.75 * track.beat, .1, 62, .07, 'bass');
        [1, 3].forEach((position) => addNote(barStart + position * track.beat, .06, 880, .025, 'pluck', .12));
        [.5, 1.5, 2.5, 3.5].forEach((position, index) => {
          if (!(section === 3 && index === 2)) addNote(barStart + position * track.beat, .035, 1320, .011, 'pluck', -.22);
        });
      } else if (section === 2 && bar % 2 === 0) {
        addNote(barStart, .12, 58, .065, 'bass');
      }

      // Frases em colcheias compostas apenas por notas do acorde vigente.
      if (section > 0) {
        track.melody.forEach((noteIndex, step) => {
          if (noteIndex < 0 || (section === 2 && step % 2 === 1)) return;
          const start = barStart + step * track.beat * .5;
          const octave = section === 2 ? 1 : 2;
          addNote(start, track.beat * .62, chord[noteIndex % chord.length] * octave, section === 2 ? .018 : .027, 'pluck', step % 2 ? .42 : -.42);
        });
      }

      // Turnaround no quarto compasso de cada ciclo, resolvendo na fundamental seguinte.
      if (bar % 4 === 3) {
        const nextChord = track.chords[(bar + 1) % track.chords.length];
        addNote(barStart + 3.5 * track.beat, track.beat * .42, nextChord[0] * 2, .022, 'pluck', .5);
      }
    }

    // Evita clipping mesmo quando várias camadas coincidem.
    let peak = 0;
    for (let i = 0; i < length; i += 1) peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
    if (peak > .82) {
      const scale = .82 / peak;
      for (let i = 0; i < length; i += 1) {
        left[i] *= scale;
        right[i] *= scale;
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
    source.buffer = createLofiLoop(context, LOFI_TRACKS[settings.lofiTrack] ?? LOFI_TRACKS[0]);
    source.loop = true;
    gain.gain.value = settings.lofiVolume / 100;
    source.connect(gain);
    gain.connect(context.destination);
    source.start();
    lofiSource.current = source;
    lofiGain.current = gain;
    setLofiPlaying(true);
  }, [createLofiLoop, getAudioContext, lofiPlaying, settings.lofiTrack, settings.lofiVolume]);

  useEffect(() => {
    if (!lofiPlaying) return;
    const context = getAudioContext();
    if (!context) return;
    lofiSource.current?.stop();
    const source = context.createBufferSource();
    source.buffer = createLofiLoop(context, LOFI_TRACKS[settings.lofiTrack] ?? LOFI_TRACKS[0]);
    source.loop = true;
    source.connect(lofiGain.current ?? context.destination);
    source.start();
    lofiSource.current = source;
  }, [createLofiLoop, getAudioContext, lofiPlaying, settings.lofiTrack]);

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

  const updateSettings = (key: keyof Settings, value: number | boolean | Theme) => {
    setSettings((current) => ({ ...current, [key]: value }));
  };

  const saveSettings = () => {
    setShowSettings(false); setRunning(false); endAt.current = null; setSeconds(durationFor(mode, settings));
  };

  const totalEstimate = tasks.reduce((sum, task) => sum + task.estimate, 0);
  const totalDone = tasks.reduce((sum, task) => sum + task.completed, 0);
  const progress = durationFor(mode) ? ((durationFor(mode) - seconds) / durationFor(mode)) * 100 : 0;
  const active = tasks.find((task) => task.id === activeTask);
  const activeTrack = LOFI_TRACKS[settings.lofiTrack] ?? LOFI_TRACKS[0];
  const toggleCleanMode = () => {
    const next = !cleanMode;
    setCleanMode(next);
    localStorage.setItem('rv-clean-mode', String(next));
    window.dispatchEvent(new CustomEvent('rv-clean-mode-change', { detail: next }));
  };

  return (
    <div className={`${styles.page} ${styles[mode]} ${styles[settings.theme]}`} style={{ '--progress': `${Math.max(0, progress)}%` } as React.CSSProperties}>
      <header className={styles.toolHeader}>
        <Link href="/pomodoro" className={styles.logo}><span className={styles.logoMark}><Icon name="check" /></span><span>Foco<span>.</span></span></Link>
        <nav aria-label="Atalhos do Pomodoro">
          <Link href="/" className={styles.headerAction}><Icon name="home" /><span>Portfólio</span></Link>
          <ContactTrigger className={styles.headerAction}><Icon name="mail" /><span>Contato</span></ContactTrigger>
          <button className={styles.headerAction} type="button" onClick={() => setShowSettings(true)}><Icon name="settings" /><span>Ajustes</span></button>
          <button className={styles.headerAction} type="button" onClick={toggleCleanMode} aria-pressed={cleanMode} aria-label="Alternar modelo clean"><b aria-hidden="true">◐</b><span>{cleanMode ? 'Modelo completo' : 'Modelo clean'}</span></button>
        </nav>
      </header>

      <main className={styles.workspace}>
        <div className={styles.themeDecor} aria-hidden="true"><span /><span /><span /></div>
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
          <span className={styles.lofiEyebrow}>LOFI ORIGINAL</span>
          <div className={styles.lofiArtwork}><Icon name="music" /></div>
          <div className={styles.lofiInfo}>
            <label>
              <span className={styles.visuallyHidden}>Escolher lofi</span>
              <select value={settings.lofiTrack} onChange={(event) => updateSettings('lofiTrack', Number(event.target.value))}>
                {LOFI_TRACKS.map((track, index) => <option key={track.title} value={index}>{track.title}</option>)}
              </select>
            </label>
          </div>
          <button className={styles.lofiButton} type="button" onClick={toggleLofi} aria-label={lofiPlaying ? 'Pausar lofi' : 'Tocar lofi'}>
            <Icon name={lofiPlaying ? 'pause' : 'play'} />
          </button>
          <small className={styles.lofiDescription}>{activeTrack.mood} · gerado localmente</small>
          <label className={styles.volumeControl}>
            <Icon name="volume" />
            <span>Volume</span>
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

      <div className={styles.pomodoroFooter}>Feito com amor por <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Rafael Varela</a></div>

      {showSettings && <div className={styles.modalBackdrop} onMouseDown={(event) => event.target === event.currentTarget && setShowSettings(false)}><section className={styles.settingsModal} role="dialog" aria-modal="true" aria-labelledby="settings-title"><div className={styles.modalTitle}><div><span>PERSONALIZE SEU RITMO</span><h2 id="settings-title">Ajustes do timer</h2></div><button type="button" onClick={() => setShowSettings(false)} aria-label="Fechar">×</button></div><fieldset className={styles.themePicker}><legend>Escolha o visual</legend><div>{THEMES.map((theme) => <label key={theme.id} className={settings.theme === theme.id ? styles.selectedTheme : ''}><input type="radio" name="theme" value={theme.id} checked={settings.theme === theme.id} onChange={() => updateSettings('theme', theme.id)} /><b>{theme.icon}</b><strong>{theme.name}</strong><small>{theme.description}</small></label>)}</div></fieldset><div className={styles.durationGrid}>{(['focus', 'deep', 'short', 'long'] as const).map((key) => <label key={key}>{MODE_LABELS[key]}<span><input type="number" min="1" max="120" value={settings[key]} onChange={(event) => updateSettings(key, Math.max(1, Number(event.target.value)))} /> min</span></label>)}</div><label className={styles.interval}>Pausa longa a cada <span><input type="number" min="2" max="10" value={settings.longInterval} onChange={(event) => updateSettings('longInterval', Math.max(2, Number(event.target.value)))} /> sessões</span></label>{([['autoBreak', 'Iniciar pausas automaticamente'], ['autoFocus', 'Iniciar foco automaticamente'], ['sound', 'Som ao finalizar']] as const).map(([key, label]) => <label className={styles.toggle} key={key}><span>{label}</span><input type="checkbox" checked={settings[key]} onChange={(event) => updateSettings(key, event.target.checked)} /></label>)}<button className={styles.saveButton} type="button" onClick={saveSettings}>Salvar ajustes</button></section></div>}
    </div>
  );
}
