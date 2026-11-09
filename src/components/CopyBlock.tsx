import { useEffect, useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function CopyBlock({ text, isCode = false, label }: { text: string; isCode?: boolean; label?: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => { setCopied(false); setError(false); }, [text]);
  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);
  async function copy() {
    try { await navigator.clipboard.writeText(text); setCopied(true); setError(false); }
    catch { setError(true); }
  }
  return <div className={`copy-block ${isCode ? 'code-block' : ''}`}>
    <div className="copy-heading"><span>{label || (isCode ? 'Terminalde deneyeceğiz' : 'Birlikte deneyeceğimiz istem')}</span><button onClick={copy} aria-label="Örnek metni kopyala">{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Kopyalandı' : 'Kopyala'}</button></div>
    <pre>{text}</pre>{error && <p role="status">Kopyalama kullanılamıyor. Metni seçerek kopyalayabilirsiniz.</p>}
  </div>;
}
