import { Topic } from '../types';

export const session3Categories = [
  { id: 'ajan_mimarisi', title: 'Yapay Zeka Ajan Mimarisi', desc: 'Ajan yapılarının (AI Agents) karar alma ve otonom çalışma süreçleri.' },
  { id: 'cozumler_ve_entegrasyon', title: 'Araç Çağırma & Dış Entegrasyonlar', desc: 'LLM\'leri gerçek dünya API\'leri ve kod fonksiyonları ile bağlama.' }
];

export const session3Topics: Topic[] = [
  {
    id: 'ajan-mimarisi',
    category: 'ajan_mimarisi',
    title: 'Yapay Zeka Ajanı Mimarisi (Agentic Frameworks)',
    shortDesc: 'ReAct (Reasoning and Acting) modeli, otonom planlama, hafıza yönetimi ve ajanların sistem mantığı.',
    icon: 'Bot',
    content: {
      overview: 'Yapay zeka ajanları, sadece kendilerine verilen girdilere statik cevaplar üreten sistemler değildir. Bir hedefe ulaşmak için kendi başlarına eylem planı yapan, araçları (tool) kullanan ve hatalarından ders çıkaran döngüsel yapılardır.',
      keyPoints: [
        'ReAct Modeli: "Düşün (Thought) - Eyleme Geç (Act) - Gözlemle (Observe)" metodolojisiyle çalışan, insan benzeri problem çözme döngüsü.',
        'Hafıza Yönetimi: Kısa süreli (Short-term / Context) ve uzun süreli (Long-term / Vektör Veritabanları) hafıza türleriyle ajanların bilgiyi saklama pratikleri.',
        'Görev Bölümleme: Karmaşık hedefleri küçük alt görevlere bölüp hiyerarşik alt ajanlar (Sub-agents) vasıtasıyla paralel yönetebilme gücü.',
        'Hata Yönetimi (Self-Correction): Kod çalıştırırken veya veri ararken hata aldığında, hatayı okuyup alternatif komutlarla hedefe ulaşana kadar deneme yeteneği.'
      ],
      tipsOrCode: `// Tipik Bir ReAct Ajanının Çalışma Düşünce Döngüsü:
[THOUGHT] Kullanıcı "İstanbul'da yarın hava nasıl, ona göre dışarı etkinlik planı yap" dedi. Öncelikle İstanbul için yarınki hava durumunu öğrenmem gerekiyor.
[ACT] get_weather_forecast(location: "Istanbul", date: "tomorrow")
[OBSERVATION] { status: "Rainy", temperature_c: 12, precipitation_prob: "85%" }
[THOUGHT] Hava yağmurlu görünüyor. Bu durumda dış mekan yerine kapalı alan aktiviteleri (müze, sinema vb.) önermeliyim.
[ACT] search_indoor_activities(location: "Istanbul")
...`,
      links: [
        {
          title: 'Flowise AI',
          description: 'Low-code / Drag-and-drop arayüzü ile LLM zincirleri, RAG sistemleri ve otonom yapay zekâ ajanları tasarlamanızı sağlayan geliştirici aracı.',
          url: 'https://flowiseai.com'
        },
        {
          title: 'LM Studio',
          description: 'Açık kaynaklı yapay zekâ modellerini yerel bilgisayarınızda (offline) indirip yerel sunucu (API) olarak koşturmanızı sağlayan uygulama.',
          url: 'https://lmstudio.ai'
        },
        {
          title: 'Ollama',
          description: 'Terminal üzerinden Llama 3, Qwen 2.5 ve Mistral gibi açık kaynak modelleri tek komutla kurup yerel API sağlayan güçlü yazılım.',
          url: 'https://ollama.com'
        }
      ]
    }
  },
  {
    id: 'tool-calling',
    category: 'cozumler_ve_entegrasyon',
    title: 'Fonksiyon Çağırma (Tool / Function Calling)',
    shortDesc: 'Yapay zekanın kendi ürettiği parametrelerle yazılımsal fonksiyonları otonom olarak tetiklemesi.',
    icon: 'Cpu',
    content: {
      overview: 'Fonksiyon çağırma, bir konuşma modelinin (LLM) dış dünyaya dokunmasını sağlayan en kritik köprüdür. Model doğrudan kodu çalıştırmaz; sizin tanımladığınız fonksiyon şemalarına bakarak hangi fonksiyonu hangi argümanlarla çağırması gerektiğine karar verir (JSON üretir).',
      keyPoints: [
        'Şema (Schema) Tanımlama: Fonksiyonun amacını, aldığı parametre tiplerini ve açıklamalarını modele "System Instruction" düzeyinde öğretmek.',
        'JSON Parametre Üretimi: Model kullanıcının niyetini anlar ve düz metinden parametrik JSON çıktı üretir (örn: { "amount": 100, "currency": "TRY" }).',
        'Fonksiyon İcrası: Sunucunuz üretilen JSON girdisini alarak gerçek fonksiyonu (örn: DB kaydı, e-posta gönderimi) koşturur.',
        'Sonuç Geri Bildirimi: Fonksiyonun ürettiği cevap (Response) modele geri beslenir ve model nihai insan dostu cevabı hazırlar.'
      ],
      tipsOrCode: `// Gemini API ile Fonksiyon (Tool) Tanımlama Örneği (TypeScript SDK):
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const weatherTool = {
  functionDeclarations: [{
    name: "getWeather",
    description: "Belirtilen şehrin güncel hava durumunu getirir.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        city: { type: Type.STRING, description: "Şehir adı, örn. Istanbul" }
      },
      required: ["city"]
    }
  }]
};`
    }
  },
  {
    id: 'otonom-database',
    category: 'cozumler_ve_entegrasyon',
    title: 'Otonom Veritabanı Yönetimi & Entegrasyon',
    shortDesc: 'SQL sorgularını yapay zekaya ürettirip veri tabanından akıllı analizler ve görselleştirmeler yapma.',
    icon: 'Terminal',
    content: {
      overview: 'Gelenersel arayüzler yerine veritabanıyla doğal dilde konuşarak analiz yapmak yeni nesil kurumsal trenddir. Güvenli sınırlar dahilinde YZ\'ye veri sorgulatıp raporlar ürettirebilirsiniz.',
      keyPoints: [
        'Text-to-SQL Dönüşümü: Kullanıcının "Geçen ay en çok satan 3 ürünü listele" sorusunu veritabanı şemanıza bakarak hatasız SQL koduna çevirme.',
        'Güvenlik Sınırları (Read-Only): Yapay zeka ajanlarının veritabanında silme (DELETE, DROP) veya değiştirme işlemleri yapmasını kesinlikle engelleme stratejileri.',
        'Veri Temizleme: Eksik veya null değer içeren karmaşık ham tablo verilerini model ile saniyeler içinde formatlayıp standardize etme.',
        'D3.js / Recharts ile Görselleştirme: Çıkan veriyi yapay zekaya doğrudan grafik kütüphanelerine uyacak JSON dizilerine çevirtip ekrana basma.'
      ],
      tipsOrCode: `// Güvenli Text-to-SQL Prompt Yapısı:
Sen salt-okunur (read-only) SQL üreten bir veri analistisin.
Sana veritabanı şemasını veriyorum. Kullanıcı sorularına uygun PostgreSQL uyumlu SQL oluştur.

[VERİTABANI ŞEMASI]
Table: orders(id INT, user_id INT, total_amount DECIMAL, created_at TIMESTAMP)
Table: users(id INT, email VARCHAR, name VARCHAR)

[KURAL] Asla veri değiştirme sorguları üretme (INSERT, UPDATE, DELETE). Sadece SELECT üret.`,
      links: [
        {
          title: 'Supabase',
          description: 'Açık kaynaklı, modern ve gerçek zamanlı PostgreSQL veritabanı, kimlik doğrulama, dosya depolama ve edge functions sunan bulut geliştirici ekosistemi.',
          url: 'https://supabase.com'
        }
      ]
    }
  }
];
