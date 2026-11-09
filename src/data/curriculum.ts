export interface LearningTool {
  id: string;
  name: string;
  label: string;
  day: number;
  url: string;
  description: string;
  activity: string;
  purpose: string;
  optional?: boolean;
  alsoOnDays?: number[];
}

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  description: string;
  steps: string[];
  output: string;
  prompt?: string;
  code?: string;
  codeLabel?: string;
}

// Each entry is one 30-minute part of the 2-hour hands-on flow.
export interface TrainingDay {
  id: number;
  timeRange: string;
  duration: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  icon: 'Sparkles' | 'Terminal' | 'Palette' | 'Rocket';
  lessons: Lesson[];
}

export const trainingInfo = {
  "title": "GencbeyinlerNet Proje Tabanli Yapay Zeka Eğitimi",
  "date": "2026-11-09T21:00:00+03:00",
  "dateLabel": "9 Kasım 2026 Pazartesi",
  "startTime": "21.00",
  "duration": "3 saat",
  "schedule": "2 saat uygulama (4 × 30 dk) + soru-cevap",
  "format": "Online · Canlı eğitim + kayıt",
  "toolCount": 16,
  "resourcesUrl": "https://gencbeyinlernet.github.io/projetabanli6/",
  "participantLimit": 300,
  "audience": "Tüm branşlardan öğretmenler ve öğretmen adayları",
  "trainers": [
    {
      "name": "Burak TURGUT",
      "role": "Bilişim Teknolojileri Öğretmeni & Yapay Zekâ Uzmanı",
      "initials": "BT"
    }
  ]
} as const;

// The single project the whole training builds, step by step.
export const project = {
  "name": "Çıkış Kartı",
  "summary": "Ders bitmeden her öğrenci telefonundan 1 dakikalık bir kart doldurur. Cevaplar veritabanına kaydedilir; öğretmen panelinde sınıfın nabzını görür, yapay zekâ ile yarınki derse öneri çıkarırız.",
  "flow": ["Öğrenci yazar", "Veritabanı saklar", "Öğretmen görür", "Yapay zekâ yorumlar"],
  "anyBranch": "Her branşa uyar: yalnızca günün sorusunu değiştirmemiz yeterli."
} as const;

// Plain-language analogies for the core ideas, introduced in the first part.
export const concepts = [
  { "term": "Yapay zekâ modeli", "analogy": "Çok okumuş bir stajyer öğretmen", "text": "Çok şey bilir ama sınıfımızı tanımaz. Bağlamı biz veririz, son kontrolü biz yaparız." },
  { "term": "İstem (prompt)", "analogy": "Öğrenciye verilen yönerge", "text": "Yönerge ne kadar netse ödev o kadar iyi olur. Formülümüz: Rol + Hedef + Sınır." },
  { "term": "Ajan", "analogy": "Görev alan asistan", "text": "Codex ve Claude Code yalnızca sohbet etmez; plan yapar, dosya oluşturur, test eder ve rapor verir." },
  { "term": "Uygulama (arayüz)", "analogy": "Sınıf kapısındaki pano", "text": "Öğrencinin gördüğü ve dokunduğu kısımdır: düğmeler, kutular ve mesajlar." },
  { "term": "Veritabanı", "analogy": "Sınıf defteri", "text": "Her satır bir kayıt, her sütun bir başlıktır. Sayfa yenilense de bilgiler kaybolmaz." },
  { "term": "Anahtar (API key)", "analogy": "Ziyaretçi kartı ve ana anahtar", "text": "Publishable anahtar ziyaretçi kartıdır, yalnızca izin verilen işi yapar. Gizli anahtar ana anahtardır; asla paylaşılmaz." },
  { "term": "GitHub", "analogy": "Projenin tarihli defteri", "text": "Her değişiklik tarihiyle kaydedilir; gerektiğinde eski sürüme dönebiliriz." },
  { "term": "Yayın (Netlify)", "analogy": "Panoyu koridora asmak", "text": "Uygulamaya bir bağlantı verir; bağlantıyı veya QR kodu alan herkes kullanabilir." }
] as const;

