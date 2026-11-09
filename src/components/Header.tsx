import { Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { trainingInfo } from '../data/curriculum';
import { institutionUrl, logo } from '../data/brand';

interface HeaderProps { currentTab: string; onChangeTab: (tab: string) => void; }

export default function Header({ currentTab, onChangeTab }: HeaderProps) {
  const mobileNav = useRef<HTMLElement>(null);
  useEffect(() => {
    const nav = mobileNav.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="page"]');
    if (nav && active) nav.scrollTo({ left: active.offsetLeft - nav.clientWidth / 2 + active.clientWidth / 2, behavior: 'instant' });
  }, [currentTab]);
  const items = [
    { id: 'home', label: 'Genel bakış' },
    ...[1, 2, 3, 4].map(day => ({ id: `session${day}`, label: `${day}. Bölüm` })),
    { id: 'tools', label: 'Araç kutusu' },
    { id: 'resources', label: 'Kaynaklar' },
  ];
  return <header className="site-header">
    <div className="header-inner">
      <div className="brand">
        <a className="brand-mark" href={institutionUrl} target="_blank" rel="noopener noreferrer" aria-label="GencbeyinlerNet web sitesi, yeni sekme"><img src={logo} alt="GencbeyinlerNet logosu" width="900" height="900" /></a>
        <button className="brand-home" onClick={() => onChangeTab('home')} aria-label={`${trainingInfo.title} ana sayfa`}>GencbeyinlerNet<span className="brand-caption">PROJE TABANLI YAPAY ZEKA EĞİTİMİ</span><span className="brand-month">3 SAATLİK EĞİTİM</span></button>
      </div>
      <nav aria-label="Ana gezinme" className="desktop-nav">
        {items.map(item => <button key={item.id} id={`nav-${item.id}`} aria-current={currentTab === item.id ? 'page' : undefined} onClick={() => onChangeTab(item.id)}>{item.label}</button>)}
      </nav>
      <button className="header-action" title="İstem atölyesi" onClick={() => onChangeTab('prompt')}>İstem atölyesi <Sparkles size={16} /></button>
    </div>
    <nav ref={mobileNav} className="mobile-nav" aria-label="Mobil gezinme">
      {items.map(item => <button key={item.id} aria-current={currentTab === item.id ? 'page' : undefined} onClick={() => onChangeTab(item.id)}>{item.label}</button>)}
    </nav>
  </header>;
}
