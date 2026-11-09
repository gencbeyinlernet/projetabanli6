import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Clock3, LifeBuoy, Lock, Mic, MonitorPlay, MousePointerClick, Repeat, Sparkles } from 'lucide-react';
import CopyBlock from './CopyBlock';
import payload from '../trainer/script.enc.json';
import { decryptScript } from '../trainer/decrypt';
import type { EncryptedPayload, TrainerScript, TrainerSegment, TrainerStep } from '../trainer/types';
import { trainingInfo } from '../data/curriculum';

const passKey = 'projetabanli6-trainer-pass';
const stepKey = 'projetabanli6-trainer-step';
type View = 'plan' | 'flow' | 'phrases' | 'faq' | 'prep';
const views: { id: View; label: string }[] = [
  { id: 'plan', label: 'Plan' },
  { id: 'flow', label: 'Akış' },
  { id: 'phrases', label: 'Ara sözler' },
  { id: 'faq', label: 'Sorular' },
  { id: 'prep', label: 'Hazırlık' },
];

function storageGet(storage: () => Storage, key: string) { try { return storage().getItem(key); } catch { return null; } }
function storageSet(storage: () => Storage, key: string, value: string | null) {
  try { if (value === null) storage().removeItem(key); else storage().setItem(key, value); } catch { /* Works without storage. */ }
}
const session = () => window.sessionStorage;
const local = () => window.localStorage;

// Current date and minute of day in Türkiye, so "now" in the plan matches the session clock.
function istanbulNow() {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Istanbul', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date()).map(part => [part.type, part.value]));
  return { date: `${parts.year}-${parts.month}-${parts.day}`, minutes: Number(parts.hour) * 60 + Number(parts.minute), label: `${parts.hour}.${parts.minute}` };
}
function segmentRange(segment: TrainerSegment) {
  const [start, end] = segment.time.split('–').map(part => part.trim().split('.').map(Number));
  return { start: start[0] * 60 + start[1], end: end[0] * 60 + end[1] };
}

export default function TrainerArea({ onExit }: { onExit: () => void }) {
  const [script, setScript] = useState<TrainerScript | null>(null);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'error'>('idle');

  async function unlock(value: string, remembered = false) {
    setStatus('checking');
    try {
      setScript(await decryptScript(value, payload as EncryptedPayload));
      storageSet(session, passKey, value);
      setStatus('idle');
    } catch {
      storageSet(session, passKey, null);
      setStatus(remembered ? 'idle' : 'error');
    }
  }
  useEffect(() => {
    const saved = storageGet(session, passKey);
    if (saved) void unlock(saved, true);
  }, []);
  function submit(event: FormEvent) {
    event.preventDefault();
    if (password) void unlock(password);
  }
  function lock() {
    setScript(null); setPassword(''); setStatus('idle');
    storageSet(session, passKey, null);
  }

  if (!script) return <section className="trainer-lock" aria-labelledby="trainer-lock-title">
    <div className="trainer-lock-card">
      <span className="trainer-lock-icon"><Lock size={24} /></span>
      <span className="eyebrow">EĞİTMEN ALANI</span>
      <h1 id="trainer-lock-title">Bu bölüm yalnızca eğitmen içindir.</h1>
      <p>Devam etmek için şifreyi girin.</p>
      <form onSubmit={submit}>
        <label htmlFor="trainer-password" className="sr-only">Şifre</label>
        <input id="trainer-password" type="password" inputMode="numeric" autoComplete="current-password" placeholder="Şifre" value={password} onChange={event => { setPassword(event.target.value); if (status === 'error') setStatus('idle'); }} autoFocus />
        <button className="button primary" type="submit" disabled={!password || status === 'checking'}>{status === 'checking' ? 'Açılıyor…' : 'Giriş'}</button>
      </form>
      {status === 'error' && <p className="trainer-lock-error" role="alert">Şifre hatalı. Tekrar deneyin.</p>}
      <button className="trainer-back" onClick={onExit}><ArrowLeft size={16} /> Kılavuza dön</button>
    </div>
  </section>;

  return <TrainerView script={script} onLock={lock} />;
}