export const trainingDays: TrainingDay[] = [
  {
    "id": 1,
    "timeRange": "0:00 – 0:30",
    "duration": "30 dk",
    "title": "Planla: Yapay zekâyla konuşmayı öğrenelim",
    "subtitle": "Temel kavramlar, istem formülü & proje planı",
    "description": "Temelden başlayacağız: model, istem, ajan ve veritabanı ne demek? Zayıf bir istemi Rol + Hedef + Sınır formülüyle güçlendirecek, Çıkış Kartı uygulamamızın planını yapay zekâyla birlikte çıkaracağız.",
    "outcome": "Güçlü bir istem ve ekranları, verileri belli bir sayfalık proje planı hazırlayacağız.",
    "icon": "Sparkles",
    "lessons": [
      {
        "id": "ai-basics",
        "title": "Yapay zekâyı tanıyalım: çok okumuş bir stajyer",
        "minutes": 10,
        "description": "Temel kavramlarla başlayacağız. Aynı kısa istemi ChatGPT ve Claude’a yazıp yanıtları karşılaştıracağız.",
        "steps": [
          "Yapay zekâyı “çok okumuş ama sınıfımızı tanımayan bir stajyer öğretmen” gibi düşüneceğiz: bilgisi çok, bağlamı biz veririz, son kararı biz veririz.",
          "Ana sayfadaki temel kavramlar kartlarına birlikte bakacağız: istem, ajan, uygulama, veritabanı.",
          "Aşağıdaki kısa istemi ChatGPT ve Claude’a aynen yazacağız.",
          "İki yanıtı doğruluk, sınıf düzeyi ve dil açısından karşılaştıracağız. İsteyen Gemini’de üçüncü bir yanıt alabilir."
        ],
        "output": "Aynı istem için karşılaştırılmış iki yanıt ve ilk gözlemlerimiz.",
        "prompt": "5. sınıf öğrencileri için ders sonunda doldurulacak bir çıkış kartına 3 soru yaz."
      },
      {
        "id": "rgb-prompt",
        "title": "İstem formülü: Rol + Hedef + Sınır",
        "minutes": 10,
        "description": "İlk istemimiz bilerek zayıftı. Formülle güçlendirecek, aynı soruyu yeniden sorup farkı göreceğiz.",
        "steps": [
          "Rol: Yapay zekâ kim olarak cevap verecek?",
          "Hedef: Tam olarak ne istiyoruz, hangi biçimde?",
          "Sınır: Kimin için, hangi kurallarla? Neleri istemiyoruz?",
          "Güçlü istemi deneyip ilk yanıtla karşılaştıracağız. İstem atölyesinde kendi branşımız için bir istem yazacağız."
        ],
        "output": "Rol, hedef ve sınırları belli, tekrar kullanabileceğimiz bir istem.",
        "prompt": "[ROL] Sen deneyimli bir 5. sınıf fen bilimleri öğretmenisin.\n[HEDEF] Fotosentez dersinin sonunda öğrencilerin 1 dakikada doldurabileceği bir “çıkış kartı” hazırla: dersi nasıl bulduğu (Anladım / Kısmen / Zorlandım), konuyla ilgili 1 çoktan seçmeli soru (A, B, C), “Bugün öğrendiğim bir şey” ve “Hâlâ merak ettiğim” soruları.\n[SINIR] 10 yaşındaki bir çocuğun anlayacağı sade bir dil kullan. Ad, numara gibi kişisel bilgi isteme. Doğru cevabı ayrıca belirt."
      },
      {
        "id": "project-plan",
        "title": "Projemizi planlayalım: Çıkış Kartı",
        "minutes": 10,
        "description": "Yapay zekâdan uygulamamızın planını isteyeceğiz: ekranlar, toplanacak veriler ve öğretmen paneli. Planı Claude Projects’e kaydedip sonraki adımlarda bağlam olarak kullanacağız.",
        "steps": [
          "Plan istemini ChatGPT’ye veya Claude’a yazacağız.",
          "Öğrenci ekranını, öğretmen panelini ve tablodaki sütunları kontrol edeceğiz.",
          "Gereksiz özellikleri çıkaracağız: ilk sürüm sade olacak.",
          "Planı Claude’da bir Project’e kaydedeceğiz; sonraki adımlarda yeniden anlatmamıza gerek kalmayacak."
        ],
        "output": "Ekranları ve verileri belli, bir sayfalık proje planı.",
        "prompt": "[ROL] Öğretmenlere uygulama planlamada yardım eden bir eğitim teknolojisi uzmanısın.\n[HEDEF] “Çıkış Kartı” adlı basit bir web uygulaması planla. Öğrenci ders sonunda telefondan kartı doldursun; öğretmen ayrı bir panelde sonuçların özetini görsün.\n[SINIR] İlk sürüm sade olsun. Öğrenci ekranını, öğretmen panelini ve veritabanında tutulacak sütunları (duygu, cevap, ogrendigim, sorum) madde madde yaz. Kişisel veri toplama. Her teknik terimi bir cümleyle açıkla."
      }
    ]
  },
  {
    "id": 2,
    "timeRange": "0:30 – 1:00",
    "duration": "30 dk",
    "title": "Tasarla: İçerik ve görünüm",
    "subtitle": "NotebookLM, Canva & Canva Code",
    "description": "Kartın içini ve yüzünü hazırlayacağız. NotebookLM ile ders notumuzdan günün sorusunu çıkaracak, Canva ile logo ve renkleri belirleyecek, Canva Code ile ilk ekran taslağını kuracağız.",
    "outcome": "Günün sorusu, logo ve renkler ile çalışan bir ekran taslağı; ve veritabanına neden ihtiyaç duyduğumuzun cevabı.",
    "icon": "Palette",
    "lessons": [
      {
        "id": "notebooklm-question",
        "title": "NotebookLM ile günün sorusu",
        "minutes": 10,
        "description": "Ders notumuzu NotebookLM’e kaynak olarak ekleyecek, kartımız için kaynağa dayalı bir çoktan seçmeli soru hazırlayacağız.",
        "steps": [
          "Kişisel veri içermeyen bir fotosentez ders notunu (PDF, doküman veya metin) kaynak olarak ekleyeceğiz.",
          "Aşağıdaki istemle günün sorusunu hazırlatacağız.",
          "Yanıttaki kaynak işaretine tıklayıp bilginin notta gerçekten yazdığını kontrol edeceğiz.",
          "Soruyu ve doğru cevabı uygulamada kullanmak üzere bir kenara not edeceğiz."
        ],
        "output": "Kaynağı kontrol edilmiş günün sorusu ve doğru cevabı.",
        "prompt": "Bu kaynağa dayanarak 5. sınıf öğrencileri için 1 çoktan seçmeli soru yaz. Üç seçenek olsun (A, B, C) ve yalnızca biri doğru olsun. Doğru cevabı ve kaynağın hangi bölümüne dayandığını belirt. Dili sade tut."
      },
      {
        "id": "canva-brand",
        "title": "Canva ile uygulamanın kimliği",
        "minutes": 10,
        "description": "Canva AI ile Çıkış Kartı için sade bir logo ve renk paleti hazırlayacağız. Renk kodlarını uygulamayı kurarken kullanacağız.",
        "steps": [
          "Canva AI ile aşağıdaki istemden logo taslakları oluşturacağız.",
          "Birini seçip yazıyı ve renkleri sadeleştireceğiz.",
          "Kullandığımız 2-3 rengin kodunu (ör. #2F80ED) not alacağız.",
          "Logoyu PNG olarak indireceğiz."
        ],
        "output": "Uygulamamızın logosu ve renk kodları.",
        "prompt": "“Çıkış Kartı” adlı bir okul uygulaması için sade ve çocuk dostu bir logo tasarla. Bir kapı ve küçük bir kart simgesi olsun. Mavi ve yeşil tonları kullan; arka plan beyaz olsun."
      },
      {
        "id": "canva-code-prototype",
        "title": "Canva Code ile ilk taslak ve büyük soru",
        "minutes": 10,
        "description": "Kartın ilk ekranını Canva Code’a tarif ederek hazırlayacağız. Sonra sayfayı yenileyip büyük soruyu soracağız: Cevaplar nereye gitti?",
        "steps": [
          "Aşağıdaki istemle tek ekranlık kart taslağını oluşturacağız.",
          "Telefonda okunabilirliği ve düğme boyutlarını kontrol edip geri bildirim vereceğiz.",
          "Kartı doldurup gönderecek, ardından sayfayı yenileyeceğiz.",
          "Cevaplar kayboldu! Kalıcı saklamak için bir veritabanına, yani bir “sınıf defterine” ihtiyacımız olduğunu göreceğiz."
        ],
        "output": "Çalışan bir ekran taslağı ve veritabanına neden ihtiyaç duyduğumuzun cevabı.",
        "prompt": "“Çıkış Kartı” adlı tek ekranlık bir öğrenci formu hazırla. Üstte “Bugünkü ders nasıldı?” sorusu ve 3 büyük düğme olsun: 😀 Anladım, 😐 Kısmen, 😕 Zorlandım. Altında günün sorusu ve A, B, C seçenekleri; “Bugün öğrendiğim bir şey” ve “Hâlâ merak ettiğim” kutuları; en altta “Kartı gönder” düğmesi olsun. Gönderince “Teşekkürler!” mesajı göster. Telefona uygun, büyük ve okunaklı olsun."
      }
    ]
  },
  {
    "id": 3,
    "timeRange": "1:00 – 1:30",
    "duration": "30 dk",
    "title": "Kur: Veritabanı ve uygulama",
    "subtitle": "Supabase, Claude Code & Codex",
    "description": "Sınıf defterimizi Supabase’de kuracak, sonra planı, soruyu, renkleri ve veritabanı bilgilerini tek bir göreve dönüştürüp Claude Code veya Codex’e vereceğiz. Ajan kuracak; biz test edip yönlendireceğiz.",
    "outcome": "Kartları veritabanına kaydeden ve öğretmen paneli olan çalışan bir uygulama elde edeceğiz.",
    "icon": "Terminal",
    "lessons": [
      {
        "id": "supabase-table",
        "title": "Veritabanı = sınıf defteri: Supabase’de tablomuzu kuralım",
        "minutes": 10,
        "description": "Supabase’de bir proje açıp kartları saklayacağımız tabloyu kuracağız. Kimin ne yapabileceğini erişim kurallarıyla belirleyeceğiz.",
        "steps": [
          "Supabase’de yeni bir proje açacağız; veritabanı şifresini güvenli bir yere not alacağız.",
          "SQL Editor’e aşağıdaki kodu yapıştırıp çalıştıracağız. İsteyen aynı tabloyu Table Editor’de tıklayarak da oluşturabilir.",
          "Table Editor’de tabloyu açıp sınıf defterimizi göreceğiz: her satır bir kart, her sütun bir başlık.",
          "Proje ayarlarındaki API bölümünden Project URL ve publishable (anon) anahtarı kopyalayacağız. Gizli (secret / service_role) anahtarı asla kullanmayacağız.",
          "Karşılaştırma: Aynı veriyi Google Forms ile de toplayabilirdik. Forms hızlıdır; kendi uygulamamız ise tasarımı ve öğretmen panelini bize bırakır."
        ],
        "output": "Kartları saklamaya hazır bir tablo, Project URL ve publishable anahtar.",
        "code": "create table cikis_kartlari (\n  id bigint generated always as identity primary key,\n  created_at timestamptz default now(),\n  duygu text not null,\n  cevap text,\n  ogrendigim text,\n  sorum text\n);\n\nalter table cikis_kartlari enable row level security;\n\ncreate policy \"Herkes kart ekleyebilir\" on cikis_kartlari\n  for insert to anon with check (true);\n\ncreate policy \"Herkes kartlari okuyabilir\" on cikis_kartlari\n  for select to anon using (true);",
        "codeLabel": "Supabase SQL Editor’de çalıştıracağız"
      },
      {
        "id": "build-app",
        "title": "Claude Code veya Codex ile uygulamayı kuralım",
        "minutes": 20,
        "description": "Bu ana kadar hazırladığımız her şeyi tek bir göreve dönüştüreceğiz. Ajan uygulamayı kuracak; biz planı onaylayacak, test edecek ve yönlendireceğiz.",
        "steps": [
          "Aşağıdaki istemdeki köşeli parantezleri kendi soru, renk ve Supabase bilgilerimizle dolduracağız.",
          "İstemi Claude Code’a veya Codex’e vereceğiz; önce planını okuyup onaylayacağız.",
          "Uygulamayı açıp telefondan ve bilgisayardan birkaç kart göndereceğiz.",
          "Supabase Table Editor’de kartların satır satır geldiğini göreceğiz.",
          "Sayfayı yenileyeceğiz: Bu kez cevaplar kaybolmayacak! Öğretmen panelindeki sayıları kontrol edeceğiz.",
          "Hata çıkarsa hata mesajını ajana aynen yapıştırıp düzeltmesini isteyeceğiz."
        ],
        "output": "Veritabanına kaydeden ve öğretmen paneli olan çalışan Çıkış Kartı uygulaması.",
        "prompt": "Benim için “Çıkış Kartı” adlı basit bir web uygulaması geliştir.\n\nDOSYA: Tek bir index.html dosyası olsun (HTML, CSS ve JavaScript aynı dosyada). Telefona uygun, büyük ve okunaklı olsun. Renkler: [CANVA RENK KODLARI]\n\nÖĞRENCİ SEKMESİ:\n- “Bugünkü ders nasıldı?” ve 3 büyük düğme: 😀 Anladım, 😐 Kısmen, 😕 Zorlandım\n- Günün sorusu: [NOTEBOOKLM SORUSU] (seçenekler A, B, C)\n- “Bugün öğrendiğim bir şey” ve “Hâlâ merak ettiğim” kutuları\n- “Kartı gönder” düğmesi; gönderince “Teşekkürler!” mesajı çıksın ve form temizlensin\n\nÖĞRETMEN PANELİ SEKMESİ:\n- Toplam kart sayısı ve her duygudan kaç kart geldiği\n- Günün sorusunda doğru cevap oranı (doğru cevap: [A/B/C])\n- “Hâlâ merak ettiğim” cevaplarının listesi ve bir “Yenile” düğmesi\n\nVERİTABANI: Kartları Supabase’deki cikis_kartlari tablosuna kaydet ve oradan oku (sütunlar: duygu, cevap, ogrendigim, sorum). supabase-js kütüphanesini CDN’den kullan.\nProject URL: [SUPABASE PROJECT URL]\nPublishable (anon) key: [SUPABASE PUBLISHABLE KEY]\n\nKURALLAR: Öğrenciden ad, numara veya kişisel bilgi isteme. Gizli (secret / service_role) anahtar kullanma. Önce kısa bir plan yaz, sonra uygula ve nasıl test edeceğimi adım adım söyle."
      }
    ]
  },
  {
    "id": 4,
    "timeRange": "1:30 – 2:00",
    "duration": "30 dk",
    "title": "Paylaş: Yayın, analiz ve sunum",
    "subtitle": "GitHub, Netlify, Napkin & Gamma",
    "description": "Uygulamamızı GitHub’a kaydedip Netlify ile yayımlayacak, bağlantıyı QR koda çevirip sınıf kapısına taşıyacağız. Gelen kartları yapay zekâyla yorumlayacak, projemizi şema ve sunumla anlatacağız.",
    "outcome": "Yayında bir uygulama, kapıya asılacak QR afişi, yarınki ders için tekrar planı ve 5 slaytlık proje sunumu.",
    "icon": "Rocket",
    "lessons": [
      {
        "id": "publish-qr",
        "title": "GitHub’a kaydet, Netlify ile yayınla, QR ile sınıfa taşı",
        "minutes": 10,
        "description": "Uygulamamızı GitHub’da saklayacak, Netlify ile yayımlayacak ve bağlantıyı Canva’da QR koda çevirip kapıya asılacak bir afişe ekleyeceğiz.",
        "steps": [
          "GitHub’da yeni bir depo açıp index.html dosyamızı yükleyeceğiz; bu ilk tarihli kaydımız (commit) olacak.",
          "Dosyada yalnızca publishable anahtarın bulunduğunu, gizli anahtarın olmadığını kontrol edeceğiz.",
          "Netlify’da depoyu bağlayacak ya da klasörü sürükle-bırak ile yükleyip yayın bağlantısını alacağız.",
          "Canva’da bağlantıdan QR kod oluşturup aşağıdaki istemle kapı afişini hazırlayacağız."
        ],
        "output": "Yayında bir uygulama bağlantısı ve kapıya asılacak QR afişi.",
        "prompt": "“Çıkış Kartı” için A4 boyutunda bir sınıf kapısı afişi hazırla. Büyük başlık: “Çıkmadan önce kartını doldur!” Ortada QR kod için geniş bir alan, altında “1 dakika sürer” yazısı olsun. Logodaki mavi ve yeşil renkleri kullan; sade ve uzaktan okunaklı olsun."
      },
      {
        "id": "ai-analysis",
        "title": "Yapay zekâ ile sınıfın nabzını okuyalım",
        "minutes": 10,
        "description": "Gelen anonim kartları ChatGPT veya Claude ile yorumlayacak, yarınki derse küçük bir tekrar etkinliği çıkaracağız.",
        "steps": [
          "Supabase’de tabloyu CSV olarak dışa aktaracak ya da öğretmen panelindeki listeyi kopyalayacağız.",
          "Aşağıdaki istemle ChatGPT’ye veya Claude’a analiz ettireceğiz; sonucu panel sayılarıyla karşılaştıracağız.",
          "Zorlanılan konu için Conker veya Google Forms ile 5 soruluk bir mini test hazırlayabiliriz (isteğe bağlı).",
          "Son kararı öğretmen olarak biz vereceğiz: önerinin sınıfımıza uygun olup olmadığını değerlendireceğiz."
        ],
        "output": "Sınıfın durumu ve yarınki derse somut bir tekrar planı.",
        "prompt": "Aşağıda 5. sınıf fotosentez dersinden gelen anonim çıkış kartları var. Sınıfın genel durumunu 3 cümleyle özetle. Günün sorusunda en sık yapılan hatayı ve olası kavram yanılgısını açıkla. “Hâlâ merak ettiğim” cevaplarındaki ortak 3 konuyu yaz. Yarınki dersin başında uygulanacak 10 dakikalık bir tekrar etkinliği öner.\n\n[KARTLARI BURAYA YAPIŞTIR]"
      },
      {
        "id": "present-project",
        "title": "Projemizi anlatalım: Napkin şeması ve Gamma sunumu",
        "minutes": 10,
        "description": "Uygulamanın nasıl çalıştığını Napkin AI ile şemaya dökecek, Gamma ile 5 slaytlık bir proje sunumu hazırlayacağız.",
        "steps": [
          "Napkin AI’a veri akışını yazıp bir şema seçeceğiz: Öğrenci → Uygulama → Veritabanı → Öğretmen paneli → Yapay zekâ yorumu.",
          "Gamma’da aşağıdaki istemle sunumu oluşturup şemayı ekleyeceğiz.",
          "İsteyen Claude Cowork ile proje klasöründen bir sayfalık kullanım kılavuzu hazırlatabilir.",
          "Kapanış: Günün sorusunu kendi branşımıza göre değiştirip uygulamayı yarın sınıfta kullanacağız."
        ],
        "output": "Projemizi anlatan bir şema ve 5 slaytlık sunum.",
        "prompt": "“Çıkış Kartı” projemiz için 5 slaytlık bir sunum hazırla:\n1) Problem: Ders sonunda kimin neyi anladığını bilmiyoruz.\n2) Çözüm: 1 dakikalık dijital çıkış kartı.\n3) Nasıl çalışır: Öğrenci → Uygulama → Veritabanı → Öğretmen paneli → Yapay zekâ yorumu.\n4) Kullandığımız araçlar ve amaçları.\n5) Sonraki adım: Kendi branşıma nasıl uyarlarım?\nSade, görsel ağırlıklı ve öğretmenler için anlaşılır olsun."
      }
    ]
  }
];

