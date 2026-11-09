import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Check, CheckCircle2, ChevronRight, Circle, Clock3, Copy, ExternalLink, Layers3, Monitor, Palette, Rocket, Search, Sparkles, Terminal, Timer } from 'lucide-react';
import Header from './components/Header';
import PromptBuilder from './components/PromptBuilder';
import BrainAssistant from './components/BrainAssistant';
import ContactOptions from './components/ContactOptions';
import ToolboxPoster from './components/ToolboxPoster';
import { institutionUrl, logo } from './data/brand';
import { learningTools, trainingDays, trainingInfo, toolAppearsOnDay, toolDayLabel, type LearningTool } from './data/curriculum';
import { additionalResources } from './data/resourcesData';

const dayIcons = { Sparkles, Terminal, Palette, Rocket };
const dayPreviewTools: Record<number, string[]> = {
  1: ['chatgpt', 'claude', 'notebooklm'],
  2: ['canva', 'canva-code', 'gamma'],
  3: ['codex', 'claude-code', 'cowork'],
  4: ['forms', 'github', 'netlify'],
};
const progressKey = 'projetabanli6-completed-v1';
const validLessonIds = new Set(trainingDays.flatMap(day => day.lessons.map(lesson => lesson.id)));

function ToolCard({ tool }: { tool: LearningTool }) {
  return <article className={`tool-card day-color-${tool.day}`}>
    <div className="tool-top"><span className="tool-logo">{tool.label}</span><span className="tool-day">{toolDayLabel(tool)}{tool.optional ? ' · Ek deneme' : ''}</span></div>
    <h3>{tool.name}</h3><p className="tool-description">{tool.description}</p>
    <div className="tool-use"><span>NE YAPACAĞIZ?</span><p>{tool.activity}</p></div>
    <div className="tool-use"><span>NEDEN KULLANACAĞIZ?</span><p>{tool.purpose}</p></div>
    <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-link">Aracı keşfet <ArrowUpRight size={17} /><span className="sr-only"> · {tool.name}, yeni sekmede açılır</span></a>
  </article>;
}

