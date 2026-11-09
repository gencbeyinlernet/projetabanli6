# İçerik kaynakları ve gün düzeni

## Güncel program

Kullanıcının paylaştığı afiş metni tarih ve gün dağılımı için esas alındı:

| Gün | Tarih | Akış |
| --- | --- | --- |
| 1 | 21 Aralık 2026 | Prompt tasarımı, Google ekosistemi, ChatGPT/Codex ve Claude/Cowork, Node.js, Gemini CLI, GitHub ve terminal |
| 2 | 22 Aralık 2026 | Canva AI/Canva Code ile görsel ve etkileşimli içerik, sunum, video, kısa film, seslendirme ve düzenleme |
| 3 | 23 Aralık 2026 | Akademik araştırma, PDF/Word/Excel ve müfredat analizi, öğretmen asistanı, ChatGPT/Codex, Claude Code, Cowork ve otomasyon |
| 4 | 24 Aralık 2026 | Test ve rubrik, online sınav, eğitim ajanları, veri görselleştirme, API, veritabanı ve yayın |

Süre: 4 gün / 8 saat. Katılım: online, canlı eğitim + kayıt. Eğitmenler: Burak TURGUT ve Türker ÖRÜN. Başvuru ve iletişim: WhatsApp 0507 110 00 53 veya gencbeyinlernet@gmail.com. Kullanıcı düğmeye tıklayınca tercih ettiği kanalı seçer.

Günlük başlangıç saatleri, toplantı platformu, ücret ve WhatsApp kanal adresi paylaşılmadı. Kullanıcının son mesajında sağladığı WhatsApp iletişim bağlantısı hazır mesajı açar; e-posta seçeneği mailto bağlantısıyla gencbeyinlernet@gmail.com adresine yeni ileti oluşturur. Site otomatik mesaj veya e-posta göndermez.

## Word belgesinin kullanımı

Depodaki **Proje Tabanlı Yapay Zekâ Eğitimi Paylaşımlar.docx** belgesi önceki eğitimin 2. gün özetidir. Günlerin yeni takvimdeki sırası, son afiş metnine göre düzenlendi; geçmiş zamanda anlatılan uygulamalar “yapacağız/kullanacağız” diliyle yeniden yazıldı.

Belgedeki terminal ve Gemini CLI içeriği yeni programın 1. gününe taşındı. Ajan yönetimi, projeyi küçük görevlere bölme, dosyalarla çalışma, Antigravity ve hata ayıklama uygulamaları 3. güne; API bağlantısı ve anahtar güvenliği 4. güne yerleştirildi. İnsan kontrolü, eğitimsel uygunluk ve tekrar test etme yaklaşımı tüm aşamalarda korundu.

## Güncel araç listesi

Kullanıcının son düzenlemeleriyle Adobe Firefly, Julius AI, Mendeley ve Flowise aktif programdan çıkarıldı. Canva Code 2. güne eklendi. Codex, ChatGPT ve Claude/Cowork birlikte ele alınır; GitHub 1., 3. ve 4. günlerde kullanılır ve kaynaklar bölümünde platform ile eğitim deposunun bağlantıları yer alır.

Kullanıcının onayladığı güncel listede 27 araç vardır. Görünen sayı `trainingInfo.toolCount` alanından kullanılır; çıkarılan araçlar geri eklenmez.

Claude Chat, Projects ve Artifacts, Claude araç kaydının uygulamalarında açıklanır. Canva Code, kullanıcının istediği üzere ayrı bir etkileşimli içerik aracı olarak listelenir. Bir araç farklı günlerde yeniden kullanılabilir; `alsoOnDays` ve ortak filtre fonksiyonu bu ilişkiyi korur.

`src/data/curriculum.ts`, tarihlerin, eğitim adının, iletişim adreslerinin, programın ve araçların ortak kaynağıdır. Site ve sohbet asistanı aynı bilgileri kullanır. Her araç kaydı açıklama, uygulama, kullanım nedeni ve resmî adres içerir.

Araç özellikleri, ücretler, kullanım limitleri, donanım gereksinimleri ve erişim koşulları sağlayıcıya göre değişir. Zamanlanmış görev ve video üretimi gibi uygulamalar hesapta desteklenen özelliklerle anlatılır.

## Kurum görselleri

Kullanıcının GitHub'a yüklediği `WhatsApp Image 2026-10-08 at 08.27.51.jpeg` kurum logosudur. `WhatsApp Image 2026-10-13 at 15.08.25.jpeg` genel araç kutusu afişidir; Kaynaklar bölümünde özgün hâliyle gösterilir ve tam boy açılabilir. Afişteki Julius AI ve diğer araçlar aktif programa geri eklenmez. Görselin güncel 27 araçlık programdan farklı olabildiği açıkça belirtilir.

## Yayın

GitHub Pages yayın iş akışı `.github/workflows/pages.yml` içindedir. Depodaki Pages kaynağı GitHub Actions seçildiğinde, main dalına gönderilen değişiklikler statik site olarak dağıtılır. Pages derlemesi sunucu gerektiren sohbet arayüzünü göstermez; tam Node.js sürümü sohbet özelliğini korur. Veritabanı kullanımı eğitim içeriğidir; kılavuzun kendisi veritabanı hizmeti gerektirmez. Canlı yayının başarılı olduğu ayrıca deployment sonucu ve site üzerinden doğrulanmalıdır.
