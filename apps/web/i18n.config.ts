export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      header: {
        links: ["Anasayfa", "Dokümantasyon", "Fiyatlandırma", "Panel"],
      },
      notificationBarLabel: "You can change the language of the site.",
    },
    en: {
      header: {
        links: ["Home", "Documantation", "Pricing", "Dashboard"],
      },
      notificationBarLabel: "Sitenin dilini değiştirebilirsiniz.",
    },
  },
}));
