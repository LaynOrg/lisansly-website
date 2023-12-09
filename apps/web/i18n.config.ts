export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      header: {
        links: ["Anasayfa", "Dokümantasyon", "Fiyatlandırma", "Panel"],
      },
    },
    en: {
      header: {
        links: ["Home", "Documantation", "Pricing", "Dashboard"],
      },
    },
  },
}));