export const learningTools: LearningTool[] = [
  {
    "id": "chatgpt",
    "name": "ChatGPT",
    "label": "CG",
    "day": 1,
    "url": "https://chatgpt.com",
    "description": "Fikir ve metin geliştirmek için sohbet asistanı.",
    "activity": "Çıkış Kartı’nın planını çıkaracak, gelen kartları yorumlayıp yarınki derse öneri alacağız.",
    "purpose": "Planlama ve analizde hızlı bir ilk taslak almak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "claude",
    "name": "Claude",
    "label": "Cl",
    "day": 1,
    "url": "https://claude.ai",
    "description": "Chat, Projects ve Artifacts ile sohbet, kaynak ve çıktı çalışma alanı.",
    "activity": "Aynı istemi ChatGPT ile karşılaştıracak, proje planını Projects içine kaydedecek, kart analizinde ikinci görüş alacağız.",
    "purpose": "Proje bilgisini tek yerde tutup her adımda aynı bağlamla çalışmak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "gemini",
    "name": "Google Gemini",
    "label": "Ge",
    "day": 1,
    "url": "https://gemini.google.com",
    "description": "Metin ve dosyalarla çalışabileceğimiz yapay zekâ asistanı.",
    "activity": "Aynı istemi üçüncü bir modelde deneyip yanıtları karşılaştıracağız.",
    "purpose": "Farklı modellerin aynı göreve nasıl yaklaştığını görmek için kullanacağız.",
    "optional": true
  },
  {
    "id": "notebooklm",
    "name": "NotebookLM",
    "label": "N",
    "day": 2,
    "url": "https://notebooklm.google.com",
    "description": "Eklediğimiz kaynaklar üzerinden çalışan araştırma yardımcısı.",
    "activity": "Ders notumuzdan kaynağa dayalı günün sorusunu hazırlayacağız.",
    "purpose": "Sorunun kendi kaynağımıza dayandığını kontrol edebilmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "canva",
    "name": "Canva",
    "label": "Ca",
    "day": 2,
    "url": "https://www.canva.com",
    "description": "Görsel, afiş ve sunum tasarım aracı.",
    "activity": "Uygulamamızın logosunu ve renklerini belirleyecek; yayın bağlantısından QR kodlu kapı afişi hazırlayacağız.",
    "purpose": "Uygulamaya bir kimlik vermek ve onu sınıfa taşımak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "canva-code",
    "name": "Canva Code",
    "label": "</>",
    "day": 2,
    "url": "https://www.canva.com/ai/code/",
    "description": "Canva içinde tarif ederek etkileşimli içerik taslakları hazırlama özelliği.",
    "activity": "Çıkış Kartı’nın ilk ekranını veritabanı olmadan hızlıca kuracağız.",
    "purpose": "Fikri dakikalar içinde görünür kılmak ve veritabanı ihtiyacını keşfetmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "supabase",
    "name": "Supabase",
    "label": "Su",
    "day": 3,
    "url": "https://supabase.com",
    "description": "Veritabanı ve erişim kuralları sunan uygulama altyapısı.",
    "activity": "Kartları saklayacağımız tabloyu kuracak ve kimin ne yapabileceğini belirleyeceğiz.",
    "purpose": "Sayfa yenilense de cevapların kaybolmaması ve öğretmen panelinin verileri okuyabilmesi için kullanacağız.",
    "optional": false
  },
  {
    "id": "claude-code",
    "name": "Claude Code",
    "label": "CC",
    "day": 3,
    "url": "https://code.claude.com/docs/en/overview",
    "description": "Proje dosyalarıyla çalışan, plan yapıp kod yazan geliştirme ajanı.",
    "activity": "Tek istemle öğrenci ekranı, öğretmen paneli ve veritabanı bağlantısı olan uygulamayı kuracağız.",
    "purpose": "Öğretmen fikrini çalışan bir uygulamaya dönüştürmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "codex",
    "name": "OpenAI Codex",
    "label": "Cx",
    "day": 3,
    "url": "https://developers.openai.com/codex/",
    "description": "Proje planlama, dosya geliştirme ve test süreçlerinde çalışan yapay zekâ ajanı.",
    "activity": "Aynı istemi Codex’e verip uygulamayı kuracak, sonucu Claude Code ile karşılaştıracağız.",
    "purpose": "İki ajanın aynı göreve yaklaşımını görmek ve elimizdeki üyeliğe göre seçebilmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "forms",
    "name": "Google Forms",
    "label": "Fo",
    "day": 3,
    "url": "https://forms.google.com",
    "description": "Form ve çevrimiçi değerlendirme hazırlama aracı.",
    "activity": "Aynı veriyi kodsuz toplamanın yolunu görecek; istersek zorlanılan konuya mini test hazırlayacağız.",
    "purpose": "Hazır form ile kendi uygulamamız arasındaki farkı anlamak için kullanacağız.",
    "optional": true,
    "alsoOnDays": [
      4
    ]
  },
  {
    "id": "github",
    "name": "GitHub",
    "label": "GH",
    "day": 4,
    "url": "https://github.com",
    "description": "Proje dosyalarını ve sürümlerini saklama platformu.",
    "activity": "Uygulama dosyamızı bir depoya kaydedip ilk tarihli kaydımızı oluşturacağız.",
    "purpose": "Değişiklikleri takip etmek ve yayına hazırlamak için kullanacağız.",
    "optional": false
  },
  {
    "id": "netlify",
    "name": "Netlify",
    "label": "Ne",
    "day": 4,
    "url": "https://www.netlify.com",
    "description": "Web uygulamalarını yayımlama platformu.",
    "activity": "Uygulamamızı yayımlayıp paylaşılabilir bir bağlantı alacağız.",
    "purpose": "Uygulamayı öğrencilerin telefonuna ulaştırmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "napkin",
    "name": "Napkin AI",
    "label": "Na",
    "day": 4,
    "url": "https://napkin.ai",
    "description": "Metindeki fikirleri diyagrama dönüştürme aracı.",
    "activity": "Uygulamanın veri akışını tek bir şemayla anlatacağız.",
    "purpose": "Görünmeyen veri yolculuğunu herkesin anlayacağı hâle getirmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "gamma",
    "name": "Gamma",
    "label": "Ga",
    "day": 4,
    "url": "https://gamma.app",
    "description": "İçeriği sunum ve belge taslağına dönüştürme aracı.",
    "activity": "Projemizi 5 slaytlık bir sunumla anlatacağız.",
    "purpose": "Ürettiğimizi meslektaşlarımızla paylaşmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "conker",
    "name": "Conker",
    "label": "C",
    "day": 4,
    "url": "https://www.conker.ai",
    "description": "Öğretmenler için soru ve değerlendirme taslağı üretme aracı.",
    "activity": "Kartlarda zorlanılan konu için 5 soruluk mini test hazırlayacağız.",
    "purpose": "Analizden çıkan ihtiyaca hızlı bir değerlendirmeyle yanıt vermek için kullanacağız.",
    "optional": true
  },
  {
    "id": "cowork",
    "name": "Claude Cowork",
    "label": "Cw",
    "day": 4,
    "url": "https://claude.com/product/cowork",
    "description": "Dosyalar ve tekrar eden işler üzerinde görevlerle çalışma alanı.",
    "activity": "Proje klasöründen bir sayfalık kullanım kılavuzu hazırlatacağız.",
    "purpose": "Dosya odaklı işleri yapay zekâya devretmeyi görmek için kullanacağız.",
    "optional": true
  }
];

