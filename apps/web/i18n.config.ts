export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      header: {
        links: ["Anasayfa", "Dokümantasyon", "Fiyatlandırma", "Panel"],
      },
      notificationBarLabel: "You can change the language of the site.",
      home: {
        heroHeader: {
          title:
            "Lisansly ile uygulamanıza Lisans veya Kimlik doğrulama ekleyin",
          description:
            "Uygulamalarınıza kimlik doğrulama eklemenin kolay ve uygun maliyetli yolu.",
          learnMore: "Öğrenmeye Başlayın",
          start: "Ücretsiz Plan ile Başlayın",
        },
      },
    },
    en: {
      header: {
        links: ["Home", "Documantation", "Pricing", "Dashboard"],
      },
      notificationBarLabel: "Sitenin dilini değiştirebilirsiniz.",
      home: {
        heroHeader: {
          title:
            "Add License or Authentication to your application with Lisansly",
          description:
            "An easy and inexpensive way to add authentication to your application.",
          learnMore: "Start Learning",
          start: "Start with Free Plan",
        },
      },
    },
  },
}));
