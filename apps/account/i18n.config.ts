export default defineI18nConfig(() => ({
  legacy: false,
  locale: "tr",
  messages: {
    tr: {
      header: {
        links: ["Anasayfa", "Ayarlar", "Plan"],
        buttons: {
          login: "Giriş Yap",
          register: "Kayıt Ol",
        },
      },
    },
    en: {
      header: {
        links: ["Home", "Settings", "Plan"],
        buttons: {
          login: "Login",
          register: "Register",
        },
      },
    },
  },
}));