export function toolAppearsOnDay(tool: LearningTool, day: number) {
  return tool.day === day || Boolean(tool.alsoOnDays?.includes(day));
}

export function toolDayLabel(tool: LearningTool) {
  return [tool.day, ...(tool.alsoOnDays || [])].sort((a, b) => a - b).map(day => `${day}. bölüm`).join(' · ');
}

// Shared program facts keep the assistant consistent with the site.
export const curriculumContext = `${trainingInfo.title}
Tarih: ${trainingInfo.dateLabel}, saat ${trainingInfo.startTime} (Türkiye saati). Süre: ${trainingInfo.duration} (${trainingInfo.schedule}). Katılım: ${trainingInfo.format}. Araç sayısı: ${trainingInfo.toolCount}.
Katılımcılar: ${trainingInfo.audience}. Temel dijital beceriler yeterlidir. Tüm kaynaklarımız: ${trainingInfo.resourcesUrl}.
Eğitim öncesi: Eğitim uygulamalı olduğu için bilgisayarla katılım önerilir. Eğitimde ChatGPT ve Claude’un ücretli sürümleri kullanılacak; dileyen katılımcılar bu üyelikleri eğitimden önce satın alabilir. Gmail (Google) hesabı açık ve kullanıma hazır olmalıdır. Kontenjan ${trainingInfo.participantLimit} kişiyle sınırlıdır; eğitim başlamadan önce Zoom bağlantısına giriş yapılması önerilir. Zoom bağlantısı, toplantı kimliği ve parola katılımcılara özel iletilir ve sitede yer almaz.
Eğitmen: ${trainingInfo.trainers.map(trainer => `${trainer.name}: ${trainer.role}`).join('; ')}.
Proje: ${project.name}. ${project.summary} Akış: ${project.flow.join(' → ')}. ${project.anyBranch}
Temel kavramlar: ${concepts.map(concept => `${concept.term} = ${concept.analogy}: ${concept.text}`).join(' ')}
` + trainingDays.map(day => `${day.id}. Bölüm (${day.timeRange}, ${day.duration}): ${day.title}. ${day.description}
${day.lessons.map(lesson => `${lesson.title} (${lesson.minutes} dk): ${lesson.description}`).join('\n')}
Araçlar: ${learningTools.filter(tool => toolAppearsOnDay(tool, day.id)).map(tool => `${tool.name} (${tool.url}): ${tool.activity} ${tool.purpose}`).join('\n')}`).join('\n\n');