function CopyBlock({ text, isCode = false }: { text: string; isCode?: boolean }) {
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
    <div className="copy-heading"><span>{isCode ? 'Terminalde deneyeceğiz' : 'Birlikte deneyeceğimiz istem'}</span><button onClick={copy} aria-label="Örnek metni kopyala">{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Kopyalandı' : 'Kopyala'}</button></div>
    <pre>{text}</pre>{error && <p role="status">Kopyalama kullanılamıyor. Metni seçerek kopyalayabilirsiniz.</p>}
  </div>;
}

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [lessonId, setLessonId] = useState('');
  const [query, setQuery] = useState('');
  const [toolDay, setToolDay] = useState(0);
  const [completed, setCompleted] = useState<string[]>(() => {
    try {
      if (typeof window === 'undefined') return [];
      const saved = JSON.parse(localStorage.getItem(progressKey) || '[]');
      return Array.isArray(saved) ? [...new Set(saved.filter((id): id is string => typeof id === 'string' && validLessonIds.has(id)))] : [];
    } catch { return []; }
  });
  useEffect(() => {
    try { localStorage.setItem(progressKey, JSON.stringify(completed)); } catch { /* Progress works in memory if storage is unavailable. */ }
  }, [completed]);
  function navigate(tab: string) {
    setCurrentTab(tab); setLessonId(''); setQuery(''); setToolDay(0);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  function toggleLesson(id: string) { setCompleted(prev => prev.includes(id) ? prev.filter(value => value !== id) : [...prev, id]); }
  function selectLesson(id: string) {
    setLessonId(id);
    window.requestAnimationFrame(() => {
      const title = document.getElementById('lesson-title');
      title?.focus({ preventScroll: true });
      if (window.matchMedia('(max-width: 780px)').matches) {
        title?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    });
  }
  const day = trainingDays.find(item => currentTab === `session${item.id}`);
  const lesson = day?.lessons.find(item => item.id === lessonId) || day?.lessons[0];
  const filteredTools = learningTools.filter(tool => (toolDay === 0 || toolAppearsOnDay(tool, toolDay)) && `${tool.name} ${tool.description} ${tool.activity} ${tool.purpose}`.toLocaleLowerCase('tr').includes(query.toLocaleLowerCase('tr')));
  const lessonCount = trainingDays.reduce((sum, item) => sum + item.lessons.length, 0);
  const progress = Math.round(completed.length / lessonCount * 100);

  return <>
    <a href="#main-content" className="skip-link">İçeriğe geç</a>
    <Header currentTab={currentTab} onChangeTab={navigate} />
    <main id="main-content" className="page-shell">
      {currentTab === 'home' && <>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> 3 SAATLİK ONLINE EĞİTİM</div>
            <h1>Yapay zekâyla<br /><span>ders tasarlayacağız.</span></h1>
            <p>Yapay zekâya yalnızca soru sormayacağız.<br className="desktop-break" /> Birlikte planlayacak, üretecek ve sınıfımızda kullanacağımız projeler geliştireceğiz.</p>
            <div className="hero-actions"><button className="button primary" onClick={() => navigate('session1')}>Öğrenme yolculuğuna başla <ArrowUpRight size={19} /></button><a className="button subtle" href="#program">Programı incele <ArrowDown size={17} /></a></div>
            <div className="hero-meta"><span><span className="mini-avatars"><i>BT</i><i>TÖ</i></span> Burak Turgut & Türker Örün</span><span className="meta-divider" /><span>Canlı eğitim + kayıt</span></div>
          </div>
          <div className="hero-visual" aria-label="Fikir, üretim ve test aşamalarını gösteren proje örneği">
            <div className="visual-grid" /><div className="visual-orb" />
            <div className="floating-note"><Sparkles size={16} /> Öğretmen fikri. Yapay zekâ desteği.</div>
            <div className="project-window">
              <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>öğrenme-projemiz</span><Layers3 size={14} /></div>
              <div className="window-body"><div className="window-label">BUGÜN BİRLİKTE</div><h2>Bir öğrenme fikrini<br />hayata geçireceğiz.</h2><p>5. sınıf · Fen bilimleri · Fotosentez</p>
                <div className="project-task"><span className="task-icon"><Check size={17} /></span><div>Problemi tanımlayacağız<small>Ne öğrenmelerini istiyoruz?</small></div><span className="task-step">01</span></div>
                <div className="project-task active"><span className="task-icon"><Terminal size={17} /></span><div>Ajanla geliştireceğiz<small>Plan → Dosyalar → Uygulama</small></div><span className="task-step">02</span></div>
                <div className="project-task"><span className="task-icon"><CheckCircle2 size={17} /></span><div>Test edip iyileştireceğiz<small>Son karar her zaman bizde.</small></div><span className="task-step">03</span></div>
                <div className="window-footer"><span><i /> Öğretmen yönlendirir. Yapay zekâ üretir.</span><ArrowUpRight size={17} /></div>
              </div>
            </div>
            <div className="floating-output"><span><Rocket size={20} /></span><div>Eğitimin çıktısı<small>Çalışan bir prototip</small></div><CheckCircle2 size={19} /></div>
            <span className="visual-caption">FİKİR → PLAN → ÜRETİM → KONTROL</span>
          </div>
        </section>
        <section className="event-overview" aria-labelledby="event-title"><h2 id="event-title">{trainingInfo.title}</h2><div className="event-facts"><div><Timer size={21} /><span>PROGRAM<strong>{trainingInfo.schedule}</strong></span></div><div><Clock3 size={21} /><span>SÜRE<strong>{trainingInfo.duration}</strong></span></div><div><Monitor size={21} /><span>KATILIM<strong>Online · Canlı + kayıt</strong></span></div><div><Layers3 size={21} /><span>İÇERİK<strong>{trainingInfo.toolCount} araç · Proje tabanlı</strong></span></div></div></section>
        <section className="principles" aria-label="Eğitim yaklaşımımız"><div><BookOpen size={21} /><span>Kendi dersimizden başlayacağız</span></div><div><Layers3 size={21} /><span>Adım adım üreteceğiz</span></div><div><CheckCircle2 size={21} /><span>Öğretmen kontrolüyle ilerleyeceğiz</span></div></section>
        <section className="program-section" id="program">
          <div className="section-heading"><div><span className="eyebrow">ÖĞRENME YOLCULUĞUMUZ</span><h2>Üç saat. Dört bölüm. Birlikte üreteceğimiz bir proje.</h2><p>45 dakikalık her bölüm bir önceki adımı geliştirecek; öğrendiğimizi bir ürüne dönüştüreceğiz.</p></div><span className="section-number">01 — 04</span></div>
          <div className="days-grid">{trainingDays.map(item => { const Icon = dayIcons[item.icon]; const count = item.lessons.filter(l => completed.includes(l.id)).length; return <button key={item.id} className={`day-card day-color-${item.id}`} onClick={() => navigate(`session${item.id}`)}>
            <div className="day-card-top"><span className="day-icon"><Icon size={22} /></span><span>{String(item.id).padStart(2, '0')} / BÖLÜM</span></div><span className="day-date">{item.timeRange} · {item.duration}</span><p className="day-subtitle">{item.subtitle}</p><h3>{item.title}</h3><p>{item.description}</p><div className="day-tool-chips">{learningTools.filter(tool => (dayPreviewTools[item.id] || []).includes(tool.id)).map(tool => <span key={tool.id}>{tool.name}</span>)}</div><div className="day-card-bottom"><span>{count ? `${count}/${item.lessons.length} adım tamamlandı` : `${item.lessons.length} uygulama adımı`}</span><ArrowUpRight size={20} /></div>
          </button>; })}</div>
        </section>
        <section className="tools-teaser"><div><span className="eyebrow">DOĞRU İŞ İÇİN DOĞRU ARAÇ</span><h2>Araçları ezberlemeyeceğiz.<br />Ne işe yaradıklarını öğrenerek kullanacağız.</h2><p>{trainingInfo.toolCount} farklı araç; hangi bölümde, hangi amaçla kullanacağımızı birlikte keşfedeceğiz.</p><button className="button dark" onClick={() => navigate('tools')}>Araç kutusunu aç <ArrowRight size={18} /></button><button className="poster-shortcut" onClick={() => navigate('resources')}>Görsel araç haritasını incele <ArrowUpRight size={16} /></button></div><div className="tool-cloud">{['codex', 'claude', 'claude-code', 'canva', 'gamma', 'netlify'].map(id => { const tool = learningTools.find(t => t.id === id)!; return <a key={id} href={tool.url} target="_blank" rel="noopener noreferrer" className={`cloud-tool day-color-${tool.day}`}><span className="tool-logo">{tool.label}</span><span>{tool.name}<small>{toolDayLabel(tool)}</small></span><ArrowUpRight size={16} /><span className="sr-only">Yeni sekmede açılır</span></a>; })}</div></section>
        <section className="closing-note"><span className="note-icon"><Sparkles size={24} /></span><div><h3>Profesyonel yazılımcı olmamız gerekmiyor.</h3><p>Problemi tanımlayacağız, doğru görev vereceğiz ve ortaya çıkan ürünü kontrol edeceğiz.</p></div><button onClick={() => navigate('prompt')}>İlk istemimizi yazalım <ArrowRight size={18} /></button></section>
        <section className="training-details"><div className="audience-copy"><span className="eyebrow">KİMLER İÇİN?</span><h2>Kendi dersinde üreten tüm öğretmenler için.</h2><p>{trainingInfo.audience} katılabilir. Temel dijital becerilerle başlayacak; üç saatte içerik üretimi, etkileşimli materyal, kendi asistanımızı tasarlama ve proje yayınlama deneyimi kazanacağız.</p></div><div className="trainer-list"><span className="eyebrow">EĞİTMENLERİMİZ</span>{trainingInfo.trainers.map(trainer => <article key={trainer.name} className="trainer-card"><span>{trainer.initials}</span><div><h3>{trainer.name}</h3><p>{trainer.role}</p></div></article>)}</div></section>
        <section className="community-banner"><img src={logo} alt="GencbeyinlerNet logosu" width="900" height="900" loading="lazy" /><div><span className="eyebrow">GENCBEYİNLERNET İLE BİRLİKTE</span><h2>Üreten öğretmenlerin buluşma noktası.</h2><p>Eğitimlerimiz, paylaşımlarımız ve yeni duyurularımız için kurum sitemizi ziyaret edin.</p></div><a className="button institution-link" href={institutionUrl} target="_blank" rel="noopener noreferrer">www.gencbeyinler.net <ArrowUpRight size={18} /><span className="sr-only">Yeni sekmede açılır</span></a></section>
        <section className="application-banner"><div><span className="eyebrow">3 SAATLİK ONLINE EĞİTİM · KONTENJAN SINIRLI</span><h2>Yapay zekâyla üreten öğretmenler topluluğuna katılın.</h2><p>Başvuru ve eğitim sorularınız için WhatsApp veya e-postayı seçebilirsiniz.</p></div><ContactOptions /></section>
      </>}

      {day && lesson && <>
        <div className="breadcrumb"><button onClick={() => navigate('home')}>Genel bakış</button><ChevronRight size={14} /><span>{day.id}. Bölüm</span></div>
        <section className={`day-intro day-color-${day.id}`}><div><span className="eyebrow">{String(day.id).padStart(2, '0')} / BÖLÜM · {day.timeRange} · {day.duration}</span><h1>{day.title}</h1><p>{day.description}</p></div><div className="day-outcome"><Rocket size={21} /><span>BÖLÜMÜN SONUNDA</span><p>{day.outcome}</p></div></section>
        <div className="lesson-layout"><aside className="lesson-sidebar"><div className="sidebar-title">Bölümün adımları <span>{day.lessons.length}</span></div><div className="progress-track"><i style={{ width: `${day.lessons.filter(item => completed.includes(item.id)).length / day.lessons.length * 100}%` }} /></div>
          <nav aria-label={`${day.id}. bölümün konuları`}>{day.lessons.map((item, index) => <button key={item.id} className={lesson.id === item.id ? 'selected' : ''} onClick={() => selectLesson(item.id)} aria-current={lesson.id === item.id ? 'step' : undefined}><span className="lesson-number">{completed.includes(item.id) ? <Check size={16} /> : String(index + 1).padStart(2, '0')}</span><span>{item.title}</span><ChevronRight size={15} /></button>)}</nav>
          <a href="#day-tools" className="sidebar-tools">Bu bölümün araçları <ArrowDown size={16} /></a></aside>
          <article className="lesson-content"><div className="lesson-kicker"><span>ADIM {String(day.lessons.indexOf(lesson) + 1).padStart(2, '0')}</span><span>{lesson.minutes} dk · Birlikte uygulayacağız</span></div><h2 id="lesson-title" tabIndex={-1}>{lesson.title}</h2><p className="lesson-description">{lesson.description}</p><h3>Nasıl ilerleyeceğiz?</h3><ol className="lesson-steps">{lesson.steps.map((step, i) => <li key={step}><span>{i + 1}</span><p>{step}</p></li>)}</ol>
            {lesson.prompt && <CopyBlock text={lesson.prompt} />}{lesson.code && <CopyBlock text={lesson.code} isCode />}
            <div className="lesson-output"><CheckCircle2 size={21} /><div><span>ORTAYA NE ÇIKARACAĞIZ?</span><p>{lesson.output}</p></div></div>
            <div className="lesson-actions"><button className={`button ${completed.includes(lesson.id) ? 'completed-button' : 'primary'}`} aria-pressed={completed.includes(lesson.id)} onClick={() => toggleLesson(lesson.id)}>{completed.includes(lesson.id) ? <CheckCircle2 size={18} /> : <Circle size={18} />}{completed.includes(lesson.id) ? 'Bu adımı tamamladım' : 'Tamamlandı olarak işaretle'}</button>{day.lessons.indexOf(lesson) < day.lessons.length - 1 ? <button className="button subtle" onClick={() => selectLesson(day.lessons[day.lessons.indexOf(lesson) + 1].id)}>Sonraki adım <ArrowRight size={17} /></button> : day.id < trainingDays.length && <button className="button subtle" onClick={() => navigate(`session${day.id + 1}`)}>{day.id + 1}. bölüme geç <ArrowRight size={17} /></button>}</div>
          </article></div>
        <section id="day-tools" className="day-tools-section"><div className="section-heading"><div><span className="eyebrow">{day.id}. BÖLÜMÜN ARAÇ KUTUSU</span><h2>Bu bölümde bu araçlarla çalışacağız.</h2><p>Önce temel araçlarla ilerleyeceğiz. “Ek deneme” araçlarıyla farklı yöntemleri karşılaştıracağız.</p></div></div><div className="tool-grid">{learningTools.filter(tool => toolAppearsOnDay(tool, day.id)).map(tool => <ToolCard key={tool.id} tool={tool} />)}</div></section>
      </>}

      {currentTab === 'tools' && <>
        <div className="page-intro"><span className="eyebrow">EĞİTİMİN {trainingInfo.toolCount} ARAÇLIK KUTUSU</span><h1>Aracı değil, amacını öğrenerek başlayacağız.</h1><p>Her araç için basit bir açıklama, yapacağımız çalışma ve eğitimde kullanma nedenimiz. Bir aracı birden fazla bölümde, farklı amaçlarla kullanabileceğiz.</p></div>
        <div className="tool-filters"><div className="filter-tabs" aria-label="Eğitim bölümüne göre filtrele">{[0, 1, 2, 3, 4].map(id => <button key={id} className={toolDay === id ? 'active' : ''} aria-pressed={toolDay === id} onClick={() => setToolDay(id)}>{id ? `${id}. Bölüm` : 'Tüm araçlar'}</button>)}</div><label className="search-input"><Search size={18} /><input type="search" aria-label="Araç veya kullanım amacı ara" placeholder="Araç veya amaç ara…" value={query} onChange={event => setQuery(event.target.value)} /></label></div>
        <p className="result-count" role="status">{filteredTools.length} araç · Ek deneme araçları isteğe bağlıdır.</p><div className="tool-grid">{filteredTools.map(tool => <ToolCard key={tool.id} tool={tool} />)}</div>{filteredTools.length === 0 && <div className="empty-state"><Search size={28} /><h2>Bu aramada bir araç bulamadık.</h2><p>Başka bir kelime veya eğitim bölümü deneyebilirsiniz.</p><button className="button subtle" onClick={() => { setQuery(''); setToolDay(0); }}>Filtreleri temizle</button></div>}
      </>}
      {currentTab === 'resources' && <>
        <div className="page-intro"><span className="eyebrow">OKUYACAĞIZ. KARŞILAŞTIRACAĞIZ. DOĞRULAYACAĞIZ.</span><h1>Sağlam bir kaynakla başlayacağız.</h1><p>İçeriklerimizi hazırlarken etik ilkeleri, resmî rehberleri ve araştırma kaynaklarını kullanacağız.</p></div><ToolboxPoster /><div className="resource-grid">{additionalResources.map((resource, i) => <a key={resource.id} href={resource.url} target="_blank" rel="noopener noreferrer" className="resource-card"><span className="resource-index">{String(i + 1).padStart(2, '0')}</span><div><h2>{resource.title.replace(/^\d+\. /, '')}</h2><p>{resource.description}</p><span>Kaynağı incele <ExternalLink size={14} /><span className="sr-only">Yeni sekmede açılır</span></span></div><ArrowUpRight size={20} /></a>)}</div>
      </>}
      {currentTab === 'prompt' && <><div className="page-intro"><span className="eyebrow">İSTEM ATÖLYESİ</span><h1>İyi bir ürün, açık bir görevle başlayacak.</h1><p>Rolü, hedefi ve sınırları belirleyecek; hazırladığımız istemi seçtiğimiz araçta deneyip geliştireceğiz.</p></div><PromptBuilder /></>}
    </main>
    <footer className="site-footer"><div className="footer-inner"><div><a className="footer-brand" href={institutionUrl} target="_blank" rel="noopener noreferrer"><img src={logo} alt="" width="900" height="900" loading="lazy" /> GencbeyinlerNet <ArrowUpRight size={16} /><span className="sr-only">Kurum sitesi, yeni sekmede açılır</span></a><p>Yapay zekâyla üreten öğretmenler için.</p></div><div className="footer-progress"><span>Öğrenme yolculuğum <b>{progress}%</b></span><div className="progress-track"><i style={{ width: `${progress}%` }} /></div><small>İlerleme bu tarayıcıda saklanır.</small></div><span className="footer-credit">Birlikte planlayacağız.<br />Birlikte üreteceğiz.</span></div></footer>
    {import.meta.env.MODE !== 'pages' && <BrainAssistant />}
  </>;
}
