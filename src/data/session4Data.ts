import { Topic } from '../types';

export const session4Categories = [
  { id: 'olp_ve_degerlendirme', title: 'Ölçme & Değerlendirme', desc: 'Yapay zeka ile yeni nesil ölçme araçları, rubrikler ve online sınav tasarımları.' },
  { id: 'ai_ajanlar_veri', title: 'Eğitim Ajanları & Analitik', desc: 'Özel öğrenme yoldaşları geliştirme ve eğitim analitiğinde veri görselleştirme.' },
  { id: 'deployment', title: 'Dağıtım & Canlıya Alma', desc: 'Geliştirilen eğitim projelerini Netlify ve Firebase ile dünyaya açma.' }
];

export const session4Topics: Topic[] = [
  {
    id: 'test-ve-rubrik-tasarimi',
    category: 'olp_ve_degerlendirme',
    title: 'Test ve Rubrik Oluşturma',
    shortDesc: 'MEB standartlarına ve Bloom taksonomisine uygun analitik değerlendirme ölçekleri (rubrik) ve soru havuzları.',
    icon: 'GraduationCap',
    content: {
      overview: 'Geleneksel sınavlar çoğunlukla ezberi ölçer. Yapay zeka sayesinde, öğrencilerin problem çözme yeteneğini ve kavramsal anlayışını ölçecek üst düzey testler ve bunları şeffafça puanlayacak detaylı rubrikler tasarlayabilirsiniz.',
      keyPoints: [
        'Bloom Taksonomisi Entegrasyonu: Bilgi seviyesinden sentez ve değerlendirme seviyesine kadar kademeli ve dengeli soru setleri saptamak.',
        'Analitik Rubrik Tasarımı: Projeler, performans ödevleri veya sunumlar için mükemmel, orta ve yetersiz kriterlerini puan aralıklarıyla belirleyen net tablolar üretmek.',
        'Açık Uçlu Soru Değerlendirmeleri: Öğretmenler için açık uçlu öğrenci yanıtlarını girilen bir değerlendirme kriteri (rubrik) dahilinde saniyeler içinde puanlayıp yapıcı geri bildirim sunan istem kalıpları.',
        'Zorluk ve Ayrımcılık Endeksi Planlaması: Test sorularının zorluk derecesini (kolay, orta, zor) dengeli dağıtacak pedagojik senaryolar oluşturmak.'
      ],
      tipsOrCode: `// Profesyonel Analitik Rubrik Hazırlama Promtu (RGB):
[ROLE] Sen eğitim müfredatları geliştiren kıdemli bir Ölçme ve Değerlendirme Uzmanısın.
[GOAL] 10. Sınıf Fizik dersi "Yenilenebilir Enerji Kaynakları Projesi" için 4 kriterli analitik bir rubrik (değerlendirme anahtarı) oluştur.
[BOUNDARY] Kriterler: "Araştırma Derinliği", "Sunum ve Anlatım", "Yaratıcı Çözüm Önerisi" ve "Zaman Yönetimi". Her kriter için "Mükemmel (4-5 Puan)", "Orta (2-3 Puan)" ve "Geliştirilmeli (0-1 Puan)" başarı adımlarını ve puan karşılıklarını içeren şık bir Markdown tablosu hazırla.`
    }
  },
  {
    id: 'online-sinav-hazirlama',
    category: 'olp_ve_degerlendirme',
    title: 'Online Sınav İçerikleri Hazırlama',
    shortDesc: 'Google Forms, Kahoot, Quizizz ve Conker AI uyumlu, doğrudan dışa aktarılabilir zengin sınav verilerinin hazırlanması.',
    icon: 'FileText',
    content: {
      overview: 'Sınavları dijital ortama aktarmak saatlerce sürebilir. Yapay zekadan alacağınız akıllı çıktılar sayesinde, Google Forms şablon şemalarını veya Excel XLS şablonlarını saniyeler içinde doldurabilir, sınavları anında yayına alabilirsiniz.',
      keyPoints: [
        'Google Forms Uyumlu Çıktılar: Yapay zekaya doğrudan Google Forms\'a yüklenebilecek formatta soru-cevap matrisi hazırlatmak.',
        'Eğlenceli Quiz Tasarımları (Kahoot / Quizizz): Belirli saniye limitleri ve esprili yanlış şıklar içeren hızlı tempo yarışma dosyaları oluşturma formülleri.',
        'Conker AI ile Otomatik Sınav: Konu başlığını söyleyip ders kitabını yükleyerek yapay zekaya anında dijital tarama testleri oluşturup öğrencilere QR kod ile dağıtma pratikleri.',
        'Çoktan Seçmeli Soru Kalitesi: "Hepsi", "Hiçbiri" gibi kaçamak şıklardan kaçınarak, öğrencilerin kavram yanılgılarını ortaya çıkaracak bilimsel çeldiriciler yazdırmak.'
      ],
      tipsOrCode: `// Google Forms CSV Formatında Soru Havuzu Üretici Prompt Örneği:
Sen bir Sınav Hazırlama Asistanısın. Aşağıda belirtilen konuya uygun olarak 5 adet çoktan seçmeli soru hazırla.
Konu: "Temel Çevre Bilinci ve Geri Dönüşüm"

Çıktıyı doğrudan kopyalanıp Excel/CSV olarak kaydedilebilecek şu formatta ver (İlk satır başlıklar olsun):
Soru Metni, A Şıkkı, B Şıkkı, C Şıkkı, D Şıkkı, Doğru Cevap, Açıklama`,
      links: [
        {
          title: 'Conker AI',
          description: 'Öğretmenler için yapay zekâ destekli quiz ve değerlendirme oluşturma platformu.',
          url: 'https://www.conker.ai'
        }
      ]
    }
  },
  {
    id: 'egitim-ai-ajanlari',
    category: 'ai_ajanlar_veri',
    title: 'Eğitim Amaçlı AI Ajanları Geliştirme',
    shortDesc: 'Eğlenceli kelime botları, Sokratik sorgulama asistanları ve kişiye özel akıllı rehber öğretmenlerin prototiplenmesi.',
    icon: 'Bot',
    content: {
      overview: 'Yapay zeka sadece soruları yanıtlayan kuru bir asistan olmak zorunda değildir. Eğitim amaçlı "Ajanlar" (AI Educational Agents) tasarlayarak öğrenciyi sıkmadan yönlendiren, sürekli dinleyen ve öğrenciye özel rehberlik eden akıllı oyun arkadaşları yaratabilirsiniz.',
      keyPoints: [
        'Sokratik Öğrenim Ajanları: Öğrenciye cevabı direkt söylemek yerine, doğru yöne bakmasını sağlayacak sorular sorarak keşif hissi uyandıran ajanlar.',
        'Yabancı Dil Pratik Ajanları: Seviyeye göre (örn: A2 veya C1) konuşan, telaffuz hatalarını nazikçe düzelten ve günlük hayattan rol canlandırma (roleplay) yapan diyalog ortakları.',
        'Matematik Çözüm Rehberi: Problemi tek seferde çözmek yerine adım adım açıklayan, her adımda "Buraya kadar anlaşıldı mı?" diye onay alan sabırlı ajan senaryoları.',
        'Akıllı Ders Çalışma Yoldaşları: Öğrencinin mola sürelerini, odaklanma durumunu takip edip ona uygun kişiselleştirilmiş motivasyon cümleleri fısıldayan ajan yapıları.'
      ],
      tipsOrCode: `// Akıllı Dil Pratik Ajanı (System Instructions) Örneği:
Sen "English Conversation Partner" adında sevecen bir AI Eğitim Ajanısın.
- Amacın: A2 düzeyindeki öğrencilerle basit İngilizce diyaloglar sürdürmek.
- Kuralların:
  1. Asla çok uzun paragraflar yazma (en fazla 2-3 cümle).
  2. Öğrenci bir gramer hatası yaparsa, cümlenin doğrusunu kibarca parantez içinde "(Correct: ...)" olarak belirt ve sohbeti devam ettirmek için yeni, eğlenceli bir soru sor.
  3. Günlük temalardan (yemek, spor, müzik) şaşma.`
    }
  },
  {
    id: 'veri-gorsellestirme-egitim',
    category: 'ai_ajanlar_veri',
    title: 'Eğitimde Veri Görselleştirme',
    shortDesc: 'Öğrenci karneleri, kazanım başarı matrisleri, sınıf trendleri ve akış şemalarının Mermaid.js ve Excel kullanarak şıkça raporlanması.',
    icon: 'Activity',
    content: {
      overview: 'Rakamlar yığın halindeyken bir anlam ifade etmez. Eğitim analitiğinde, yapay zekayı kullanarak karmaşık öğrenci gelişim tablolarından saniyeler içinde etkileyici grafikler, akış diyagramları ve visual çıktılar üretebilirsiniz.',
      keyPoints: [
        'Mermaid.js ile Akış Çizimleri: Ders planlarını, zor tıp-mühendislik süreçlerini veya konu hiyerarşilerini yapay zekaya kod olarak yazdırıp şık diyagramlara dönüştürmek.',
        'Kazanım Başarı Grafik Analizi: Sınıf başarı oranlarını yapay zekaya besleyerek, eksik kazanımlarla öğretmen ders öncelikli konularını eşleştiren ısı haritaları (heatmaps) türetmek.',
        'Dashboard (Gösterge Paneli) Tasarlama: Recharts veya Excel grafik şablonlarını yapay zekanın veri analizi yardımıyla besleyip görsel yönden zengin ve şeffaf başarı izleme ekranları kurgulamak.',
        'Kişiselleştirilmiş Gelişim Karnesi: Velilere sunulacak görsel trend analizlerini ve gelişim eğrisi yorumlarını otonom olarak hazırlatmak.'
      ],
      tipsOrCode: `// Recharts ile Grafik İçeriği için Basit JSON Veri Yapısı Üretimi:
const staticStudentData = [
  { "kazanim": "Okuma-Anlama", "sinifOrtalamasi": 78, "hedef": 85 },
  { "kazanim": "Yazılı Anlatım", "sinifOrtalamasi": 62, "hedef": 80 },
  { "kazanim": "Dil Bilgisi", "sinifOrtalamasi": 45, "hedef": 75 },
  { "kazanim": "Sözlü Sunum", "sinifOrtalamasi": 88, "hedef": 90 }
];`,
      links: [
        {
          title: 'Napkin AI',
          description: 'Metinleri otomatik olarak diyagram ve görsellere dönüştürür.',
          url: 'https://napkin.ai'
        }
      ]
    }
  },
  {
    id: 'proje-yayina-alma-netlify',
    category: 'deployment',
    title: 'Firebase ve Netlify ile Proje Yayına Alma',
    shortDesc: 'Geliştirilen React/Vite yapay zeka uygulamasının veritabanı ile Netlify ve Firebase Hosting platformlarında canlıya taşınması.',
    icon: 'Globe',
    content: {
      overview: 'Yazdığınız muhteşem bir eğitim uygulamasını kendi bilgisayarınızdan çıkarıp tüm öğrencilerinizin veya iş ortaklarınızın erişimine sunmak çok kolaydır. Netlify ve Firebase Hosting ile bu süreç saniyeler alır.',
      keyPoints: [
        'Netlify ile Hızlı Dağıtım: Sadece kod reposunu (Github) bağlayarak veya "netlify deploy" komutuyla projenizi tüm internete açma adımları.',
        'Firebase Hosting Entegrasyonu: Google altyapısı sayesinde yüksek hızlı, güvenli SSL destekli web barındırma ve veritabanı ile kusursuz canlı senkronizasyon.',
        'Environment Variables (Çevre Değişkenleri): GEMINI_API_KEY veya Firebase konfigürasyon anahtarlarını ön yüz kodlarında ifşa etmeden sunucu tarafına güvenle tanımlama becerisi.',
        'CI/CD Yapılandırması: Kodda yaptığınız her güncellemeyi reponuza gönderdiğiniz anda sitenizin sıfır kesintiyle anında canlıda güncellenmesi.'
      ],
      tipsOrCode: `// Firebase CLI ile Dağıtım (Deploy) Adımları:
1. Firebase araçlarını sisteme kurun:
   npm install -g firebase-tools

2. Terminalden oturum açın:
   firebase login

3. Projenizi Firebase ile ilişkilendirin:
   firebase init hosting

4. Projenizi derleyin ve yayına alın:
   npm run build
   firebase deploy

// Netlify CLI ile Saniyeler İçinde Dağıtım:
netlify login
netlify build
netlify deploy --prod`,
      links: [
        {
          title: 'GitHub',
          description: 'Kodlarınızı bulutta saklamak, versiyonlamak ve Netlify/Firebase entegrasyonuyla CI/CD otonom yayın akışlarınızı tetiklemek için kullanılan küresel geliştirici platformu.',
          url: 'https://github.com'
        },
        {
          title: 'Firebase',
          description: 'Google\'ın veritabanı (Firestore) ve yüksek başarılı web hosting (Firebase Hosting) platformunun ana sitesi.',
          url: 'https://firebase.google.com'
        },
        {
          title: 'Netlify',
          description: 'Frontend projelerinizi saniyeler içinde SSL destekli olarak canlı sunucuya aktaran, GitHub tetikleyicili barındırma ana portalı.',
          url: 'https://www.netlify.com'
        }
      ]
    }
  }
];
