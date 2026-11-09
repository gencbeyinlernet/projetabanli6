export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
}

export const additionalResources: Resource[] = [
  {
    id: 'github-start',
    title: 'GitHub — proje ve sürüm yönetimi',
    description: 'İlk gün depo, dosya ve sürüm kavramlarını öğreneceğiz; projemizin değişikliklerini GitHub ile takip edeceğiz.',
    url: 'https://github.com'
  },
  {
    id: 'training-repository',
    title: 'Eğitimin GitHub kaynak deposu',
    description: 'Eğitim sitesinin dosyalarını, kurulum açıklamalarını ve proje düzenini bu depoda inceleyeceğiz.',
    url: 'https://github.com/gencbeyinlernet/projetabanli6'
  },
  {
    id: "meb-etik-kilavuz",
    title: "1. Eğitimde Yapay Zekâ Uygulamaları Etik Kılavuzu (MEB)",
    description: "Materyallerimizi hazırlarken güvenli, etik ve sorumlu kullanım ilkelerini bu rehberle kontrol edeceğiz.",
    url: "https://www.meb.gov.tr/egitimde-yapay-zeka-uygulamalari-etik-kilavuzu-yayimlandi/haber/39496/tr"
  },
  {
    id: "yok-etik-rehber",
    title: "2. Yükseköğretimde Üretken Yapay Zekâ Kullanımına Dair Etik Rehber (YÖK)",
    description: "Araştırma ve raporlarımızda yapay zekâ kullanımını açıklamak ve etik kuralları kontrol etmek için kullanacağız.",
    url: "https://proje.yok.gov.tr/documentFiles/17539645334.Yükseköğretimde%20üretken%20yapay%20zeka%20kullanımı-tr.pdf"
  },
  {
    id: "unesco-ai-guide",
    title: "3. Eğitim ve Araştırmada Üretken Yapay Zekâ Kılavuzu (UNESCO)",
    description: "Eğitim ve araştırma çalışmalarımızın fırsatlarını ve risklerini bu uluslararası rehberle değerlendireceğiz.",
    url: "https://unesdoc.unesco.org/ark:/48223/pf0000390842/PDF"
  },
  {
    id: "meb-eylem-plani",
    title: "4. Eğitimde Yapay Zekâ Politika Belgesi ve Eylem Planı (2025-2029)",
    description: "Eğitim projelerimizi hazırlarken ulusal hedefleri ve yol haritasını inceleyeceğiz.",
    url: "https://yazek.meb.gov.tr"
  },
  {
    id: "tubitak-ai-rehber",
    title: "5. TÜBİTAK Destek Süreçlerinde Üretken Yapay Zekâ Kullanım Rehberi",
    description: "Proje başvurularında güncel yapay zekâ kullanım esaslarına ulaşmak için kurumun kaynaklarını inceleyeceğiz.",
    url: "https://www.tubitak.gov.tr"
  },
  {
    id: "meb-ogretmen-rehber",
    title: "6. Yapay Zekâ ve Eğitim: Öğretmenler İçin Uygulama Rehberi",
    description: "Ders planı, içerik ve değerlendirme çalışmalarımız için bu rehberdeki örneklerden yararlanacağız.",
    url: "https://gemlik.meb.gov.tr/www/ogretmenler-icin-yapay-zeka-destekli-egitim-rehberi-hazirlandi/icerik/1971"
  },
  {
    id: "unesco-tr-pdf",
    title: "7. Eğitim ve Araştırmada Üretken Yapay Zekâ Kılavuzu (Türkçe PDF)",
    description: "UNESCO rehberini Türkçe okuyacak; kendi ders uygulamalarımızla ilişkilendireceğiz.",
    url: "https://lapsekiplevneortaokulu.meb.k12.tr/meb_iys_dosyalar/17/11/722533/dosyalar/2025_02/03182741_egitimvearastirmadauretkenyapayzekkilavuzu.pdf"
  }
];
