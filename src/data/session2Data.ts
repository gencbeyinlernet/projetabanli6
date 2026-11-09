import { Topic } from '../types';

export const session2Categories = [
  { id: 'gorsel_ve_sablon', title: 'Görsel & Şablon Tasarımı', desc: 'Yapay zeka ile sanatsal görsel çıktılar alma ve kurumsal şablon mimarileri.' },
  { id: 'video_ve_ses', title: 'Eğitim Videoları & AI Seslendirme', desc: 'Video senaryoları, ses klonlama ve profesyonel seslendirme teknikleri.' },
  { id: 'akademik_ve_veri', title: 'Akademik Araştırma & Veri Analizi', desc: 'Akademik araştırma araçları, PDF, Word, Excel analizi, müfredat ve veri analitiği.' },
  { id: 'asistan_ve_ajan', title: 'Öğretmen Asistanı & Ajan Sistemleri', desc: 'Kişiselleştirilmiş AI öğretmen asistanı geliştirme, akıllı arayüzler ve ajan tasarımları.' },
  { id: 'icerik_zenginlestirme', title: 'İçerik Zenginleştirme Yöntemleri', desc: 'İçerikleri sınavlar, vaka çalışmaları ve etkileşimli yapılarla zenginleştirme.' }
];

export const session2Topics: Topic[] = [
  {
    id: 'gorsel-tasarim',
    category: 'gorsel_ve_sablon',
    title: 'Yapay Zekâ ile Görsel Tasarım Teknolojileri',
    shortDesc: 'Midjourney, DALL-E 3 ve Stable Diffusion ile sanatsal görsel tasarımı ve kompozisyon kuralları.',
    icon: 'Sparkles',
    content: {
      overview: 'Yapay zeka ile görsel tasarım dünyası, sadece hayal ettiğiniz şeyi yazmaktan çok daha fazlasıdır. Doğru kamera açısı, ışıklandırma, renk paleti ve özel stil parametreleri ile projelerinize kurumsal düzeyde ve büyüleyici görseller kazandırabilirsiniz.',
      keyPoints: [
        'Görsel İstem (Prompt) Anatomisi: Ana obje, arka plan, ışıklandırma türü (stüdyo ışığı, altın saat, hacimsel ışık), kamera lensi (35mm f/1.8, makro) ve sanatsal akım (minimalist, 3D render, cyberpunk) bileşenleri.',
        'Midjourney Parametreleri: Boyut oranını değiştiren "--ar" (örn: --ar 16:9), yapay zekanın serbest stil derecesini ayarlayan "--stylize" (örn: --s 250) ve varyasyonları kontrol eden "--chaos" kullanımı.',
        'DALL-E 3 & Metin İstikrarı: ChatGPT entegrasyonu sayesinde promptu zenginleştirme ve görsel üzerine Türkçe de dahil olmak üzere kusursuz yazılar (text) entegre etme taktikleri.',
        'Stable Diffusion & ControlNet: Var olan bir eskizin, pozun veya mimari planın ana hatlarını kaybetmeden yapay zekayla yeni dokularla giydirilmesi ve render alınması.'
      ],
      tipsOrCode: `// Profesyonel Midjourney Görsel Prompt Örneği:
/imagine prompt: A high-tech futuristic AI classroom of 2026, students interacting with glowing holographic AI interfaces, hyper-detailed UI elements, cinematically lit with blue and orange accent lights, shot on 35mm lens, photorealistic, Unreal Engine 5 render, highly detailed --ar 16:9 --v 6.0 --s 300

// DALL-E 3 ile Üzeri Yazılı İllüstrasyon Promptu:
A minimal computer screen with the bold text "YAPAY ZEKA EĞİTİMİ" written clearly on the screen in white modern typography. Corporate flat design, deep blue background, tech elements around, high quality.`,
      links: [
        {
          title: 'Canva AI',
          description: 'Hızlı grafik tasarım, şık sunum, web sitesi kapakları ve afişler üreten yapay zekâ entegreli tasarım motoru.',
          url: 'https://www.canva.com'
        },
        {
          title: 'Adobe Firefly',
          description: 'Telif endişesi olmadan, yaratıcı projeleriniz için yüksek kaliteli güvenli görseller ve vektörler üreten üretken zekâ platformu.',
          url: 'https://firefly.adobe.com'
        }
      ]
    }
  },
  {
    id: 'sablon-uretimi',
    category: 'gorsel_ve_sablon',
    title: 'Yapay Zeka ile Profesyonel Şablon (Template) Üretimi',
    shortDesc: 'Şirketler, projelere ait çıktı taslakları, sunum planları ve tekrarlanan belgeler için evrensel formüller.',
    icon: 'Layers',
    content: {
      overview: 'Sürekli tekrar eden veri tabloları, e-posta taslakları, raporlama formatları veya eğitim kurallarını her defasında sıfırdan yazmak vakit kaybıdır. Yapay zekayı bir "şablon makinesi" olarak kullanarak dakikalar süren işleri saniyelere indirebilirsiniz.',
      keyPoints: [
        'Yapılandırılmış Çıktı Düzeni: Yapay zekadan Markdown (.md) veya XML formatlarında çıktılar isteyerek diğer sistemlerinize hatasız aktarılmasını sağlama.',
        'Değişken Entegrasyonu: Prompt içerisine [AlanAdı], [ZorlukSeviyesi], [HedefKitle] gibi placeholder\'lar (yer tutucular) entegre ederek tek bir prompttan sınırsız sürüm türetme.',
        'Dinamik Kurumsal Şablonlar: Haftalık toplantı tutanakları, performans değerlendirme formları ve iş analiz tabloları için yapay zekaya dondurulmuş formatlar tanımlama.',
        'Kapsam ve Hiyerarşi Tasarımı: Yapay zekanın tasarımlar yaparken başlık düzeylerine (H1, H2, H3) ve girintilere tam sadakat göstermesini zorunlu kılmak.'
      ],
      tipsOrCode: `// Değişken Entegrasyonlu Proje Şablon Promptu Örneği:
Sen kurumsal bir Proje Yöneticisisin. Aşağıda verilen değişkenlere göre bir "Proje Başlatma Belgesi" hazırlayacaksın.

[DEĞİŞKENLER]
- Proje Adı: [PROJE_ADI]
- Sektör: [SEKTOR]
- Bütçe Sınırı: [BUTCE]
- Kritik Teslimat Tarihi: [TARIH]

[ŞABLON BİÇİMİ]
# Proje Başlatma Belgesi: [PROJE_ADI]
## 1. Yönetici Özeti
-... (bu taslak üzerine doldurulacaktır)`,
      links: [
        {
          title: 'Gamma App',
          description: 'Yapay zekâ ile sunum, doküman ve web sayfası hazırlama aracı.',
          url: 'https://gamma.app'
        }
      ]
    }
  },
  {
    id: 'egitim-videolari',
    category: 'video_ve_ses',
    title: 'Yapay Zeka Destekli Eğitim Videoları Hazırlama',
    shortDesc: 'Senaryo yazımından saniye bazlı sahne planına, Gamma ve HeyGen araçlarıyla hızlı sunum ders videoları tasarlamak.',
    icon: 'BookOpen',
    content: {
      overview: 'Eğitim videoları hazırlarken en zorlu kısımlar olan senaryo çekirdeğini yazma, görsel materyal arama ve video kurgusu süreçlerini yapay zeka araçları ile otomatize edebilirsiniz.',
      keyPoints: [
        'Otomatik Sahne ve Senaryo Planı: Yapay zekaya video süresini (örn: 5 dakika) verip konuşmacı için tam kelime sayısı ve görsel asistan önerileri içeren akış şemaları yazdırma.',
        'Ölçekli Altyazı ve Kurgu (CapCut AI / Premiere Pro): Konuşmadaki sessiz ve hatalı duraklamaları otomatik kesip atan, eş zamanlı şık altyazılar hazırlayan yapay zeka modüllerini entegre etmek.',
        'AI Avatarlar ve HeyGen: Fiziksel bir stüdyoya veya kameraya ihtiyaç duymadan, metni doğrudan seslendirip anlatan yapay zeka tabanlı dijital eğitmenler kurgulamak.',
        'Hızlı Ders Sunumları (Gamma.app): Sadece konuyu söyleyerek saniyeler içinde interaktif, modern görünümlü döküman ve slaytları otomatik tasratıp video altlığı olarak kullanmak.'
      ],
      tipsOrCode: `// Video Senaryo Hazırlama için RGB Promptu:
[ROLE] Sen eğitim teknolojileri alanında uzman bir Video Yapımcısısın (Video Producer).
[GOAL] "Yazılımcılar için Temel Terminal Komutları" konulu 3 dakikalık bir eğitim videosu için saniye bazlı bir "Senaryo ve Görsel Akış Şablonu" hazırla.
[BOUNDARY] Çıktıyı şu sütunlardan oluşan bir tablo formatında sun: "Süre (Sn)", "Konuşma Metni", "Ekranda Görünecek Görsel/Kod Örneği". Kelime sayısını 3 dakikalık konuşma temposuna sığacak şekilde optimize et.`,
      links: [
        {
          title: 'Gamma App',
          description: 'Yapay zekâ ile sunum, doküman ve web sayfası hazırlama aracı.',
          url: 'https://gamma.app'
        }
      ]
    }
  },
  {
    id: 'ai-seslendirme',
    category: 'video_ve_ses',
    title: 'Profesyonel AI Seslendirme Teknikleri',
    shortDesc: 'ElevenLabs ve modern TTS motorları ile kusursuz tonlama, duygu yönetimi ve ses klonlama pratikleri.',
    icon: 'Cpu',
    content: {
      overview: 'Yapay zeka sesleri artık robotik tınılardan tamamen uzaklaşmış durumdadır. Ses klonlama ve gelişmiş ses parametreleri (Voice Settings) sayesinde derslerinizi ve projelerinizi stüdyo kalitesinde seslendirebilirsiniz.',
      keyPoints: [
        'Ses Klonlama (Voice Cloning): Yalnızca 1-2 dakikalık temiz ve berrak bir ses kaydı yükleyerek kendi sesinizi yapay zekaya kusursuzca eğitip klonlama.',
        'Duygu ve Tonlama Parametreleri: ElevenLabs arayüzündeki Stability (kararlılık), Clarity (berraklık) ve Style Exaggeration (tarz abartısı) kaydırıcıları ile heyecanlı, kurumsal veya fısıltılı tonlar elde etme.',
        'Yapay Zekaya Tonlama İpuçları Verme: Yazıda ünlemler, üç noktalar (...) veya parantez içindeki açıklamalar ile yapay zekanın nefes alma aralıklarını ve tonlama kavislerini yönetmek.',
        'Yapay Zeka Ses Dublajı (AI Voice Translation): Ses renginizi, yaşınızı ve tınınızı aynen muhafaza ederek Türkçe kayıtlarınızı saniyeler içinde İngilizce, Almanca veya Arapçaya dublaj yaptırmak.'
      ],
      tipsOrCode: `// ElevenLabs API / Kod Temelli Seslendirme Yapısı (TypeScript):
import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient({ apiKey: process.env.ELEVENLABS_API_KEY });

const audio = await client.generate({
  voice: "Burak_Turgut_Klon_Ses_ID",
  text: "Merhaba arkadaşlar. Bugün yapay zekayla seslendirme tekniklerini uygulamalı olarak öğreneceğiz...",
  model_id: "eleven_multilingual_v2",
  voice_settings: {
    stability: 0.75,
    similarity_boost: 0.85,
    style: 0.15
  }
});`,
      links: [
        {
          title: 'ElevenLabs',
          description: 'Sektörün en başarılı doğal tonlama, duygu yönetimi ve yüksek başarılı Türkçe ses klonlama sağlayan TTS aracı.',
          url: 'https://elevenlabs.io'
        }
      ]
    }
  },
  {
    id: 'akademik-arastirma',
    category: 'akademik_ve_veri',
    title: 'Akademik Araştırma Araçları & Kaynakları',
    shortDesc: 'Google Scholar, Scite AI, Jenni AI, STORM, Mendeley ve Overleaf ile dijital akademik literatür araştırmaları.',
    icon: 'BookOpen',
    content: {
      overview: 'Akademik düzeyde araştırma yaparken, geleneksel arama yöntemleri yerine akıllı semantik arama, atıf doğrulamaları ve otomatik makale özetleme sistemlerini kullanmak literatür tarama süreçlerini haftalardan saatlere indirir.',
      keyPoints: [
        'Doğrulanmış Bilimsel Sentezler (Consensus & Scite AI): Basit anahtar kelime aramaları yerine doğrudan araştırma sorusunu sorarak bilimsel makaleler doğrultusunda analiz almak.',
        'Atıf İlişkileri Analitiği (Scite AI): İncelediğiniz makalelerin diğer bilim insanları tarafından desteklendiğini veya çürütüldüğünü gösteren atıf veri seti.',
        'Literatür Haritalama ve Düzen (Mendeley): İlgili bir makaleyi temel alarak ortak atıf ağları oluşturup, referansları ve bibliyografyaları kolayca yönetmek.',
        'Otomatik Detaylı Raporlar (STORM): Stanford Üniversitesi STORM sistemi sayesinde bir konu hakkında kaynaklı ve tam kapsamlı yayın kalitesinde akademik raporlar derlemek.'
      ],
      tipsOrCode: `// 💡 AKADEMİK KULLANIM İÇİN ÖNEMLİ EKLENTİ VE ARAÇ BAĞLANTILARI:
Aşağıdaki canlandırılmış "İlgili Araçlar" bölümünden tüm platformlara doğrudan, güvenli şekilde erişim sağlayabilirsiniz.`,
      links: [
        {
          title: 'Consensus',
          description: 'Doğrudan hakemli bilimsel makalelere dayanarak kanıta dayalı yapay zekâ analizleri ve cevapları sunan arama motoru.',
          url: 'https://consensus.app'
        },
        {
          title: 'STORM',
          description: 'Araştırma yapıp kaynaklara dayalı kapsamlı raporlar oluşturan yapay zekâ aracı.',
          url: 'https://storm.genie.stanford.edu'
        },
        {
          title: 'Mendeley',
          description: 'Kaynakça yönetimi, makale arşivleme ve atıf oluşturma aracı.',
          url: 'https://www.mendeley.com'
        },
        {
          title: 'Overleaf',
          description: 'Akademik makale ve tez yazımı için çevrimiçi LaTeX editörü.',
          url: 'https://www.overleaf.com'
        }
      ]
    }
  },
  {
    id: 'dokuman-analizi',
    category: 'akademik_ve_veri',
    title: 'PDF, Word ve Excel Analizi',
    shortDesc: 'Google NotebookLM, Napkin AI ve akıllı büyük bağlam modeli ile döküman okuma, diyagramlaştırma ve analiz.',
    icon: 'FileText',
    content: {
      overview: 'Birçok araştırma ve iş süreci; PDF, Word ve Excel formatlarında yayımlanan devasa dosyalarda saklıdır. Yapay zekaya bu dosyaları birer veritabanı gibi besleyebilir, formüller yazdırabilir, analiz tabloları oluşturtabilir veya özetler çıkarabilirsiniz.',
      keyPoints: [
        'NotebookLM Bağlam Yönetimi: Yüzlerce sayfalık kaynak kitaplar, yönetmelikler veya PDF belgeleri üzerinde nokta atışı aramalar yapıp yapay zekâ destekli sesli tartışma podcastleri üretme.',
        'Metinleri Diyagram Yapma (Napkin AI): Ham ders notlarınızı ve karmaşık konuları otomatik olarak profesyonel diyagramlara, şemalara ve görsellere dönüştürme.',
        'Excel Formül ve Makroları: Yapay zekadan ham verilerinizi analiz etmek için karmaşık DÜŞEYARA, ÇOKETOPLA gibi formüller talep etme yöntemleri.',
        'Veri Temizleme ve Yapılandırma: Excel tablolarından kopyalanan kirli veya düzensiz metinleri yapay zekayla hatasız JSON, CSV veya temiz tablolara dönüştürme.'
      ],
      tipsOrCode: `// Gelişmiş Excel Veri Analisti Yardımcı Promptu:
[ROL] Sen kıdemli bir Veri Analistisin. Aşağıda sana sunacağım tabloyu inceleyeceksin.
[GÖREV] Bu veriler içindeki en yüksek 3 büyüme trendi gösteren kategoriyi tespit et, nedenlerini açıkla ve gelecek dönem için öngörü raporu oluştur.
[KURAL] Analizlerini tamamen veri tablosundaki sayısal kanıtlara dayandır.`,
      links: [
        {
          title: 'Google NotebookLM',
          description: 'Belgelerinizden yapay zekâ destekli özetler, analizler ve podcastler oluşturur.',
          url: 'https://notebooklm.google.com'
        },
        {
          title: 'Napkin AI',
          description: 'Metinleri otomatik olarak diyagram ve görsellere dönüştürür.',
          url: 'https://napkin.ai'
        }
      ]
    }
  },
  {
    id: 'mufredat-veri-analizi',
    category: 'akademik_ve_veri',
    title: 'Müfredat ve Veri Analizi',
    shortDesc: 'Eğitim müfredatlarının analiz edilmesi, kazanım matrislerinin sorgulanması ve karne/veri analitiği ile öğrenci başarı takibi.',
    icon: 'Activity',
    content: {
      overview: 'Eğitim kurumlarında müfredatların güncellenmesi ve öğrenci gelişim verilerinin analiz edilmesi kritik önem taşır. Yapay zeka ile haftalık ders planlarını kazanımlarla eşleştirebilir, öğrenci başarı grafiklerinden çıkarımlar yapabilirsiniz.',
      keyPoints: [
        'Müfredat Kazanım Eşleştirme: MEB kazanımları ile ders planlarını otomatik çaprazlayarak, eksik kalan ya da pekiştirilmesi gereken konu gruplarını saniyeler içinde tespit etme.',
        'Ölçme ve Değerlendirme Çözümleme: Sınav sonuçlarını yapay zekaya analiz ettirerek, hangi öğrencilerin veya sınıfların hangi kazanımda zorlandığını gösteren analiz raporları üretme.',
        'Kişiselleştirilmiş Müfredat Önerileri: Farklı öğrenme hızına sahip öğrenciler veya özel gereksinimli bireyler için alternatif rota tasarımları.',
        'Karne ve Rapor Analitiği: Verileri analiz ederek veli görüşmelerine rehberlik edecek gelişim özetleri oluşturma.'
      ],
      tipsOrCode: `// Müfredat ve Kazanım Analizi Prompt Şablonu:
Sen kıdemli bir Eğitim Programları Geliştiricisisin.
Aşağıda verilen "Türev" konusuna ait 3 temel kazanım ve bir sınıfın bu konudaki başarı istatistikleri bulunmaktadır:
1. Türevin geometrik yorumu: %45 başarı
2. Limit ve türev ilişkisi: %70 başarı
3. Türevin fiziksel uygulamaları: %25 başarı

Başarı baraj sınırımız %60'tır. Buna göre, barajın altında kalan kazanımlar için 2 haftalık yoğunlaştırılmış telafi öğretim planı hazırlat.`,
      links: [
        {
          title: 'Julius AI',
          description: 'Ham Excel ve veri tablolarını yükleyerek veri temizliği, grafik çizimi ve gelişmiş korelasyon analizleri yaptırabileceğiniz yapay zekâ veri analisti.',
          url: 'https://julius.ai'
        }
      ]
    }
  },
  {
    id: 'ogretmen-asistani',
    category: 'asistan_ve_ajan',
    title: 'AI Öğretmen Asistanı Geliştirme',
    shortDesc: 'Eğitmenler için ders hazırlığı, Conker AI ile quiz oluşturma ve kişiselleştirilmiş sokratik asistan tasarımları.',
    icon: 'GraduationCap',
    content: {
      overview: 'Öğretmenler zamanlarının büyük bir kısmını idari işlere, soru hazırlamaya ve ödev okumaya harcarlar. Kişiselleştirilmiş bir yapay zeka asistanı tasarlayarak kendinize 7/24 çalışacak bir yardımcı yaratabilirsiniz.',
      keyPoints: [
        'Conker AI Quiz Üretimi: Müfredat ve ders kitaplarına doğrudan uyumlu, öğretmen dostu interaktif soru setlerini yapay zeka ile saniyeler içinde hazırlayıp öğrencilere dağıtma.',
        'Kişiselleştirilmiş Ödev Kontrolü: Öğrenci ödevlerine doğrudan düzeltme yapmak yerine "Sokratik Öğretim" kurallarıyla öğrenciyi doğru cevabı bulmaya yönlendirecek akıllı geri bildirim asistanı.',
        'Dereceli Soru Havuzu Tasarımı: Belirlenen ders kazanımlarına birebir uyumlu; kolay, orta ve gelişmiş zorluk seviyelerinde açık uçlu, eğlenceli ve modern soru setleri üretmek.',
        'Ders Akış Şeması Planlayıcısı: 40 dakikalık bir ders saati için saniye bazlı bir akış, buz kırıcı etkinlik, sınıf içi odaklanma oyunları kurgulamak.'
      ],
      tipsOrCode: `// Sokratik Öğretmen Asistanı Promptu:
[ROL] Sen "Sokratik Yöntem" ile ders anlatan ve ödev inceleyen rehber bir Öğretmen Asistanısın.
[GÖREV] Sana sunulacak öğrenci yanıtlarını derecelendir, ancak doğrudan doğru cevabı yazma. Öğrencinin mantık hatasını kendisinin fark etmesini sağlayacak 3 kısa soru sor.`,
      links: [
        {
          title: 'Conker AI',
          description: 'Öğretmenler için yapay zekâ destekli akıllı quiz, ölçme ve değerlendirme oluşturma platformu.',
          url: 'https://www.conker.ai'
        }
      ]
    }
  },
  {
    id: 'ai-arayuzleri-ve-ajanlar',
    category: 'asistan_ve_ajan',
    title: 'AI Arayüzleri ve Ajan Sistemleri',
    shortDesc: 'Yapay zeha asistanlarından (AI Chatbots) otonom karar alabilen ajan sistemlerine (AI Agents) geçiş.',
    icon: 'Terminal',
    content: {
      overview: 'Sadece sohbet penceresinden yapay zeka ile konuşmak pasif bir yöntemdir. Ancak yapay zekanın internette araştırma yapabilmesi, veri kaydedebilmesi, API aramaları yapabilmesi ve kendi kararlarını uygulayabilmesi "Ajan" çağını başlatmıştır.',
      keyPoints: [
        'Chatbot ve Ajan Arasındaki Farklar: Sohbet botları yalnızca sorulara cevap verirken, otonom yapay zeka ajanları hedefe ulaşmak için kendi alt görevlerini planlar ve internet araması vb. araçları otonom yönetir.',
        'Çoklu Ajan Rol Simülasyonu (Multi-Agent Workflows): Bir ajanın ders taslağı çıkardığı, diğer ajanın bunu pedagojik olarak eleştirdiği ve üçüncü bir ajanın görsel şablon oluşturduğu otomatik iş akışları.',
        'No-Code Ajan Araçları (CrewAI, AutoGen, Flowise): Yazılım kodlaması bilmeden de akıllı otonom sistemleri birbirine bağlayan görsel tasarım ve senaryo araçları.',
        'Günlük Hayat Entegrasyonu: E-postaları otomatik sınıflayıp yanıt hazırlığı yapan, okul web sitelerinden veri kazıyıp size özetleyen asistan ajan prototipleri kurmak.'
      ],
      tipsOrCode: `// Çoklu Ajan İşbirliği Kurulum Promptu:
Aşağıdaki rollere sahip iki yapay zeka ajanı arasında bir iş birliği başlatacağız:

Ajan 1 (Yaratıcı Müfredat Tasarımcısı): Verilen konu için en yaratıcı ve modern ders planını tasarlar.
Ajan 2 (MEB Etik ve Pedagoji Denetçisi): Ajan 1'in ürettiği planı detaylıca analiz eder, öğrenci hakları ve MEB etik kılavuzuna uyumluluğunu değerlendirerek düzeltilecek yerleri saptar.`
    }
  },
  {
    id: 'icerik-zenginlestirme',
    category: 'icerik_zenginlestirme',
    title: 'İçerik Zenginleştirme Yöntemleri',
    shortDesc: 'Ham ders metinlerini; zihin haritaları, diyagramlar (Napkin AI) ve Conker AI sınavlarına dönüştürme.',
    icon: 'Command',
    content: {
      overview: 'Eğitimin kalitesi, içeriğin interaktif katmanlarının kalitesi ile doğru orantılıdır. Yapay zekayı kullanarak düz bir metni saniyeler içinde zengin bir öğrenim kütüphanesine dönüştürebilirsiniz.',
      keyPoints: [
        'Bloom Taksonomisiyle Sınav Soruları: Öğrencilerin sadece ezberini değil; kavrama, sentez ve uygulama becerilerini ölçen kaliteli çoktan seçmeli sorular yazma formülleri.',
        'Vaka Çalışmaları (Case Studies) Üretimi: Öğretilen teorik bir konunun iş hayatında nasıl karşılık bulduğunu gösteren gerçekçi kriz ve çözüm senaryolarının türetimi.',
        'Anki & Flashcard Desteği: Akılda kalması zor olan kodların, terimlerin veya formüllerin soru-cevap kartlarına dökülmesi ve bunların Anki formatında (.txt / .tsv) çıktısının alınması.',
        'Zihin Haritaları (Mind Mapping): İçeriğin ana çatısını hiyerarşik olarak çıkaran ve doğrudan görselleştirebileceğimiz Mermaid.js / PlantUML kodlarının üretimi.'
      ],
      tipsOrCode: `<!-- Mermaid.js ile Yapay Zeka Eğitim Zihin Haritası Kodu (Doğrudan Çizdirilebilir) -->
graph TD
  A[Yapay Zeka Eğitimi] --> B[1. Oturum: Temeller]
  A --> C[2. Oturum: Medya & Şablon]
  B --> B1(LLM Tanımları)
  B --> B2(RGB Prompting)
  B --> B3(Terminal & CLI)
  C --> C1(Görsel Tasarım)
  C --> C2(AI Seslendirme)
  C --> C3(İçerik Zenginleştirme)
  
  style A fill:#3b82f6,stroke:#1d4ed8,stroke-width:2px,color:#fff
  style B fill:#1e293b,stroke:#0f172a,stroke-width:1px,color:#38bdf8
  style C fill:#1e293b,stroke:#0f172a,stroke-width:1px,color:#38bdf8`,
      links: [
        {
          title: 'Conker AI',
          description: 'Öğretmenler için yapay zekâ destekli quiz ve değerlendirme oluşturma platformu.',
          url: 'https://www.conker.ai'
        },
        {
          title: 'Napkin AI',
          description: 'Metinleri otomatik olarak diyagram ve görsellere dönüştürür.',
          url: 'https://napkin.ai'
        }
      ]
    }
  }
];
