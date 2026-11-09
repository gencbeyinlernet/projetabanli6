# Eğitmen akışı: Çıkış Kartı

9 Kasım 2026 Pazartesi, 21.00 · 3 saat · Katılımcı kılavuzu: https://gencbeyinlernet.github.io/projetabanli6/

## Tek cümlelik hedef

Bu akşam, ders sonunda öğrencinin 1 dakikada doldurduğu, cevapları veritabanında saklayan ve öğretmene özet gösteren bir uygulamayı sıfırdan kurup yayımlayacağız.

## Akılda kalacak üç cümle

1. **Yapay zekâ çok okumuş bir stajyerdir.** Bağlamı biz veririz, son kararı biz veririz.
2. **İstem formülü: Rol + Hedef + Sınır.**
3. **Veritabanı sınıf defteridir.** Sayfa yenilense de bilgi kaybolmaz.

Her bölümün sonunda bu cümlelerden birini tekrar edin.

## Saat planı

Uygulama akışı 4 × 30 dakika = 2 saattir. Kalan 1 saat açılış, ara, destek ve soru-cevap içindir.

| Saat | Bölüm | Ne oluyor |
| --- | --- | --- |
| 21.00 – 21.10 | Açılış | Hoş geldiniz, kılavuz sitesinin tanıtımı, hesap kontrolü (Google, ChatGPT, Claude) |
| 21.10 – 21.40 | 1. Planla | Temel kavramlar, zayıf istem → güçlü istem, proje planı |
| 21.40 – 22.10 | 2. Tasarla | NotebookLM ile günün sorusu, Canva logo, Canva Code taslağı → “Cevaplar nereye gitti?” |
| 22.10 – 22.20 | Ara | Takılanlara destek; herkes Supabase hesabını açsın |
| 22.20 – 22.50 | 3. Kur | Supabase tablosu, Claude Code veya Codex ile uygulama |
| 22.50 – 23.20 | 4. Paylaş | GitHub + Netlify + QR, canlı kartlar, yapay zekâ analizi, Napkin + Gamma |
| 23.20 – 24.00 | Kapanış | Soru-cevap, yayın desteği, kendi branşına uyarlama |

Sohbetteki kontrol noktaları için katılımcılardan “✓” yazmalarını isteyin. Çoğunluk ✓ yazmadan sonraki adıma geçmeyin.

## 1. Planla (30 dk)

- **Göster:** Ana sayfadaki sekiz kavram kartı (2 dk). Zayıf istemi canlı yazın; ChatGPT ve Claude yanıtlarını yan yana koyun. Sonra aynı isteği Rol + Hedef + Sınır ile yazıp farkı gösterin.
- **Katılımcı:** Zayıf istem → güçlü istem → plan istemi. Planı Claude’da bir Project’e kaydeder.
- **Kontrol:** “Planınızda dört sütun var mı: duygu, cevap, ogrendigim, sorum? ✓”
- **Yedek:** Ücretli üyeliği olmayan, hesabının sunduğu sürümle devam eder; istemler aynı.

## 2. Tasarla (30 dk)

- **Göster:** NotebookLM’de yanıttaki kaynak işaretine tıklayın; doğrulama alışkanlığını vurgulayın. Canva Code’da taslağı kurun.
- **Akılda kalacak an:** Kartı doldurup gönderin, sonra sayfayı yenileyin. “Cevaplar nerede?” diye sorup birkaç saniye bekleyin. Cevap: “Sınıf defterimiz yok. Şimdi kuracağız.”
- **Kontrol:** “Günün sorusu, doğru cevap ve iki renk kodu not edildi mi? ✓”
- **Yedek:** Dosya yükleyemeyen ders notunu metin olarak yapıştırır. Canva Code’a erişemeyen aynı istemi Claude’a verir.

## 3. Kur (30 dk)

- **Hazırlık:** Yeni Supabase projesinin hazırlanması birkaç dakika sürebilir. Katılımcılara projeyi aradan önce açtırın; kendi projenizi eğitimden önce hazır tutun.
- **Göster:** SQL kodunu çalıştırın, Table Editor’de boş tabloyu gösterin: “Boş sınıf defterimiz.” Project URL ve publishable anahtarın yerini gösterin. Gizli anahtarı göstermeyin.
- **Katılımcı:** Tabloyu kurar, istemdeki köşeli parantezleri doldurur, Claude Code veya Codex’e verir, planı onaylar, kart gönderir.
- **Kontrol:** “Kart gönderdiniz mi? Supabase’de satır göründü mü? Sayfayı yenileyince kartlar duruyor mu? ✓”
- **Sık hatalar:**
  - Kayıt düşmüyor: Erişim kuralları (SQL’in son iki komutu) çalışmamış ya da URL veya anahtar yanlış. Hata mesajını ajana aynen yapıştırın.
  - Panel boş: Okuma kuralı (select) eksik.
  - Gizli anahtar kullanılmış: Hemen kaldırın; yalnızca publishable anahtar kullanılır.
- **Yedek:** Claude Code veya Codex’e erişemeyen, aynı istemi ChatGPT veya Claude sohbetine verip index.html dosyasını indirir ve tarayıcıda açar. Supabase’e ulaşamayan, aynı kartı Google Forms ile kodsuz kurar.

## 4. Paylaş (30 dk)

- **Göster:** Netlify’a sürükle-bırak ile yayımlayın. Yayın bağlantısını Zoom sohbetine yapıştırın ve herkesten **bu eğitim için** bir kart göndermesini isteyin. Öğretmen panelinde sayıların canlı arttığını gösterin.
- **Yapay zekâ analizi:** Gelen gerçek kartları dışa aktarıp analiz istemini canlı çalıştırın. Önerinin uygun olup olmadığına öğretmen olarak karar verdiğinizi açıkça söyleyin.
- **Katılımcı:** GitHub’a yükler, Netlify ile yayımlar, Canva’da QR kodlu kapı afişini hazırlar. Napkin ve Gamma adımlarını isteyen eğitimden sonra tamamlar.
- **Kontrol:** “Yayın bağlantınız açılıyor mu? ✓”
- **Kapanış cümlesi:** “Yarın sınıfa girmeden önce tek yapmanız gereken: günün sorusunu kendi dersinize göre değiştirmek.”

## Eğitmen hazırlık listesi

- Kişisel veri içermeyen örnek fotosentez ders notu (PDF); katılımcılarla paylaşılacak.
- Önceden kurulmuş Supabase projesi ve `cikis_kartlari` tablosu.
- Önceden yayımlanmış çalışan bir Çıkış Kartı (yedek ve canlı an için).
- Açık oturumlar: ChatGPT, Claude, NotebookLM, Canva, Supabase, GitHub, Netlify, Gamma, Napkin.
- Zoom sohbetine yapıştırılacak kılavuz bağlantısı.

## Güvenlik ve veri

- Kartlar anonimdir; ad, numara veya kişisel bilgi istenmez.
- Tablo bu derste herkese açık okunabilir. Gerçek sınıf kullanımında öğretmen girişi eklenmesini önerin.
- Gizli (secret / service_role) anahtar hiçbir dosyaya, isteme veya depoya girmez.
