# İçerik kaynakları ve bölüm düzeni

## Güncel program

Eğitim 9 Kasım 2026 Pazartesi saat 21.00’de (Türkiye saati) başlar. 3 saatlik tek bir oturumdur: 30 dakikalık dört bölümden oluşan 2 saatlik uygulama akışı ile açılış, ara ve soru-cevap. Tarih ve saat `trainingInfo` içindeki `date`, `dateLabel` ve `startTime` alanlarından okunur.

Eğitim boyunca tek bir proje kurulur: **Çıkış Kartı**. Öğrenci ders sonunda telefondan dersi nasıl bulduğunu, günün sorusuna cevabını, öğrendiğini ve hâlâ merak ettiğini gönderir; cevaplar Supabase’de saklanır, öğretmen panelde özeti görür ve yapay zekâ ile yarınki derse öneri çıkarılır. Örnek ders 5. sınıf fen bilimleri, fotosentezdir; her branşa yalnızca günün sorusu değiştirilerek uyarlanır.

| Bölüm | Süre | Akış |
| --- | --- | --- |
| 1. Planla | 0:00 – 0:30 | Temel kavramlar (okul diliyle benzetmeler), zayıf istemi Rol + Hedef + Sınır ile güçlendirme, proje planı |
| 2. Tasarla | 0:30 – 1:00 | NotebookLM ile kaynağa dayalı günün sorusu, Canva ile logo ve renkler, Canva Code ile ilk taslak ve veritabanı ihtiyacı |
| 3. Kur | 1:00 – 1:30 | Supabase’de tablo ve erişim kuralları, Claude Code veya Codex ile öğrenci ekranı ve öğretmen paneli |
| 4. Paylaş | 1:30 – 2:00 | GitHub ve Netlify ile yayın, Canva ile QR afiş, yapay zekâ ile kart analizi, Napkin şeması ve Gamma sunumu |

Her bölümdeki uygulama adımlarının dakikaları `src/data/curriculum.ts` içindeki `minutes` alanında tutulur ve her bölümde toplam 30 dakikaya eşittir. Eğitmenin dakika dakika akışı, kontrol noktaları ve yedek planları `docs/egitim-akisi.md` dosyasındadır.

Katılım: online, canlı eğitim + kayıt. Eğitmen: Burak TURGUT. Ana sayfadaki “Tüm kaynaklarımız” düğmesi https://gencbeyinlernet.github.io/projetabanli6/ adresini gösterir; site içinde tıklanınca Kaynaklar bölümünü açar.

Ücret sitede yer almaz.

## Önemli bilgilendirme

Ana sayfadaki duyuru bölümü (`src/components/Announcement.tsx`), katılımcı duyurusunun metnini içerir: yaklaşık 2-3 saatlik uygulamalı eğitim, bilgisayarla katılım, ChatGPT ve Claude’un ücretli sürümlerinin kullanılacağı (dileyenin eğitimden önce satın alabileceği), Gmail (Google) hesabının hazır olması ve 300 kişilik kontenjan. Kılavuz bağlantısı bu siteyi (projetabanli6) gösterir.

Zoom bağlantısı, toplantı kimliği ve parola bilerek siteye ve depoya eklenmedi. Site ve depo herkese açık olduğu için bu bilgiler katılımcılara ayrıca iletilir.

## Word belgesinin kullanımı

Depodaki **Proje Tabanlı Yapay Zekâ Eğitimi Paylaşımlar.docx** belgesi önceki eğitimin özetidir. Belgedeki ajana açık görev verme, planı onaylama ve hata mesajını ajana geri verme yaklaşımı 3. bölüme; yayın ve anahtar güvenliği 3. ve 4. bölüme yerleştirildi. İnsan kontrolü, eğitimsel uygunluk ve tekrar test etme yaklaşımı tüm bölümlerde korundu.

## Güncel araç listesi

Programda 16 araç, her biri projede farklı bir amaçla kullanılır:

- **Planla:** ChatGPT ve Claude (aynı istemi karşılaştırma, proje planı, Claude Projects), Google Gemini (ek deneme: üçüncü görüş).
- **Tasarla:** NotebookLM (kaynağa dayalı günün sorusu), Canva (logo ve renkler), Canva Code (veritabanısız ilk taslak).
- **Kur:** Supabase (veritabanı ve erişim kuralları), Claude Code ve OpenAI Codex (uygulamayı kuran ajanlar), Google Forms (ek deneme: kodsuz karşılaştırma).
- **Paylaş:** GitHub (sürüm kaydı), Netlify (yayın), Canva (QR kodlu kapı afişi), ChatGPT ve Claude (kart analizi), Napkin AI (veri akışı şeması), Gamma (proje sunumu), Conker ve Claude Cowork (ek deneme: mini test ve kullanım kılavuzu).

Önceki çok günlü programdaki Node.js, Gemini CLI, Google AI Studio, ElevenLabs, Google Antigravity, LM Studio, Ollama, Consensus, STORM, Overleaf ve Firebase, süre nedeniyle bu programa alınmadı.

Görünen araç sayısı `trainingInfo.toolCount` alanından kullanılır. Bir araç farklı bölümlerde yeniden kullanılabilir; `alsoOnDays` alanı ve ortak filtre fonksiyonu bu ilişkiyi korur.

`src/data/curriculum.ts`, eğitim adının, sürenin, kaynak adresinin, programın ve araçların ortak kaynağıdır. Site ve sohbet asistanı aynı bilgileri kullanır.

Araç özellikleri, ücretler, kullanım limitleri ve erişim koşulları sağlayıcıya göre değişir.

## Kurum görselleri

`WhatsApp Image 2026-10-08 at 08.27.51.jpeg` kurum logosudur. `WhatsApp Image 2026-10-13 at 15.08.25.jpeg` genel araç kutusu afişidir; Kaynaklar bölümünde özgün hâliyle gösterilir ve tam boy açılabilir. Afişteki araçlar güncel 16 araçlık programdan farklı olabilir; bu durum sitede açıkça belirtilir.

## Yayın

GitHub Pages yayın iş akışı `.github/workflows/pages.yml` içindedir. Depodaki Pages kaynağı GitHub Actions seçildiğinde, gönderilen değişiklikler statik site olarak dağıtılır. Pages derlemesi sunucu gerektiren sohbet arayüzünü göstermez; tam Node.js sürümü sohbet özelliğini korur.
