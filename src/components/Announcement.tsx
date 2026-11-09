import { ArrowDown, BookOpen, CreditCard, Laptop, Lock, Mail, Megaphone, Target, Users } from 'lucide-react';
import { trainingInfo } from '../data/curriculum';
import { isPlainLeftClick } from '../links';

export default function Announcement() {
  return <section className="announcement" aria-labelledby="announcement-title">
    <div className="announcement-head">
      <span className="announcement-icon"><Megaphone size={24} /></span>
      <div>
        <span className="eyebrow">ÖNEMLİ BİLGİLENDİRME</span>
        <h2 id="announcement-title">Uygulamalı eğitim</h2>
        <p>Değerli Katılımcılarımız, eğitimimiz <strong><time dateTime={trainingInfo.date}>{trainingInfo.dateLabel}, saat {trainingInfo.startTime}</time></strong>’de başlayacak; yaklaşık <strong>2-3 saat</strong> sürecek olup uygulamalı olarak gerçekleştirilecektir.</p>
      </div>
    </div>
    <h3>Eğitim öncesi hatırlatmalar</h3>
    <ul className="announcement-list">
      <li><Laptop size={20} /><p>Eğitimimiz uygulamalı olacağı için <strong>bilgisayar üzerinden</strong> katılım sağlamanız önerilir.</p></li>
      <li><CreditCard size={20} /><p>Eğitimde <strong>ChatGPT ve Claude’un ücretli sürümlerini</strong> kullanacağız. Dileyen katılımcılarımız bu üyelikleri <strong>eğitimden önce satın alabilir.</strong></p></li>
      <li><Mail size={20} /><p>Uygulamalar sırasında herhangi bir aksaklık yaşamamanız için <strong>Gmail (Google) hesabınızın açık ve kullanıma hazır olması</strong> tavsiye edilir.</p></li>
      <li><Users size={20} /><p>Eğitim kontenjanımız <strong>{trainingInfo.participantLimit} kişiyle sınırlıdır.</strong> Katılımda sorun yaşamamak için eğitim başlamadan önce Zoom bağlantısına giriş yapmanız önerilir.</p></li>
    </ul>
    <div className="announcement-grid">
      <div className="announcement-card">
        <BookOpen size={21} /><span>EĞİTİM KILAVUZUMUZ</span>
        <p>Eğitim öncesinde hazırladığımız uygulama kılavuzumuzu inceleyerek ele alacağımız konulara ve uygulamalara önceden göz atabilirsiniz.</p>
        <a href={trainingInfo.resourcesUrl} onClick={event => {
          if (!isPlainLeftClick(event)) return;
          event.preventDefault();
          document.getElementById('program')?.scrollIntoView({ block: 'start' });
        }}>{trainingInfo.resourcesUrl.replace(/^https:\/\//, '').replace(/\/$/, '')} <ArrowDown size={15} /></a>
      </div>
      <div className="announcement-card private">
        <Lock size={21} /><span>ZOOM EĞİTİM BAĞLANTISI</span>
        <p>Zoom bağlantısı, toplantı kimliği ve parola katılımcılarımıza özel olarak iletilir. <strong>Lütfen bu bilgileri üçüncü kişilerle paylaşmayınız.</strong></p>
      </div>
    </div>
    <div className="announcement-footer">
      <Target size={22} />
      <p>Eğitim süresince yalnızca izleyen değil, uygulamaları bizzat gerçekleştiren katılımcılar olmanızı hedefliyoruz. <strong>Tüm katılımcılarımıza verimli, keyifli ve başarılı bir eğitim diliyoruz!</strong></p>
      <span>gencbeyinlernet</span>
    </div>
  </section>;
}
