import { fontConfig } from "ui/configs/font";

export default defineNuxtConfig({
  modules: [
    "ui",
    "auth",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  css: ["ui/css/main.css"],
  googleFonts: fontConfig,
  runtimeConfig: {
    public: {
      logoUrl: process.env.LOGO_URL,
      apiUrl: process.env.API_URL,
      webUrl: process.env.WEB_URL,
    },
  },
});
