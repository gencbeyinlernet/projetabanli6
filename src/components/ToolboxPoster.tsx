import { ArrowUpRight, Image } from 'lucide-react';
import { toolboxPoster } from '../data/brand';
import { trainingInfo } from '../data/curriculum';

export default function ToolboxPoster() {
  return <section className="poster-section" aria-labelledby="poster-title">
    <div className="poster-heading"><div><span className="eyebrow"><Image size={17} /> GÖRSEL KAYNAK</span><h2 id="poster-title">Eğitimde yapay zekâ araç kutusu</h2><p>Üretim, araştırma ve geliştirme araçlarına bir bakış.</p></div><a className="button subtle" href={toolboxPoster} target="_blank" rel="noopener noreferrer">Görseli tam boy aç <ArrowUpRight size={18} /><span className="sr-only">Yeni sekmede açılır</span></a></div>
    <figure><a href={toolboxPoster} target="_blank" rel="noopener noreferrer" aria-label="Yapay zekâ araç kutusu görselini tam boy aç, yeni sekme"><img src={toolboxPoster} alt="Eğitimde yapay zekâ araç kutusu: metin ve araştırma, yaratıcı medya, teknik geliştirme ve eğitsel yardımcı araçlar." width="1536" height="1024" loading="lazy" decoding="async" /></a><figcaption>Bu görsel genel bir araç haritasıdır. Eğitimde kullanacağımız güncel {trainingInfo.toolCount} araç, Araç kutusu bölümünde yer alır. Görseldeki araçlar ve ücret etiketleri güncel programdan farklı olabilir.</figcaption></figure>
  </section>;
}
