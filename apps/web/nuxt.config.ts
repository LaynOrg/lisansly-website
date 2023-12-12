import { fontConfig } from "ui/configs/font";

export default defineNuxtConfig({
  modules: [
    "ui",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxtjs/eslint-module",
    "@nuxt/content",
  ],
  content: {
    highlight: {
      theme: {
        default: "github-light",
        dark: "github-dark",
      },
    },
  },
  css: ["ui/css/main.css"],
  googleFonts: fontConfig,
  runtimeConfig: {
    public: {
      logoUrl: process.env.LOGO_URL,
      gitHubUrl: process.env.GITHUB_URL,
      twitterUrl: process.env.TWITTER_URL,
      discordUrl: process.env.DISCORD_URL,
    },
  },
});