function TrainerView({ script, onLock }: { script: TrainerScript; onLock: () => void }) {
  const steps = useMemo(() => script.segments.flatMap(segment => segment.steps.map(step => ({ segment, step }))), [script]);
  const [view, setView] = useState<View>('plan');
  const [index, setIndex] = useState(() => {
    const saved = Number(storageGet(local, stepKey));
    return Number.isInteger(saved) && saved >= 0 && saved < steps.length ? saved : 0;
  });
  const [now, setNow] = useState(istanbulNow);
  useEffect(() => {
    const timer = window.setInterval(() => setNow(istanbulNow()), 20000);
    return () => window.clearInterval(timer);
  }, []);
  useEffect(() => { storageSet(local, stepKey, String(index)); }, [index]);

  const onTrainingDay = now.date === trainingInfo.date.slice(0, 10);
  const currentSegmentId = onTrainingDay ? script.segments.find(segment => { const range = segmentRange(segment); return now.minutes >= range.start && now.minutes < range.end; })?.id : undefined;

  function go(next: number) {
    const target = Math.min(Math.max(next, 0), steps.length - 1);
    setIndex(target);
    setView('flow');
    window.requestAnimationFrame(() => {
      const title = document.getElementById('trainer-step-title');
      title?.focus({ preventScroll: true });
      title?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    });
  }
  useEffect(() => {
    if (view !== 'flow') return;
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); go(index + 1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); go(index - 1); }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const { segment, step } = steps[index];
  const isLastInSegment = segment.steps[segment.steps.length - 1].id === step.id;

  return <div className="trainer-area">
    <section className="trainer-head">
      <div>
        <span className="eyebrow">EĞİTMEN ALANI · {script.date}</span>
        <h1>{script.title}</h1>
        <p>{script.goal}</p>
      </div>
      <div className="trainer-head-side">
        <span className="trainer-clock"><Clock3 size={17} /> Saat {now.label}{currentSegmentId && <small>Şimdi: {script.segments.find(item => item.id === currentSegmentId)?.title}</small>}</span>
        <button className="button subtle" onClick={onLock}><Lock size={16} /> Kilitle</button>
      </div>
    </section>
    <div className="trainer-tabs filter-tabs" role="tablist" aria-label="Eğitmen alanı bölümleri">
      {views.map(item => <button key={item.id} role="tab" aria-selected={view === item.id} className={view === item.id ? 'active' : ''} onClick={() => setView(item.id)}>{item.label}</button>)}
    </div>

    {view === 'plan' && <section className="trainer-plan" aria-label="Plan">
      <div className="trainer-memorable">{script.memorable.map((line, i) => <div key={line}><span>{i + 1}</span><p>{line}</p></div>)}</div>
      {script.segments.map(item => <article key={item.id} className={`trainer-plan-segment ${item.id === currentSegmentId ? 'now' : ''}`}>
        <div className="trainer-plan-time"><strong>{item.time}</strong><span>{item.minutes} dk</span>{item.id === currentSegmentId && <em>ŞİMDİ</em>}</div>
        <div className="trainer-plan-body"><h2>{item.title}</h2>
          <ol>{item.steps.map(entry => { const position = steps.findIndex(s => s.step.id === entry.id); return <li key={entry.id}><button onClick={() => go(position)}><span className="trainer-plan-step">{entry.title}</span><span className="trainer-app-chip">{entry.app}</span><span className="trainer-plan-min">{entry.minutes} dk</span><ChevronRight size={15} /></button></li>; })}</ol>
        </div>
      </article>)}
    </section>}

    {view === 'flow' && <div className="lesson-layout trainer-flow">
      <aside className="lesson-sidebar">
        <div className="sidebar-title">Adımlar <span>{index + 1}/{steps.length}</span></div>
        <div className="progress-track"><i style={{ width: `${(index + 1) / steps.length * 100}%` }} /></div>
        <nav aria-label="Eğitim adımları">{script.segments.map(item => <div key={item.id} className="trainer-nav-group">
          <span className={item.id === currentSegmentId ? 'now' : ''}>{item.time} · {item.title}</span>
          {item.steps.map(entry => { const position = steps.findIndex(s => s.step.id === entry.id); return <button key={entry.id} className={position === index ? 'selected' : ''} aria-current={position === index ? 'step' : undefined} onClick={() => go(position)}><span className="lesson-number">{String(position + 1).padStart(2, '0')}</span><span>{entry.title}</span><ChevronRight size={15} /></button>; })}
        </div>)}</nav>
      </aside>
      <StepCard segment={segment} step={step} position={index} total={steps.length} isLast={isLastInSegment} onPrev={() => go(index - 1)} onNext={() => go(index + 1)} />
    </div>}

    {view === 'phrases' && <section className="trainer-cards" aria-label="Ara sözler">{script.phrases.map(group => <article key={group.title} className="trainer-card"><h2>{group.title}</h2><ul>{group.lines.map(line => <li key={line}>“{line}”</li>)}</ul></article>)}</section>}
    {view === 'faq' && <section className="trainer-cards" aria-label="Sık sorulan sorular">{script.faq.map(item => <article key={item.q} className="trainer-card"><h2>{item.q}</h2><p>{item.a}</p></article>)}</section>}
    {view === 'prep' && <section className="trainer-cards" aria-label="Hazırlık">{script.prep.map(group => <article key={group.title} className="trainer-card"><h2>{group.title}</h2><ul>{group.items.map(line => <li key={line}>{line}</li>)}</ul></article>)}</section>}
  </div>;
}

