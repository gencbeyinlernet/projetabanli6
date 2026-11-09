# İçerik kaynakları ve bölüm düzeni

## Güncel program

Eğitim 9 Kasım 2026 Pazartesi saat 21.00’de (Türkiye saati) başlar. 3 saatlik tek bir oturumdur ve 45 dakikalık dört bölümden oluşur. Tarih ve saat `trainingInfo` içindeki `date`, `dateLabel` ve `startTime` alanlarından okunur.

| Bölüm | Süre | Akış |
| --- | --- | --- |
| 1 | 0:00 – 0:45 | İstem tasarımı; ChatGPT, Gemini ve Claude ile aynı görevi karşılaştırma; NotebookLM ile kaynağa dayalı içerik paketi |
| 2 | 0:45 – 1:30 | Canva AI ile ders görseli, Canva Code ile etkileşimli etkinlik, Gamma ile sunum, Napkin AI ile diyagram |
| 3 | 1:30 – 2:15 | Sohbetten görev vermeye geçiş, branşa özel öğretmen asistanı, Codex ve Claude Code ile uygulama prototipi |
| 4 | 2:15 – 3:00 | Soru ve rubrik, Google Forms ile çevrimiçi değerlendirme, GitHub ile sürüm kaydı ve Netlify ile yayın |

Her bölümdeki uygulama adımlarının dakikaları `src/data/curriculum.ts` içindeki `minutes` alanında tutulur ve her bölümde toplam 45 dakikaya eşittir.

Katılım: online, canlı eğitim + kayıt. Eğitmen: Burak TURGUT. Ana sayfadaki “Tüm kaynaklarımız” düğmesi https://gencbeyinlernet.github.io/projetabanli6/ adresini gösterir; site içinde tıklanınca Kaynaklar bölümünü açar.

Ücret sitede yer almaz.

## Önemli bilgilendirme

Ana sayfadaki duyuru bölümü (`src/components/Announcement.tsx`), katılımcı duyurusunun metnini içerir: yaklaşık 2-3 saatlik uygulamalı eğitim, bilgisayarla katılım, ChatGPT ve Claude’un ücretli sürümlerinin kullanılacağı (dileyenin eğitimden önce satın alabileceği), Gmail (Google) hesabının hazır olması ve 300 kişilik kontenjan. Kılavuz bağlantısı bu siteyi (projetabanli6) gösterir.

Zoom bağlantısı, toplantı kimliği ve parola bilerek siteye ve depoya eklenmedi. Site ve depo herkese açık olduğu için bu bilgiler katılımcılara ayrıca iletilir.

## Word belgesinin kullanımı

Depodaki **Proje Tabanlı Yapay Zekâ Eğitimi Paylaşımlar.docx** belgesi önceki eğitimin özetidir. Belgedeki ajan yönetimi, projeyi küçük görevlere bölme ve hata çözme yaklaşımı 3. bölüme; yayın ve anahtar güvenliği 4. bölüme yerleştirildi. İnsan kontrolü, eğitimsel uygunluk ve tekrar test etme yaklaşımı tüm bölümlerde korundu.

## Güncel araç listesi

3 saatlik programda 15 araç kullanılır: ChatGPT, Google Gemini, Claude, NotebookLM, Canva, Canva Code, Gamma, Napkin AI, OpenAI Codex, Claude Code, Claude Cowork, Conker, Google Forms, GitHub ve Netlify. Napkin AI, Claude Cowork ve Conker “Ek deneme” olarak işaretlidir.

Önceki çok günlü programdaki Node.js, Gemini CLI, Google AI Studio, ElevenLabs, Google Antigravity, LM Studio, Ollama, Consensus, STORM, Overleaf, Firebase ve Supabase, süre nedeniyle bu programa alınmadı.

Görünen araç sayısı `trainingInfo.toolCount` alanından kullanılır. Bir araç farklı bölümlerde yeniden kullanılabilir; `alsoOnDays` alanı ve ortak filtre fonksiyonu bu ilişkiyi korur.

`src/data/curriculum.ts`, eğitim adının, sürenin, kaynak adresinin, programın ve araçların ortak kaynağıdır. Site ve sohbet asistanı aynı bilgileri kullanır.

Araç özellikleri, ücretler, kullanım limitleri ve erişim koşulları sağlayıcıya göre değişir.

## Kurum görselleri

`WhatsApp Image 2026-10-08 at 08.27.51.jpeg` kurum logosudur. `WhatsApp Image 2026-10-13 at 15.08.25.jpeg` genel araç kutusu afişidir; Kaynaklar bölümünde özgün hâliyle gösterilir ve tam boy açılabilir. Afişteki araçlar güncel 15 araçlık programdan farklı olabilir; bu durum sitede açıkça belirtilir.

## Yayın

GitHub Pages yayın iş akışı `.github/workflows/pages.yml` içindedir. Depodaki Pages kaynağı GitHub Actions seçildiğinde, gönderilen değişiklikler statik site olarak dağıtılır. Pages derlemesi sunucu gerektiren sohbet arayüzünü göstermez; tam Node.js sürümü sohbet özelliğini korur.
