import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ArrowUp, Bot, MessageCircle, X } from 'lucide-react';

interface Message { role: 'user' | 'model'; text: string; }

export default function BrainAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'model', text: 'Merhaba! Eğitim günleri, araçlar ve birlikte yapacağımız uygulamalar hakkında sorularınızı yanıtlayabilirim. Nereden başlayalım?' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  useEffect(() => () => abortRef.current?.abort(), []);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => {
    if (!open) return;
    function handleEscape(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);
  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' }); }, [messages, loading]);
  function close() { setOpen(false); triggerRef.current?.focus(); }
  async function send(text: string) {
    if (!text.trim() || loading) return;
    setInput(''); setError(''); setLoading(true);
    const history = messages;
    setMessages(previous => [...previous, { role: 'user', text }]);
    abortRef.current = new AbortController();
    const timeout = window.setTimeout(() => abortRef.current?.abort(), 60000);
    try {
      const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: text, history }), signal: abortRef.current.signal });
      const data = await response.json();
      if (!response.ok) throw new Error(response.status === 550 ? 'Asistanın bağlantısı henüz hazır değil. Eğitim içeriklerine ve araçlara menüden ulaşabilirsiniz.' : 'Asistan şu an yanıt veremedi. Biraz sonra yeniden deneyebilirsiniz.');
      if (typeof data.text !== 'string' || !data.text.trim()) throw new Error('Asistan boş bir yanıt verdi. Yeniden deneyebilirsiniz.');
      setMessages(previous => [...previous, { role: 'model', text: data.text }]);
    } catch (err) { setError(err instanceof Error && err.name === 'AbortError' ? 'Yanıt bekleme süresi doldu. Yeniden deneyebilirsiniz.' : err instanceof Error ? err.message : 'Bağlantı kurulamadı.'); }
    finally { window.clearTimeout(timeout); setLoading(false); inputRef.current?.focus(); }
  }
  function trapFocus(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== 'Tab') return;
    const controls = dialogRef.current?.querySelectorAll<HTMLElement>('button:not(:disabled), input:not(:disabled), a[href]');
    if (!controls?.length) return;
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  return <div className="assistant-wrapper">
    <button ref={triggerRef} className="assistant-trigger" id="assistant-trigger-btn" aria-label={open ? 'Eğitim asistanını kapat' : 'Eğitim asistanını aç'} aria-expanded={open} aria-controls="assistant-chat-window" onClick={() => open ? close() : setOpen(true)}>{open ? <X size={23} /> : <MessageCircle size={23} />}</button>
    {open && <><div className="assistant-backdrop" onClick={close} /><section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="assistant-title" className="assistant-window" id="assistant-chat-window" onKeyDown={trapFocus}>
      <header><span className="assistant-avatar"><Bot size={21} /></span><div><h2 id="assistant-title">Eğitim asistanımız</h2><p>Birlikte öğrenelim.</p></div><button onClick={close} aria-label="Asistanı kapat"><X size={20} /></button></header>
      <div ref={scrollRef} className="assistant-messages" role="log" aria-live="polite">{messages.map((message, i) => <p className={`assistant-message ${message.role}`} key={i}>{message.text}</p>)}{loading && <p className="assistant-loading" role="status">Yanıt hazırlanıyor…</p>}{error && <p className="assistant-error" role="alert">{error}</p>}</div>
      {messages.length === 1 && <div className="assistant-suggestions">{['2. gün ne yapacağız?', 'Gemini CLI’yi neden kullanacağız?'].map(question => <button key={question} onClick={() => send(question)} disabled={loading}>{question}</button>)}</div>}
      <form onSubmit={event => { event.preventDefault(); send(input); }}><input ref={inputRef} aria-label="Asistana sorunuzu yazın" placeholder="Bir soru soralım…" value={input} onChange={event => setInput(event.target.value)} maxLength={4000} /><button type="submit" aria-label="Soruyu gönder" disabled={loading || !input.trim()}><ArrowUp size={19} /></button></form>
    </section></>}
  </div>;
}
