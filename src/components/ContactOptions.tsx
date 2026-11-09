import { useRef } from 'react';
import { ArrowUpRight, Mail, MessageCircle, X } from 'lucide-react';
import { trainingInfo } from '../data/curriculum';

export default function ContactOptions() {
  const dialog = useRef<HTMLDialogElement>(null);

  return <>
    <button type="button" className="button primary" aria-haspopup="dialog" aria-controls="contact-options" onClick={() => dialog.current?.showModal()}>
      Başvuru ve iletişim <ArrowUpRight size={18} />
    </button>
    <dialog id="contact-options" ref={dialog} className="contact-dialog" aria-labelledby="contact-title" aria-describedby="contact-description" onClick={event => {
      if (event.target !== event.currentTarget) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close();
    }}>
      <div className="contact-body">
        <div className="contact-heading"><span className="eyebrow">BİZE ULAŞIN</span><button type="button" className="contact-close" aria-label="İletişim seçeneklerini kapat" onClick={() => dialog.current?.close()} autoFocus><X size={21} /></button></div>
        <h2 id="contact-title">Nasıl iletişime geçmek istersiniz?</h2>
        <p id="contact-description">Başvuru ve eğitim sorularınız için size uygun yolu seçebilirsiniz.</p>
        <div className="contact-channels">
          <a className="contact-channel whatsapp-channel" href={trainingInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <span className="contact-icon"><MessageCircle size={24} /></span><span><strong>WhatsApp’tan yaz</strong><small>0507 110 00 53 · Hazır mesajla başlayın</small></span><ArrowUpRight size={19} /><span className="sr-only">Yeni sekmede açılır</span>
          </a>
          <a className="contact-channel email-channel" href={`mailto:${trainingInfo.email}`}>
            <span className="contact-icon"><Mail size={24} /></span><span><strong>E-posta gönder</strong><small>{trainingInfo.email}</small></span><ArrowUpRight size={19} />
          </a>
        </div>
      </div>
    </dialog>
  </>;
}
