import { useEffect, useState, type FormEvent } from 'react';
import { ArrowLeft, CheckCircle2, Lock, Mic, MousePointerClick } from 'lucide-react';
import CopyBlock from './CopyBlock';
import payload from '../trainer/script.enc.json';
import { decryptScript } from '../trainer/decrypt';
import type { EncryptedPayload, TrainerScript } from '../trainer/types';

const passKey = 'projetabanli6-trainer-pass';

function sessionGet() { try { return window.sessionStorage.getItem(passKey); } catch { return null; } }
function sessionSet(value: string | null) {
  try { if (value === null) window.sessionStorage.removeItem(passKey); else window.sessionStorage.setItem(passKey, value); } catch { /* Works without storage. */ }
}

export default function TrainerArea({ onExit }: { onExit: () => void }) {
  const [script, setScript] = useState<TrainerScript | null>(null);
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'error'>('idle');

  async function unlock(value: string, remembered = false) {
    setStatus('checking');
    try {
      setScript(await decryptScript(value, payload as EncryptedPayload));
      sessionSet(value);
      setStatus('idle');
    } catch {
      sessionSet(null);
      setStatus(remembered ? 'idle' : 'error');
    }
  }
  useEffect(() => {
    const saved = sessionGet();
    if (saved) void unlock(saved, true);
  }, []);
  function submit(event: FormEvent) {
    event.preventDefault();
    if (password) void unlock(password);
  }
  function lock() {
    setScript(null); setPassword(''); setStatus('idle');
    sessionSet(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  if (!script) return <section className="trainer-lock" aria-labelledby="trainer-lock-title">
    <div className="trainer-lock-card">
      <span className="trainer-lock-icon"><Lock size={24} /></span>
      <span className="eyebrow">EĞİTMEN ALANI</span>
      <h1 id="trainer-lock-title">Bu bölüm yalnızca eğitmen içindir.</h1>
      <p>Devam etmek için şifreyi girin.</p>
      <form onSubmit={submit}>
        <label htmlFor="trainer-password" className="sr-only">Şifre</label>
        <input id="trainer-password" type="password" autoComplete="current-password" autoCapitalize="none" autoCorrect="off" spellCheck={false} placeholder="Şifre" value={password} onChange={event => { setPassword(event.target.value); if (status === 'error') setStatus('idle'); }} autoFocus />
        <button className="button primary" type="submit" disabled={!password || status === 'checking'}>{status === 'checking' ? 'Açılıyor…' : 'Giriş'}</button>
      </form>
      {status === 'error' && <p className="trainer-lock-error" role="alert">Şifre hatalı. Tekrar deneyin.</p>}
      <button className="trainer-back" onClick={onExit}><ArrowLeft size={16} /> Kılavuza dön</button>
    </div>
  </section>;

  let stepNumber = 0;
  return <div className="trainer-area">
    <section className="trainer-head">
      <div>
        <span className="eyebrow">EĞİTMEN ALANI</span>
        <h1>{script.title}</h1>
        <p>{script.subtitle}</p>
      </div>
      <button className="button subtle" onClick={lock}><Lock size={16} /> Kilitle</button>
    </section>

    <nav className="trainer-overview" aria-label="Bölümler">
      {script.sections.map((section, i) => <a key={section.title} href={`#bolum-${i + 1}`} onClick={event => { event.preventDefault(); document.getElementById(`bolum-${i + 1}`)?.scrollIntoView({ block: 'start' }); }}>
        <span className="trainer-overview-no">{i + 1}</span>
        <span className="trainer-overview-title">{section.title}</span>
        <span className="trainer-overview-time">{section.time} · {section.minutes} dk</span>
      </a>)}
    </nav>

    <section className="trainer-before" aria-labelledby="trainer-before-title">
      <h2 id="trainer-before-title">Başlamadan önce</h2>
      <ul>{script.before.map(line => <li key={line}>{line}</li>)}</ul>
    </section>

    {script.sections.map((section, i) => <section key={section.title} id={`bolum-${i + 1}`} className="trainer-section" aria-labelledby={`bolum-${i + 1}-title`}>
      <div className="trainer-section-head">
        <span>BÖLÜM {i + 1} · {section.time} · {section.minutes} DK</span>
        <h2 id={`bolum-${i + 1}-title`}>{section.title}</h2>
        <p><strong>Hedef:</strong> {section.goal}</p>
      </div>
      {section.steps.map(step => {
        stepNumber += 1;
        return <article key={step.title} className="trainer-step-card">
          <div className="trainer-step-top"><span className="trainer-step-no">{stepNumber}</span><h3>{step.title}</h3><span className="trainer-step-min">{step.minutes} dk</span></div>
          <p className="trainer-what">{step.what}</p>
          <div className="trainer-box trainer-box-say"><span><Mic size={15} /> SÖYLE</span><ul>{step.say.map(line => <li key={line}>“{line}”</li>)}</ul></div>
          {step.do && step.do.length > 0 && <div className="trainer-box trainer-box-do"><span><MousePointerClick size={15} /> YAP</span><ol>{step.do.map(line => <li key={line}>{line}</li>)}</ol></div>}
          {step.prompts?.map(prompt => <CopyBlock key={prompt.label} text={prompt.text} isCode={prompt.code} label={prompt.label} />)}
          {step.check && <p className="trainer-check"><CheckCircle2 size={17} /> <span><strong>Kontrol:</strong> {step.check}</span></p>}
        </article>;
      })}
    </section>)}
  </div>;
}