function StepCard({ segment, step, position, total, isLast, onPrev, onNext }: { segment: TrainerSegment; step: TrainerStep; position: number; total: number; isLast: boolean; onPrev: () => void; onNext: () => void }) {
  return <article className="lesson-content trainer-step">
    <div className="lesson-kicker"><span>{segment.time} · {segment.title.toLocaleUpperCase('tr')}</span><span>Adım {position + 1}/{total} · {step.minutes} dk</span></div>
    <h2 id="trainer-step-title" tabIndex={-1}>{step.title}</h2>
    <div className="trainer-app"><MonitorPlay size={20} /><div><span>EKRANDA</span><strong>{step.app}</strong><p>{step.why}</p></div></div>
    {step.transition && <div className="trainer-transition"><Repeat size={19} /><div><span>GEÇİŞ · BU ADIMA GEÇERKEN SÖYLE</span><p>“{step.transition}”</p></div></div>}
    <h3 className="trainer-label"><Mic size={18} /> Söyle</h3>
    <ol className="trainer-say">{step.say.map(line => <li key={line}>{line}</li>)}</ol>
    {step.do && step.do.length > 0 && <><h3 className="trainer-label"><MousePointerClick size={18} /> Yap</h3><ol className="lesson-steps">{step.do.map((line, i) => <li key={line}><span>{i + 1}</span><p>{line}</p></li>)}</ol></>}
    {step.blocks?.map(block => <CopyBlock key={block.label} text={block.text} isCode={block.code} label={block.label} />)}
    {step.check && <div className="lesson-output"><CheckCircle2 size={21} /><div><span>KONTROL NOKTASI · SÖYLE</span><p>“{step.check}”</p></div></div>}
    {step.fallback && step.fallback.length > 0 && <div className="trainer-fallback"><LifeBuoy size={19} /><div><span>TAKILIRSA</span><ul>{step.fallback.map(line => <li key={line}>{line}</li>)}</ul></div></div>}
    {isLast && segment.closing && <div className="trainer-closing"><Sparkles size={19} /><p>{segment.closing}</p></div>}
    <div className="lesson-actions">
      <button className="button subtle" onClick={onPrev} disabled={position === 0}><ArrowLeft size={17} /> Önceki</button>
      <span className="trainer-hint">Klavye: ← →</span>
      <button className="button primary" onClick={onNext} disabled={position === total - 1}>Sonraki <ArrowRight size={17} /></button>
    </div>
  </article>;
}
