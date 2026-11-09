import { useEffect, useState } from 'react';
import { Check, Copy, Sparkles } from 'lucide-react';

const examples = [
  { label: 'Ders etkinliği', role: 'Bir fen bilimleri öğretmenisin.', goal: '5. sınıf öğrencileri için fotosentezi anlatan 20 dakikalık bir etkinlik planı hazırla.', boundary: 'Malzemeler, uygulama adımları ve 3 değerlendirme sorusu ekle. Dili sade tut; bilimsel doğruluğu kontrol et.' },
  { label: 'Uygulama geliştirme', role: 'Eğitim uygulamaları geliştiren bir yazılım ajanısın.', goal: '5. sınıf fotosentez konusunu öğreten bir web uygulaması geliştir. Konu anlatımı, etkileşimli etkinlik ve üç soru olsun.', boundary: 'Önce plan ve dosya yapısı öner. Küçük adımlarla ilerle. Telefon ekranına uyum sağla. Öğrenci kişisel verilerini toplama. Her adımın sonunda test edeceğimiz işlemleri belirt.' },
  { label: 'Değerlendirme', role: 'Bir ölçme ve değerlendirme uzmanısın.', goal: '5. sınıf fotosentez kazanımına uygun 5 soruluk bir değerlendirme taslağı hazırla.', boundary: 'Her soru için doğru cevabı ve kısa açıklamasını ekle. Soruları kolaydan zora sırala. Cevapları öğretmen kontrolüne sun.' },
];

export default function PromptBuilder() {
  const [role, setRole] = useState(examples[0].role);
  const [goal, setGoal] = useState(examples[0].goal);
  const [boundary, setBoundary] = useState(examples[0].boundary);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const prompt = `[ROL]\n${role}\n\n[HEDEF]\n${goal}\n\n[BAĞLAM VE SINIRLAR]\n${boundary}\nYanıtı Türkçe ver.`;
  useEffect(() => { setCopied(false); setError(false); }, [prompt]);
  useEffect(() => { if (!copied) return; const timer = window.setTimeout(() => setCopied(false), 2000); return () => window.clearTimeout(timer); }, [copied]);
  function choose(index: number) { setRole(examples[index].role); setGoal(examples[index].goal); setBoundary(examples[index].boundary); }
  async function copy() { try { await navigator.clipboard.writeText(prompt); setCopied(true); } catch { setError(true); } }
  return <section className="prompt-workshop" id="rgb-interactive-tool">
    <div className="workshop-heading"><Sparkles size={22} /><div><h2>Bir görev tanımını birlikte hazırlayacağız.</h2><p>Bir örnek seçecek, dersimize göre düzenleyecek ve çıktıyı kontrol edeceğiz.</p></div></div>
    <div className="example-tabs">{examples.map((example, index) => <button key={example.label} onClick={() => choose(index)}>{example.label}</button>)}</div>
    <div className="workshop-grid"><div className="prompt-fields">
      <label htmlFor="input-role"><span>01 · ROL</span>Yapay zekâ hangi rolde çalışacak?<textarea id="input-role" value={role} onChange={event => setRole(event.target.value)} rows={2} /></label>
      <label htmlFor="input-goal"><span>02 · HEDEF</span>Ne üretmesini isteyeceğiz?<textarea id="input-goal" value={goal} onChange={event => setGoal(event.target.value)} rows={4} /></label>
      <label htmlFor="input-boundary"><span>03 · BAĞLAM VE SINIRLAR</span>Kimin için, hangi kurallarla hazırlayacağız?<textarea id="input-boundary" value={boundary} onChange={event => setBoundary(event.target.value)} rows={4} /></label>
    </div><div className="prompt-preview"><span className="eyebrow">HAZIR İSTEMİMİZ</span><pre>{prompt}</pre><button id="btn-copy-generated" className="button primary" onClick={copy}>{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Kopyalandı' : 'İstemi kopyala'}</button><p role="status">{error ? 'Kopyalama kullanılamıyor. Metni seçerek kopyalayabilirsiniz.' : 'ChatGPT, Gemini, Claude veya geliştirme ajanında deneyeceğiz. Çıktıyı değerlendirip talimatımızı geliştireceğiz.'}</p></div></div>
  </section>;
}
