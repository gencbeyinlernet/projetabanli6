import { Topic } from '../types';

export const session1Categories = [
  { id: 'bakis_acisi', title: 'Yapay Zekaya Bakış & Temeller', desc: 'Yapay zeka zihniyeti ve büyük dil modellerinin temelleri.' },
  { id: 'gunun_uygulamalari', title: 'Oturum Uygulamaları (Pratik Projeler)', desc: '1. Oturum kapsamında adım adım gerçekleştireceğimiz 5 temel uygulama.' },
  { id: 'prompt_muhendisligi', title: 'Prompt (İstem) Mühendisliği', desc: 'Yapay zekadan maksimum verim almak için etkili formüller.' },
  { id: 'terminal_cli', title: 'Geliştirici Ortamı & Terminal', desc: 'Node.js, terminal araçları ve pratik komut satırı kullanımı.' },
  { id: 'belgeler', title: 'Kılavuzlar & Kaynaklar', desc: 'Eğitim sürecinde başvurulacak en kritik belgeler.' }
];

export const session1Topics: Topic[] = [
  {
    id: 'bakis-acisi',
    category: 'bakis_acisi',
    title: 'Yapay Zekaya Bakış Açısı Ne Olmalı?',
    shortDesc: 'Yapay zekayı bir tehdit ya da sihir olarak değil, akıllı bir iş ortağı (co-pilot) olarak konumlandırmak.',
    icon: 'Brain',
    content: {
      overview: 'Yapay zeka teknolojileri karşısında sergilenmesi gereken en sağlıklı duruş, onu işimizi elimizden alacak bir düşman olarak değil; iş süreçlerimizi 10 katına çıkaracak bir "bilişsel kaldıraç" olarak görmektir.',
      keyPoints: [
        'Yardımcı Pilot (Co-Pilot) Zihniyeti: Yapay zeka kararları sizin yerinize vermez, seçenekleri zenginleştirir. Direksiyonda her zaman insan hiyerarşisi olmalıdır.',
        'Iteratif Sorgulama: İlk yanıt nadiren en mükemmelidir. Yapay zeka ile diyalog kurmak, onu yönlendirmek ve geri bildirimlerle geliştirmek gerekir.',
        'Merak ve Deneyleme: Hata yapmaktan korkmamak, sınırları test etmek ve sürekli yeni senaryolar denemek başarının altın anahtarıdır.',
        'Etik ve Doğrulama: Yapay zekanın "halüsinasyon" (uydurma bilgi üretme) potansiyelini bilmek ve ürettiği kritik verileri daima doğrulamak esastır.'
      ]
    }
  },
  {
    id: 'llm-nedir',
    category: 'bakis_acisi',
    title: 'LLM Nedir? Modeller Nasıl Ayırt Edilir?',
    shortDesc: 'Büyük Dil Modellerinin (LLM) çalışma mantığı ve güncel modeller arasındaki temel farklar.',
    icon: 'Cpu',
    content: {
      overview: 'LLM (Large Language Model - Büyük Dil Modeli), devasa miktarda metin verisiyle eğitilmiş ve bir kelimeden sonra gelme olasılığı en yüksek olan kelimeyi tahmin ederek insan benzeri metinler üreten derin öğrenme modelleridir.',
      keyPoints: [
        'Çalışma Prensibi: Temelde bir "olasılık makinesi"dir. Anlamı veya dünyayı bizim gibi algılamaz; kelimeler arasındaki örüntüleri istatistiksel olarak bilir.',
        'Bağlam Penceresi (Context Window): Modelin tek seferde hafızasında tutabildiği veri miktarı. Örneğin Gemini 1.5 Pro, 2 milyon token ile bu alanda liderdir.',
        'Parametre Boyutları: Modelin zekasını belirleyen ayar sayısı. Genellikle milyar (Billion - B) parametreyle ölçülür (örn. 8B, 70B vb.).',
        'Model Tipleri: Temel/Ham Modeller (Raw LLMs) ve Talimatlara Göre Eğitilmiş Modeller (Instruction Tuned LLMs - sohbet için optimize edilenler).'
      ],
      tipsOrCode: `// Popüler Model Ailelerinin Ayırt Edici Özellikleri:
- Google Gemini: Dev bağlam penceresi, harika Türkçe duyarlılığı, resmi Google servis entegrasyonları.
- OpenAI GPT-4o: Akıcı muhakeme becerisi, yüksek hız ve kod yazımında oturmuş kararlılık.
- Anthropic Claude 3.5: Akademik seviyede mantık yürütme, olağanüstü Türkçe dil kalitesi ve detaylı kod mimarisi.`,
      links: [
        {
          title: 'ChatGPT',
          description: 'Dünyada en yaygın kullanılan yapay zekâ sohbet modeli.',
          url: 'https://chatgpt.com'
        },
        {
          title: 'Gemini',
          description: 'Google\'ın resmi çok modlu sohbet botu ve yapay zekâ asistanı.',
          url: 'https://gemini.google.com'
        },
        {
          title: 'Claude AI',
          description: 'Arayüz tasarımı ve kaliteli metinsel çıktılar oluşturmak için lider yapay zekâ asistanı.',
          url: 'https://claude.ai/login'
        },
        {
          title: 'Lovable',
          description: 'Kendimize özel tasarımda tam donanımlı uygulamalar geliştirmek veya otonom yazılım süreçleri yönetmek için yeni nesil AI kodlama platformu.',
          url: 'https://lovable.dev/dashboard'
        }
      ]
    }
  },
  {
    id: 'hangi-egitimler',
    category: 'bakis_acisi',
    title: 'Hangi Eğitimleri Almalıyız?',
    shortDesc: 'Yapay zeka devriminde geride kalmamak için odaklanılması gereken kritik öğrenim patikaları.',
    icon: 'GraduationCap',
    content: {
      overview: 'Yapay zeka alanında her gün yeni bir araç çıkıyor. Bu çılgınlığın içinde kaybolmamak için araç odaklı değil, her araçta geçerli "iskelet bilgileri" kapsayan eğitimlere öncelik verilmelidir.',
      keyPoints: [
        'Temel Prompt Mühendisliği: Mantıklı, yapılandırılmış talimat verme metodolojilerini anlatan eğitimler.',
        'Yapay Zeka Destekli Kodlama: Yazılımcı olmasanız dahi Cursor, v0, VS Code tabanlı yapay zeka araçlarıyla uygulama geliştirmeyi öğreten pratik eğitimler.',
        'Süreç Otomasyonu (Automation): Make.com, Zapier veya LangChain gibi yapay zeka ajanlarını birbirine bağlayan sistem eğitimleri.',
        'Veri Analizi ve Görselleştirme: Yapay zekaya veri temizletme, Python kodları çalıştırarak analiz yaptırma becerileri.'
      ]
    }
  },
  {
    id: 'uygulama-1',
    category: 'gunun_uygulamalari',
    title: 'Uygulama 1: ChatGPT & Gemini ile İstem Karşılaştırma',
    shortDesc: 'İyi ve kötü prompt taktiklerini deneyimlemek, modellerin çalışma mantığını ve yanıt kalitesini karşılaştırmak.',
    icon: 'MessageSquare',
    content: {
      overview: 'Bu ilk uygulamamızda, her iki platformun (ChatGPT ve Gemini) resmi sayfalarını açarak hazırladığımız taslak komutları test edeceğiz. Bir istemin ne kadar yapılandırılmış (RGB modeline uygun) veya gelişigüzel yazıldığında nasıl tepki verdiğini ve üslup farklarını gözlemleyeceğiz.',
      keyPoints: [
        'Zayıf İstem Testi: "Bana pazarlama hakkında bir yazı yaz." Bu tarz üstünkörü istemlerin sonucunda genellikle çok genel, heyecansız ve yapay zekâ tarafından yazıldığı kolayca anlaşılan sığ bir metin üretilir.',
        'Güçlü İstem Testi: "Sen kıdemli bir B2B SaaS pazarlama yöneticisisin. Yeni başlayanlar için e-posta pazarlamasında yapılan en büyük 3 hatayı anlatan, samimi, akıcı ve teknik jargondan uzak 300 kelimelik bir blog taslağı oluştur."',
        'Dinamik Geliştirme Deneyimi: Yapay zekanın çıktısını beğendiğiniz yönleriyle onaylayıp, eksik kalan yerlerini "Şimdi 2. maddeyi daha detaylı, gerçek bir örnekle açıkla" diyerek adım adım geliştirin.',
        'Arayüz Karşılaştırması: ChatGPT\'nin analitik ve formel yaklaşımı ile Gemini\'ın akıcı, güncel ve insan odaklı Türkçe ifadesini yan yana test etme.'
      ],
      links: [
        {
          title: 'ChatGPT',
          description: 'İstem karşılaştırma ve metinsel çıktı kavislerini denetlemede kullanacağımız evrensel yapay zeka asistanı.',
          url: 'https://chatgpt.com'
        },
        {
          title: 'Google Gemini',
          description: 'Hızlı, dinamik ve arama motoru entegrasyonuyla zenginleştirilmiş Google yapay zeka arayüzü.',
          url: 'https://gemini.google.com'
        }
      ]
    }
  },
  {
    id: 'uygulama-2',
    category: 'gunun_uygulamalari',
    title: 'Uygulama 2: Claude AI ile Belge Analizi ve Grafik Çıktısı',
    shortDesc: 'Claude AI kullanarak harici öğrenci/veri listesi yükleme, gelişmiş veri analizi yapıp grafikler çizdirme.',
    icon: 'FileText',
    content: {
      overview: 'İkinci uygulamada Claude modelinin eşsiz analitik zekası ve dosya yükleme desteğini kullanıyoruz. Sınıf içi sınav sonuçları, ders başarı tablosu veya herhangi bir Excel/CSV/PDF listesini Claude AI\'a yükleyerek veriyi nasıl otomatik okutacağımızı, temizleteceğimizi ve görselleştireceğimizi uyguluyoruz.',
      keyPoints: [
        'Harici Belge Yükleme: Sınav sonuçları veya öğrenci karnelerinden oluşan Excel/CSV/PDF dosyalarını arayüze yükleme.',
        'Veri Analiz Komutu: "Aşağıdaki sınav tablosunu incele. En kritik 2 başarı alanını ve iyileştirme tavsiyelerini saptayıp raporla."',
        'Grafik & Rapor Üretimi: Analiz sonuçlarının şık tablolara, Markdown listelerine ve hatta Mermaid.js akış şeması grafiklerine dökülmesi.',
        'Claude Yeteneği: Claude\'un büyük bağlam derinliğini ve veri madenciliği yeteneklerini eğitim süreçlerimize entegre etmek.'
      ],
      links: [
        {
          title: 'Claude AI',
          description: 'Dışarıdan veri yükleme, kod parçaları ve belgeleri derinlemesine sorgulayıp görsel tablolar türetme asistanımız.',
          url: 'https://claude.ai/login'
        }
      ]
    }
  },
  {
    id: 'uygulama-3',
    category: 'gunun_uygulamalari',
    title: 'Uygulama 3: Modellerle Sınav Kağıdı Hazırlama (Word/DOCX)',
    shortDesc: 'ChatGPT, Gemini ve Claude modellerine kaynak ünite notları yükleyip MEB uyumlu, cevap anahtarlı sınav kağıtları hazırlatıp Word\'e aktarma.',
    icon: 'Sliders',
    content: {
      overview: 'Sınıf ders notları, ünite müfredatı veya kaynak bir metin dökümanını üç büyük yapay zekaya da yükleyerek pedagojik sınav hazırlatıyoruz. Üretilen profesyonel sınav formatını kopyalayıp Word (.docx) çıktısı olarak düzenliyoruz.',
      keyPoints: [
        'Kaynak Materyal Tanımlama: Ünite özetini veya konu anlatımlı ders notlarını yapay zekanın döküman yükleme alanına beslemek.',
        'Bloom Taksonomisi Uyumlaması: Modellerden kazanımları ölçen çoktan seçmeli, klasik veya boşluk doldurmalı 10 adet soru türetmesini isteme.',
        'Cevap Anahtarı Formülasyonu: Sınavın hemen altına sorulardaki kazanım eşleşmeleriyle birlikte tam ve detaylı cevap anahtarı ekletme.',
        'Word Formatına Dönüşüm: Yapay zekanın tablo ve metin standardında ürettiği çıktıyı saniyeler içinde Word (.docx) dosyası haline getirme taktiği.'
      ],
      links: [
        {
          title: 'ChatGPT',
          description: 'Word formatına dönüştürmeye son derece uygun, yapılandırılmış sorular ve cevap anahtarı hazırlar.',
          url: 'https://chatgpt.com'
        },
        {
          title: 'Google Gemini',
          description: 'Müfredat standartları ve güncel MEB yönergelerini dikkate alan sınav soruları türetir.',
          url: 'https://gemini.google.com'
        },
        {
          title: 'Claude AI',
          description: 'Soruların anlatım dilini pedagojik, öğretici kurallara ve kısıtlamalara %100 sadık kalarak hazırlar.',
          url: 'https://claude.ai/login'
        }
      ]
    }
  },
  {
    id: 'uygulama-4',
    category: 'gunun_uygulamalari',
    title: 'Uygulama 4: Google AI Studio Build ile Kendi Web Arayüzümüz',
    shortDesc: 'Google AI Studio Build platformunda kendi sistem talimatlarımız ve tasarımımızla çalışan benzersiz bir Web App prototipi inşa etme.',
    icon: 'Layers',
    content: {
      overview: 'Yapay zeka dünyasında tüketiciden üreticiye dönüştüğümüz en kapsamlı uygulamamız! Google AI Studio Build platformuna giriş yaparak, arka planda belirlediğimiz System Instructions ve API parametreleriyle çalışan tamamen kendimize ait bir yapay zeka web uygulaması tasarlıyoruz.',
      keyPoints: [
        'Build Portalı Giriş: Google AI Studio Build platformunda yeni bir yapay zeka destekli web arayüzü projesi başlatmak.',
        'Uygulama Arayüzü Çizimi: Portaldaki akıllı asistan yardımıyla butonlar, girdi alanları ve metin kutuları barındıran şık bir web tasarımı tasarlatmak.',
        'Sistem Parametreleri (System Instructions): Uygulamanın sadece öğretmenlere hizmet etmesi için arka planda konulan kuralların (System Prompt) girilmesi.',
        'Entegrasyon ve Canlı Deneyleme: Uygulamamızı API ile entegre edip anında tarayıcıda çalıştırarak test etmek ve projeyi yayına hazırlamak.'
      ],
      links: [
        {
          title: 'Google AI Studio Build',
          description: 'Gelişmiş model talimatlarını, System Prompt tasarımlarını ve canlı arayüz prototiplerini oluşturacağınız resmi geliştirici portalı.',
          url: 'https://aistudio.google.com'
        }
      ]
    }
  },
  {
    id: 'uygulama-5',
    category: 'gunun_uygulamalari',
    title: 'Uygulama 5: Gemini CLI ile Masaüstü Yapay Zekâ Ajanı',
    shortDesc: 'Bilgisayarınızın terminal ekranı üzerinden Gemini CLI kurulum adımları, temel çalışma felsefesi ve ne işe yaradığı.',
    icon: 'Terminal',
    content: {
      overview: 'Birinci günün son uygulamalı etkinliğinde masaüstünüze odaklanıyoruz. Web tarayıcısına bağımlı kalmadan, bilgisayarın komut satırından (Terminal/PowerShell) Gemini modeline erişmenizi sağlayan Gemini CLI aracını adım adım ayağa kaldırıyor ve ne işe yaradığını inceliyoruz.',
      keyPoints: [
        'Zemin Hazırlığı: terminal kütüphanelerinin ana motoru olan Node.js ve npm paket yöneticisini bilgisayara kurma.',
        'Gemini CLI Kurulumu: Komut satırına küresel yükleme talimatları vererek aracın sisteme entegre edilmesi.',
        'Soruları Terminalden Çözme: Doğrudan masaüstünüzdeki dosyaları boru hatlarıyla (pipe/cat) yönlendirip saniyeler içinde analiz ettirme otonomisi.',
        'Hız ve Verimlilik: Tarayıcı açmadan, kopyala-yapıştır yapmadan tüm sistem loglarını ve metin dökümanlarını terminalden yönetme pratikleri.'
      ],
      links: [
        {
          title: 'Node.js',
          description: 'CLI paket aracımızın (npm) bilgisayarımızda çalışmasını sağlayan arka plan JavaScript runtime ortamı.',
          url: 'https://nodejs.org'
        },
        {
          title: 'Gemini CLI Kılavuzu',
          description: 'Gemini CLI kurulum adımlarının, komut argümanlarının ve gelişmiş terminal kullanımlarının resmi belgeleri.',
          url: 'https://geminicli.com'
        }
      ],
      tipsOrCode: `# ADIM ADIM GEMINI CLI KURULUM ADIMLARI:

# 1. Adım: Bilgisayarınızda Node.js kurulduktan sonra kurulup kurulmadığını terminalde teyit edin:
node -v   # Örnek çıktı: v20.11.0
npm -v    # Örnek çıktı: 10.2.4

# 2. Adım: Gemini CLI aracını bilgisayarınıza global (tüm klasörlerde geçerli) sürüm olarak kurun:
npm install -g @google/clis

# 3. Adım: Google AI Studio'dan edindiğiniz API Key anahtarını bilgisayarınızın terminaline tanımlayın:
# Linux ve macOS işletim sistemlerinde:
export GEMINI_API_KEY="AIzaSyBuradakiAnahtarKodu..."
# Windows PowerShell kullananlarda:
$env:GEMINI_API_KEY="AIzaSyBuradakiAnahtarKodu..."

# 4. Adım: Başarıyla kullanmaya başlayın! Doğrudan terminal ekranına soru sorun:
gemini "Öğretmenler için yapay zeka asistanları hazırlamada en temel kılavuz nedir?"
# Masaüstünüzdeki bir (örn. karneler.txt) dosyasının özetini çıkartmak için:
cat karneler.txt | gemini "Bu karneler listesindeki zayıf not durumundaki öğrencileri ayıkla"`
    }
  },
  {
    id: 'etkili-prompt',
    category: 'prompt_muhendisligi',
    title: 'Etkili Prompt Yazma Teknikleri',
    shortDesc: 'Yapay zekadan tam olarak istediğiniz sonucu almanızı sağlayan temel teknikler.',
    icon: 'Sparkles',
    content: {
      overview: 'Yapay zekaya ne kadar net, yapılandırılmış ve amaca yönelik girdi (prompt) sağlarsanız, aldığınız çıktı da o kadar kaliteli olur. Doğru formülü bilmek zaman kaybını sıfıra indirir.',
      keyPoints: [
        'Açık ve Doğrudan Talimatlar: Muğlak ifadeler yerine eylem bildiren net komutlar verin (örn. "Bana bunu açıkla" yerine "Lise seviyesindeki bir öğrenciye anlatır gibi 3 madde halinde açıkla").',
        'Az-Örnekli Öğrenme (Few-Shot Prompting): Modele ne istediğinizi sadece tarif etmek yerine, istediğiniz formata uygun 1-2 örnek sunun.',
        'Düşünce Zinciri (Chain-of-Thought): Modele cevaba geçmeden önce adım adım mantık yürütmesini söyleyin (örn. "Önce problemi analiz et, ardından çözüm adımlarını planla, en son cevabı yaz").',
        'Sınırları Belirleme: Modelin ne yapmasını istemediğinizi de belirtin (örn. "Asla teknik terim kullanma", "Yazı en fazla 150 kelime olsun").'
      ]
    }
  },
  {
    id: 'rgb-yapisi',
    category: 'prompt_muhendisligi',
    title: 'İstem Kullanımında RGB Yapısı Nedir?',
    shortDesc: 'Rol (Role), Görev/Hedef (Goal) ve Sınırlar (Brand/Boundary) üçgeniyle kusursuz promptlar tasarlama.',
    icon: 'Sliders',
    content: {
      overview: 'RGB Yapısı, karmaşık görevleri yapay zekaya hatasız aktarmak için geliştirilmiş altın bir formüldür. Kırmızı-Yeşil-Mavi (RGB) renk kodlamasından esinlenen bu yapı, bir promptun olmazsa olmaz 3 katmanını temsil eder.',
      keyPoints: [
        'R - Role (Rol / Kimlik): Yapay zekanın hangi uzmanlık şapkasıyla konuşacağını belirtir. (Örn: "Kıdemli Node.js Yazılımcısı", "SEO Uzmanı", "Kreatif Yazar")',
        'G - Goal (Görev / Hedef): Yapay zekanın ne yapacağını, ana amacın ne olduğunu açıklar. (Örn: "Bir API hata yakalama fonksiyonu yaz", "Rakip analiz raporu hazırla")',
        'B - Brand & Boundary (Sınırlar & Format): Çıktının tonu, biçimi, uzunluğu ve asla aşılmaması gereken kuralları belirler. (Örn: "Sadece JSON formatında çıktı ver", "Markdown kullanarak başlıklandır", "Samimi bir dil kullan")'
      ],
      tipsOrCode: `// Kusursuz RGB Prompt Şablonu:
[ROLE] Sen deneyimli bir [Uzmanlık Alanı]'sın.
[GOAL] Senden [Yapılacak Görev]'i detaylıca yapmanı istiyorum.
[BOUNDARY] Bu işlemi yaparken şu kurallara dikkat et:
- Sadece [Gerekli Format] formatında yanıt ver.
- Asla gereksiz açıklamalar yapma.
- Çıktıda [Yasaklı Durum]'dan kaçın.`,
      interactiveSnippet: true
    }
  },
  {
    id: 'prompt-ozellikleri',
    category: 'prompt_muhendisligi',
    title: 'Uygulamalı Prompt Özellikleri & Teknikleri',
    shortDesc: 'Sıfır Örnek, Persona, Few-Shot gibi en yaygın kullanılan 8 farklı pratik prompt tekniği.',
    icon: 'Sparkles',
    content: {
      overview: 'Yapay zekâ ile iletişim kurarken kullanabileceğiniz en temel ve etkili 8 farklı istem/prompt tekniğini, fotosentez konusu üzerinden karşılaştırmalı örneklerle inceleyin.',
      keyPoints: [
        '1. Sıfır Örnek (Zero-Shot): Modele önceden herhangi bir örnek veya rol vermeden doğrudan bilgi talebinde bulunma yöntemi.',
        '2. Rol Tabanlı (Persona Prompt): Yapay zekaya belirli bir uzmanlık, ton, tecrübe seviyesi ve bakış açısı atayarak yanıt kalitesini artırma.',
        '3. Bağlamlı Prompt (Context Prompt): Modelin hata yapmasını önlemek için hedef kitle, ortam veya arka plan kısıtlamalarını besleme.',
        '4. Çıktı Formatlı Prompt: Yanıtın biçimini (Tablo, JSON, Markdown, Liste vb.) önceden net kurallarla talep etme.',
        '5. Few-Shot Prompt: Nasıl bir yanıt formatı veya üslup beklediğinize dair modele bir veya birkaç örnek gösterme tekniği.',
        '6. Zincirleme Düşünme (Chain of Thought): Yapay zekanın doğrudan son cevaba atlamasını engelleyerek adım adım mantık yürütmesini sağlama.',
        '7. Negatif Prompt: Çıktıda kesinlikle bulunmamasını istediğiniz kelimeleri, tarzları, dilleri ya da konuları tanımlama.',
        '8. Tersine Prompt (Reverse Prompt): Yapay zekadan, istediğiniz bir hedefe ulaşmanızı sağlayacak en ideal prompt şablonunu hazırlamasını isteme.'
      ],
      tipsOrCode: `1. Sıfır Örnek (Zero-Shot)
Fotosentezi anlat.

2. Rol Tabanlı (Persona Prompt)
20 yıllık Fen Bilimleri öğretmeni gibi davran. Fotosentezi 6. sınıf öğrencilerine anlat.

3. Bağlamlı Prompt (Context Prompt)
6. sınıf öğrencilerim fotosentez konusunu ilk kez öğrenecek. Günlük yaşamdan örneklerle açıkla.

4. Çıktı Formatlı Prompt
Fotosentez konusunu tablo halinde hazırla. Sütunlar: Kavram, Açıklama, Örnek.

5. Few-Shot Prompt
Aşağıdaki örneği incele:
"Solunum: Canlıların enerji elde etme sürecidir."
Aynı yapıda fotosentezi açıkla.

6. Zincirleme Düşünme (Chain of Thought)
Fotosentezi adım adım düşünerek açıkla. Önce gerekli şartları, sonra süreci, ardından sonucu anlat.

7. Negatif Prompt
Fotosentezi anlatırken kimyasal denklem kullanma, teknik terimlerden kaçın.

8. Tersine Prompt (Reverse Prompt)
Fotosentez konusunda 6. sınıf öğrencilerine ders anlatacak bir öğretmen için ideal prompt oluştur.`
    }
  },
  {
    id: 'node-kurulum',
    category: 'terminal_cli',
    title: 'Node.js Kurulumu',
    shortDesc: 'Modern javascript ve yapay zeka araçlarını çalıştırmak için bilgisayarımızın zeminini hazırlama kılavuzu.',
    icon: 'FolderKanban',
    content: {
      overview: 'node.js, JavaScript kodlarını tarayıcı dışında bilgisayarda çalıştırmamızı sağlayan bir çalışma ortamıdır. Aynı zamanda npm (Node Package Manager) adlı paket yöneticisini de içerir. https://nodejs.org resmi indirme ve kurulum kanalıdır.',
      keyPoints: [
        'Resmi İndirme Linki: https://nodejs.org adresinden işletim sisteminize uygun indirme dosyalarına erişebilirsiniz.',
        'NVM Kullanımı: Birden fazla Node.js sürümünü yönetmek için Node Version Manager (NVM) kurulması tavsiye edilir.',
        'NPM Nedir?: Node Package Manager (Node Paket Yöneticisi), dünya çapındaki yüz binlerce kütüphaneyi tek tıkla kurmanızı sağlar.'
      ],
      tipsOrCode: `# Kurulumun başarıyla tamamlandığını doğrulamak için terminale yazın:
node -v
# Output örneği: v20.11.0

# npm sürümünü kontrol etmek için:
npm -v
# Output örneği: 10.2.4`,
      codeLanguage: 'bash',
      links: [
        {
          title: 'Node.js',
          description: 'JavaScript kodlarını tarayıcı dışında çalıştırma ortamı ve paket paketi (npm) indirme kanalı.',
          url: 'https://nodejs.org'
        }
      ]
    }
  },
  {
    id: 'gemini-cli-kurulum',
    category: 'terminal_cli',
    title: 'Gemini CLI Kurulumu',
    shortDesc: 'Gemini CLI aracını bilgisayarınıza kurarak terminal üzerinden yapay zeka sorguları çalıştırma.',
    icon: 'Terminal',
    content: {
      overview: 'Gemini CLI, doğrudan komut satırından Gemini modellerine erişmenizi sağlayan ultra hızlı bir terminal aracıdır. Bu kurulum sayesinde web tarayıcısı açmadan hızlıca yapay zekaya komut gönderebilir, kod yazdırabilir ve belgelerinizi özetletebilirsiniz.',
      keyPoints: [
        'Resmi Kurulum Belgeleri: https://geminicli.com/docs/get-started/installation/ resmi adresinden güncel kurulum adımlarına her zaman erişebilirsiniz.',
        'Ön Şart (Node.js): Bu aracın çalışması için bilgisayarınızda Node.js v18 veya üzeri bir sürümün kurulu ve çalışır olması gerekmektedir.',
        'Kolay Erişim: npm komutunu kullanarak tek bir satırda terminalinize kurabilir ve hemen test edebilirsiniz.',
        'API Entegrasyonu: Google AI Studio üzerinden edindiğiniz ücretsiz API anahtarı (API Key) ile yetkilendirme sağlayarak sınırsız sorgulama yapabilirsiniz.'
      ],
      links: [
        {
          title: 'Gemini CLI Kurulum Sayfası',
          description: 'Gemini CLI aracını bilgisayarınıza kurmak için resmi get-started adım adım kılavuzu.',
          url: 'https://geminicli.com/docs/get-started/installation/'
        }
      ],
      tipsOrCode: `# Gemini CLI Kurulum Komutları

# 1. Adım: Terminalinizi açın ve aracı küresel (global) olarak kurun:
npm install -g @google/clis

# 2. Adım: API Anahtarınızı terminal oturumunuza tanımlayın
# Windows (PowerShell):
$env:GEMINI_API_KEY="AIzaSyBuradakiAPIKeyKodunuz"

# macOS & Linux (Bash/Zsh):
export GEMINI_API_KEY="AIzaSyBuradakiAPIKeyKodunuz"

# 3. Adım: Kurulumu ve bağlantıyı test edin:
gemini "Merhaba, terminalden ilk sorum!"`
    }
  },
  {
    id: 'klavuzlar-belgeler',
    category: 'belgeler',
    title: 'Önemli Klavuzlar ve Belgeler',
    shortDesc: 'Burak TURGUT eğitimi süresince kullanılacak resmi dokümanlar, API belgeleri ve hile levhaları.',
    icon: 'BookOpen',
    content: {
      overview: 'Yapar zeka ekosisteminde sürekli güncel kalmanın yolu, doğrudan üretici firmaların birinci el kaynaklarını ve resmi belgeleri takip etmekten geçer.',
      keyPoints: [
        'Google AI Studio Portalı: https://aistudio.google.com - API anahtarınızı güvenle üretebileceğiniz ve promptları dilediğinizce test edebileceğiniz oyun alanı.',
        'Google GenAI SDK Belgeleri: Google\'ın en güncel "@google/genai" kütüphanesinin resmi dökümantasyonu.',
        'Official Prompting Guides: Claude ve OpenAI tarafından hazırlanan, ileri düzey prompt yöntemleri içeren resmi yönlendirmeler.',
        'Eğitim Repo ve Notları: Burak TURGUT tarafından paylaşılan örnek kod şablonları, senaryolar ve proje taslakları.'
      ],
      tipsOrCode: `// Örnek Eğitim Bağlantıları & Kaynaklar:
- Google AI Studio: https://aistudio.google.com
- Anthropic Prompt Library: https://docs.anthropic.com/en/prompt-library/library
- Node.js Download: https://nodejs.org/tr/download
- Gemini CLI Installation: https://geminicli.com/docs/get-started/installation/
- Burak TURGUT Eğitim Kaynakları ve Güncellemeler için İletişim: burakturgut53@gmail.com`
    }
  }
];
