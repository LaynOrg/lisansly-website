import { fontConfig } from "ui/configs/font";

export default defineNuxtConfig({
  modules: ["ui", "@nuxt/ui", "@nuxtjs/i18n", "@nuxtjs/google-fonts", "@nuxtjs/eslint-module"],
  css: ["ui/css/main.css"],
  googleFonts: fontConfig,
  runtimeConfig: {
    public: {
      logoUrl: process.env.LOGO_URL,
    },
  },
});
