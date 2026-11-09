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
}

// Each entry is one 45-minute part of the 3-hour training.
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
  "schedule": "4 bölüm × 45 dakika",
  "format": "Online · Canlı eğitim + kayıt",
  "toolCount": 15,
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

export const trainingDays: TrainingDay[] = [
  {
    "id": 1,
    "timeRange": "0:00 – 0:45",
    "duration": "45 dk",
    "title": "İstem tasarımı ve yapay zekâ asistanları",
    "subtitle": "İstemler, ChatGPT, Gemini & Claude",
    "description": "Etkili istem yazacak; ChatGPT, Gemini ve Claude ile aynı eğitim görevini deneyeceğiz. NotebookLM ile ders notumuzu kaynağa dayalı bir içerik paketine dönüştüreceğiz.",
    "outcome": "Tekrar kullanabileceğimiz bir ders istemi ve kontrol edilmiş bir içerik paketi hazırlayacağız.",
    "icon": "Sparkles",
    "lessons": [
      {
        "id": "ai-basics",
        "title": "Yapay zekâyı çalışma arkadaşımız yapacağız",
        "minutes": 10,
        "description": "ChatGPT, Gemini ve Claude ile aynı eğitim sorusunu deneyeceğiz. Yanıtları karşılaştıracak; doğruluk, yaş düzeyi ve ders hedefi açısından kontrol edeceğiz.",
        "steps": [
          "Bir ders ve kazanım seçeceğiz; yapay zekâdan üç etkinlik fikri isteyeceğiz.",
          "Önerileri kendi ders bilgimiz ve kaynaklarımızla karşılaştıracağız.",
          "Geliştirilmesi gereken yanıtı geri bildirim vererek yeniden hazırlatacağız."
        ],
        "output": "Kontrol edilmiş bir etkinlik fikri."
      },
      {
        "id": "rgb-prompt",
        "title": "Rol, hedef ve sınırlarla istem yazacağız",
        "minutes": 15,
        "description": "Ne istediğimizi anlaşılır biçimde anlatmak için rol, hedef, bağlam ve sınırları belirleyeceğiz. Aynı istemi farklı araçlarda kullanacağız.",
        "steps": [
          "Yapay zekânın rolünü ve öğrencilerimizin sınıf düzeyini belirleyeceğiz.",
          "Konu, kazanım, süre ve beklediğimiz çıktı biçimini yazacağız.",
          "İlk çıktıyı değerlendirecek; eksik noktalar için yeni talimat vereceğiz."
        ],
        "output": "Tekrar kullanabileceğimiz bir ders istemi.",
        "prompt": "Sen bir fen bilimleri öğretmenisin. 5. sınıf öğrencileri için fotosentezi anlatan 20 dakikalık bir etkinlik planı hazırla. Amaç, malzemeler, uygulama adımları ve 3 değerlendirme sorusu ekle. Dili sade tut; bilimsel doğruluğu kontrol et."
      },
      {
        "id": "google-content",
        "title": "NotebookLM ve Gemini ile ders notunu içerik paketine dönüştüreceğiz",
        "minutes": 20,
        "description": "Bir ders notunu NotebookLM’e kaynak olarak ekleyecek, kaynağa dayalı özet ve sorular hazırlayacağız. Gemini ile aynı içeriği çalışma kâğıdı ve etkinlik taslağına dönüştüreceğiz.",
        "steps": [
          "Kişisel veri içermeyen bir ders notunu NotebookLM’e kaynak olarak ekleyeceğiz.",
          "Kısa özet, kavram listesi ve kaynağa dayalı sorular hazırlatacağız.",
          "Gemini ile aynı içerikten bir çalışma kâğıdı taslağı oluşturacağız.",
          "Her bilginin kaynakta karşılığı olduğunu kontrol edeceğiz."
        ],
        "output": "Bir ders notundan üretilmiş, kontrol edilmiş içerik paketi."
      }
    ]
  },
  {
    "id": 2,
    "timeRange": "0:45 – 1:30",
    "duration": "45 dk",
    "title": "Görsel, sunum ve etkileşimli içerik",
    "subtitle": "Canva, Canva Code & Gamma",
    "description": "Canva AI ile ders görseli hazırlayacak, Canva Code ile etkileşimli bir etkinlik oluşturacak ve Gamma ile ders akışımızı sunuma dönüştüreceğiz.",
    "outcome": "Görsel, etkileşimli etkinlik ve sunumdan oluşan bir materyal paketi hazırlayacağız.",
    "icon": "Palette",
    "lessons": [
      {
        "id": "visual-design",
        "title": "Kavramları görsellerle anlatacağız",
        "minutes": 10,
        "description": "Canva AI ile ders kazanımına uygun bir afiş veya ders görseli hazırlayacağız. Görsel üretimini konu anlatımına destek olacak şekilde yönlendireceğiz.",
        "steps": [
          "Görselin anlatacağı tek bir kavramı seçeceğiz.",
          "Canva’da görsel, başlık ve açıklamaları hazırlayıp düzenleyeceğiz.",
          "Okunabilirliği, kullanım haklarını ve yaş düzeyini kontrol edeceğiz."
        ],
        "output": "Dersimizde kullanacağımız bir görsel materyal."
      },
      {
        "id": "canva-code-activity",
        "title": "Canva Code ile etkileşimli ders etkinliği hazırlayacağız",
        "minutes": 20,
        "description": "Canva Code’a ders hedefimizi ve öğrencinin yapacağı işlemi sade bir görev olarak tarif edeceğiz. Hazırlanan etkileşimli taslağı deneyip öğretmen olarak geliştireceğiz.",
        "steps": [
          "Ders, sınıf düzeyi ve etkinlik kazanımını belirleyeceğiz.",
          "Eşleştirme, bilgi kartı veya kısa değerlendirme gibi küçük bir etkileşim tarif edeceğiz.",
          "Canva Code’un oluşturduğu taslağı örnek yanıtlarla test edeceğiz.",
          "Hatalı bilgi, okunabilirlik ve telefon kullanımı için geri bildirim verip düzenleyeceğiz."
        ],
        "output": "Canva Code ile hazırlanmış ve kontrol edilmiş etkileşimli ders taslağı.",
        "prompt": "5. sınıf öğrencileri için fotosentez konusunu öğreten bir eşleştirme etkinliği hazırla. Öğrenci doğru eşleştirmede kısa geri bildirim alsın. Sade Türkçe kullan, büyük ve okunaklı düğmeler ekle, telefon ekranına uyum sağla."
      },
      {
        "id": "presentation-diagram",
        "title": "Sunum ve kavram haritası hazırlayacağız",
        "minutes": 15,
        "description": "Gamma ile konu akışımızı sunuma dönüştüreceğiz. İstersek Napkin AI ile metindeki ilişkileri diyagramlaştıracağız.",
        "steps": [
          "Dersin giriş, uygulama ve değerlendirme bölümünü planlayacağız.",
          "Gamma’da sunum taslağını oluşturup bilgi ve sıralamayı düzenleyeceğiz.",
          "Napkin AI ile bir süreç veya kavram haritası hazırlayıp sunumumuza ekleyeceğiz."
        ],
        "output": "Kısa bir ders sunumu ve açıklayıcı bir diyagram."
      }
    ]
  },
  {
    "id": 3,
    "timeRange": "1:30 – 2:15",
    "duration": "45 dk",
    "title": "Codex ve Claude ile ajanlarla üretim",
    "subtitle": "Codex, Claude Code & Cowork",
    "description": "Sohbet etmekten görev vermeye geçeceğiz. Branşımıza özel bir öğretmen asistanı tasarlayacak; Codex ve Claude Code ile küçük bir eğitim uygulaması prototipi geliştireceğiz.",
    "outcome": "Bir öğretmen asistanı tanımı ve çalışan bir uygulama prototipi hazırlayacağız.",
    "icon": "Terminal",
    "lessons": [
      {
        "id": "agent-task",
        "title": "Sohbet etmekten görev vermeye geçeceğiz",
        "minutes": 10,
        "description": "Codex ve Claude ekosistemlerinde fikir isteme ile açık bir üretim görevi verme arasındaki farkı göreceğiz. Hedef, plan, uygulama, kontrol ve düzeltme adımlarını birlikte yürüteceğiz.",
        "steps": [
          "“Bir etkinlik fikri ver” ile “Etkileşimli bir etkinlik oluştur” görevlerini karşılaştıracağız.",
          "Ders, konu, kazanım, sınıf düzeyi, cihaz ve tasarım beklentilerimizi açıkça yazacağız.",
          "Büyük işi küçük, kontrol edilebilir görevlere ayıracağız.",
          "Claude Cowork’ün dosya odaklı görevlerde nasıl çalıştığını örnekle göreceğiz."
        ],
        "output": "Ajanın uygulayabileceği açık ve aşamalı bir görev tanımı."
      },
      {
        "id": "teacher-assistant",
        "title": "Branşımıza özel bir AI öğretmen asistanı tasarlayacağız",
        "minutes": 15,
        "description": "Asistanımızın hangi ders için ve hangi sınırlar içinde çalışacağını belirleyeceğiz. ChatGPT veya Claude Projects ile talimatları ve kaynakları bir araya getireceğiz.",
        "steps": [
          "Branş, sınıf düzeyi, kaynaklar ve yanıt kurallarını belirleyeceğiz.",
          "Asistana ders planı ve öğrenci sorusu gibi örnek görevler vereceğiz.",
          "Bilmediği konuyu belirtmesini ve cevap yerine ipucu vermesini test edeceğiz."
        ],
        "output": "Kendi branşımıza göre tanımlanmış bir öğretmen asistanı taslağı."
      },
      {
        "id": "claude-code-project",
        "title": "Codex ve Claude Code ile uygulama prototipi geliştireceğiz",
        "minutes": 20,
        "description": "Aynı uygulama hedefini Codex ve Claude Code ile deneyeceğiz. Ajanın planını inceleyecek, küçük adımlarla geliştirecek ve sonucu test edeceğiz.",
        "steps": [
          "Uygulama fikrini Codex ve Claude Code için aynı gereksinimlerle tarif edeceğiz.",
          "Ajanın önerdiği planı ve dosya değişikliklerini inceleyeceğiz.",
          "Uygulamayı çalıştıracak; bir hatayı okuyup küçük bir düzeltmeyle yeniden test edeceğiz.",
          "Ortaya çıkan ürünü eğitimsel uygunluk ve kullanılabilirlik açısından değerlendireceğiz."
        ],
        "output": "Konu anlatımı ve etkileşimi çalışan ilk prototipimiz.",
        "prompt": "5. sınıf fotosentez konusunu öğreten mobil uyumlu bir web uygulaması geliştireceğiz. Önce mevcut dosyaları incele ve plan öner. Konu anlatımı, etkileşimli etkinlik ve geri bildirimli üç soru ekle. Değişiklikleri küçük adımlarla yap; her adımda neyi test edeceğimizi belirt. Öğrenci kişisel verilerini toplama."
      }
    ]
  },
  {
    "id": 4,
    "timeRange": "2:15 – 3:00",
    "duration": "45 dk",
    "title": "Ölçme, değerlendirme ve yayınlama",
    "subtitle": "Test, rubrik & yayın",
    "description": "Kazanıma uygun sorular ve rubrik hazırlayacak, Google Forms ile değerlendirmeyi çevrimiçi hâle getireceğiz. Prototipimizi GitHub’a kaydedip Netlify ile paylaşılabilir bir bağlantıya dönüştüreceğiz.",
    "outcome": "Paylaşılabilir bir değerlendirme etkinliği ve yayına hazır bir proje elde edeceğiz.",
    "icon": "Rocket",
    "lessons": [
      {
        "id": "assessment",
        "title": "Sorular ve değerlendirme rubriği hazırlayacağız",
        "minutes": 15,
        "description": "ChatGPT, Claude veya Conker ile kazanıma uygun soru taslağı oluşturacağız. Proje çıktısını değerlendirmek için açık ölçütleri olan bir rubrik hazırlayacağız.",
        "steps": [
          "Kazanım ve sınıf düzeyine göre sorular üreteceğiz.",
          "Cevap anahtarını ve çeldiricileri öğretmen olarak kontrol edeceğiz.",
          "Doğruluk, açıklama ve kullanılabilirlik için rubrik yazacağız."
        ],
        "output": "Kontrol edilmiş kısa test ve proje rubriği.",
        "prompt": "5. sınıf fotosentez konusu için 5 soruluk bir değerlendirme ve cevap anahtarı hazırla. Her sorunun ölçtüğü kazanımı belirt. Sonra öğrencinin etkileşimli uygulama projesi için doğruluk, anlaşılır anlatım ve kullanılabilirlik ölçütlerini içeren üç düzeyli bir rubrik oluştur."
      },
      {
        "id": "quiz-share",
        "title": "Değerlendirmeyi etkileşimli hâle getireceğiz",
        "minutes": 10,
        "description": "Hazırladığımız soruları Google Forms ile çevrimiçi bir değerlendirme etkinliğine dönüştüreceğiz.",
        "steps": [
          "Soruları Google Forms’a ekleyip cevap anahtarını tanımlayacağız.",
          "Bir örnek yanıtla doğru cevapları ve geri bildirimleri test edeceğiz.",
          "Sonuçlara bakarak hangi konuyu yeniden ele alacağımızı belirleyeceğiz."
        ],
        "output": "Paylaşılabilir bir değerlendirme etkinliği."
      },
      {
        "id": "github-publish",
        "title": "GitHub ile saklayacak, Netlify ile yayımlayacağız",
        "minutes": 20,
        "description": "GitHub’da depo, dosya ve sürüm kavramlarını tanıyacağız. Prototipimizi GitHub’a kaydedecek, Netlify ile yayımlayacak ve farklı ekranlarda son kontrolü yapacağız.",
        "steps": [
          "GitHub’da bir depo açacak, proje dosyalarımızı ve README açıklamasını ekleyeceğiz.",
          "Bir değişikliğin commit ile nasıl kaydedildiğini ve geçmişte nasıl izlendiğini göreceğiz.",
          "Netlify ile arayüzümüzü yayımlayıp paylaşılabilir bağlantıyı alacağız.",
          "Telefon ve bilgisayarda bağlantıları, okunabilirliği ve soruları kontrol edeceğiz.",
          "API anahtarlarının ve kişisel verilerin depoda ve yayın dosyalarında bulunmadığını doğrulayacağız."
        ],
        "output": "Sürümü kayıtlı ve paylaşılabilir bağlantısı olan bir proje."
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
    "activity": "Ders planı, etkinlik fikri, asistan talimatı ve soru taslağı hazırlayacağız.",
    "purpose": "İlk taslağı hızlı oluşturmak ve alternatifleri karşılaştırmak için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      3,
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
    "activity": "Ders notlarımızı çalışma kâğıdı ve etkinlik taslağına dönüştüreceğiz.",
    "purpose": "Birden fazla öneriyi değerlendirip dersimize uygun olanı seçmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "claude",
    "name": "Claude",
    "label": "Cl",
    "day": 1,
    "url": "https://claude.ai",
    "description": "Chat, Projects ve Artifacts ile sohbet, kaynak ve çıktı çalışma alanı.",
    "activity": "Ders içeriği üretecek, Projects içinde branş asistanımızın kaynaklarını ve talimatlarını düzenleyeceğiz.",
    "purpose": "Kaynakları ve ortak talimatları bir araya getirip dersimize uygun çıktıları geliştirmek için kullanacağız.",
    "optional": false,
    "alsoOnDays": [
      3,
      4
    ]
  },
  {
    "id": "notebooklm",
    "name": "NotebookLM",
    "label": "N",
    "day": 1,
    "url": "https://notebooklm.google.com",
    "description": "Eklediğimiz kaynaklar üzerinden çalışan araştırma yardımcısı.",
    "activity": "Ders notlarımızdan özet ve kaynaklara dayalı sorular hazırlayacağız.",
    "purpose": "Kendi kaynaklarımızla çalışmak ve yanıtın dayanağını kontrol etmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "canva",
    "name": "Canva",
    "label": "Ca",
    "day": 2,
    "url": "https://www.canva.com",
    "description": "Görsel, çalışma kâğıdı ve sunum tasarım aracı.",
    "activity": "Dersimiz için afiş veya ders görseli hazırlayacağız.",
    "purpose": "İçeriği okunabilir ve görsel olarak anlaşılır hâle getirmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "canva-code",
    "name": "Canva Code",
    "label": "</>",
    "day": 2,
    "url": "https://www.canva.com/ai/code/",
    "description": "Canva içinde tarif ederek etkileşimli içerik taslakları hazırlama özelliği.",
    "activity": "Bir ders etkinliğini tarif edecek; etkileşimli kart, kısa alıştırma veya mini değerlendirme taslağı hazırlayacağız.",
    "purpose": "Görsel materyalimizi öğrencinin katılabildiği bir öğrenme etkinliğine dönüştürmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "gamma",
    "name": "Gamma",
    "label": "Ga",
    "day": 2,
    "url": "https://gamma.app",
    "description": "İçeriği sunum ve belge taslağına dönüştürme aracı.",
    "activity": "Ders akışımızdan kısa bir sunum oluşturup düzenleyeceğiz.",
    "purpose": "Sunumun ilk taslağını hazırlamak ve içeriğe odaklanmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "napkin",
    "name": "Napkin AI",
    "label": "Na",
    "day": 2,
    "url": "https://napkin.ai",
    "description": "Metindeki fikirleri diyagrama dönüştürme aracı.",
    "activity": "Bir süreci veya kavram ilişkisini şemayla anlatacağız.",
    "purpose": "Karmaşık ilişkileri öğrencilerimiz için görünür kılmak amacıyla kullanacağız.",
    "optional": true
  },
  {
    "id": "codex",
    "name": "OpenAI Codex",
    "label": "Cx",
    "day": 3,
    "url": "https://developers.openai.com/codex/",
    "description": "Proje planlama, dosya geliştirme ve test süreçlerinde çalışan yapay zekâ ajanı.",
    "activity": "Claude Code ile aynı eğitim uygulaması hedefini deneyecek; dosyaları geliştirip test edeceğiz.",
    "purpose": "Öğretmen fikrimizi çalışan bir projeye dönüştürmek ve iki ekosistemin çalışma biçimlerini birlikte öğrenmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "claude-code",
    "name": "Claude Code",
    "label": "CC",
    "day": 3,
    "url": "https://code.claude.com/docs/en/overview",
    "description": "Proje klasöründe kod ve dosyalarla çalışan geliştirme ajanı.",
    "activity": "Codex ile aynı uygulama hedefini deneyecek; dosyaları geliştirecek, hataları inceleyecek ve test edeceğiz.",
    "purpose": "Kod geliştirme ve hata çözme yöntemlerini iki ekosistemde karşılaştırmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "cowork",
    "name": "Claude Cowork",
    "label": "Cw",
    "day": 3,
    "url": "https://claude.com/product/cowork",
    "description": "Dosya ve tekrar eden işler üzerinde görevlerle çalışma alanı.",
    "activity": "Dosya düzenleme gibi tekrar eden bir işi örnek görevle inceleyeceğiz.",
    "purpose": "Sohbetten dosya odaklı görev yönetimine geçişi görmek için kullanacağız.",
    "optional": true
  },
  {
    "id": "conker",
    "name": "Conker",
    "label": "C",
    "day": 4,
    "url": "https://www.conker.ai",
    "description": "Öğretmenler için soru ve değerlendirme taslağı üretme aracı.",
    "activity": "Kazanımımıza uygun kısa test hazırlayıp cevapları kontrol edeceğiz.",
    "purpose": "Soru taslağı hazırlamak ve öğrenmeyi değerlendirmek için kullanacağız.",
    "optional": true
  },
  {
    "id": "forms",
    "name": "Google Forms",
    "label": "Fo",
    "day": 4,
    "url": "https://forms.google.com",
    "description": "Form ve çevrimiçi değerlendirme hazırlama aracı.",
    "activity": "Sorularımızı forma ekleyip örnek cevaplarla deneyeceğiz.",
    "purpose": "Yanıtları toplamak ve öğrenme durumunu görmek için kullanacağız.",
    "optional": false
  },
  {
    "id": "github",
    "name": "GitHub",
    "label": "GH",
    "day": 4,
    "url": "https://github.com",
    "description": "Proje dosyalarını ve sürümlerini saklama platformu.",
    "activity": "Prototipimizin dosyalarını bir depoya kaydedip sürüm geçmişini inceleyeceğiz.",
    "purpose": "Değişiklikleri takip etmek ve projemizi paylaşmak için kullanacağız.",
    "optional": false
  },
  {
    "id": "netlify",
    "name": "Netlify",
    "label": "Ne",
    "day": 4,
    "url": "https://www.netlify.com",
    "description": "Web arayüzlerini yayımlama platformu.",
    "activity": "Arayüzümüzü yayımlayıp paylaşılabilir bir bağlantı alacağız.",
    "purpose": "Hazırladığımız arayüzü bir bağlantıyla paylaşmak için kullanacağız.",
    "optional": false
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
` + trainingDays.map(day => `${day.id}. Bölüm (${day.timeRange}, ${day.duration}): ${day.title}. ${day.description}
${day.lessons.map(lesson => `${lesson.title} (${lesson.minutes} dk): ${lesson.description}`).join('\n')}
Araçlar: ${learningTools.filter(tool => toolAppearsOnDay(tool, day.id)).map(tool => `${tool.name} (${tool.url}): ${tool.activity} ${tool.purpose}`).join('\n')}`).join('\n\n');
