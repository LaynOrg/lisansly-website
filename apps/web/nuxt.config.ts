import { fontConfig } from "ui/configs/font";

export default defineNuxtConfig({
  modules: [
    "ui",
    "feature-flags",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "@pinia/nuxt",
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
      laynUrl: process.env.LAYN_URL,
      laynLogoUrl: process.env.LAYN_LOGO_URL,
      fbApiKey: process.env.FB_API_KEY,
      fbAuthDomain: process.env.FB_AUTH_DOMAIN,
      fbProjectId: process.env.FB_PROJECT_ID,
      fbStorageBucket: process.env.FB_STORAGE_BUCKET,
      fbMessagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
      fbAppId: process.env.FB_APP_ID,
    },
  },
});
