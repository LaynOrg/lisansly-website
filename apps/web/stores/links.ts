import type { SocialProps } from "~/types";
import type { LinkProps } from "ui/types";
import { defineStore } from "pinia";

export const useLinksStore = defineStore({
  id: "links",
  state: () => {
    const config = useRuntimeConfig();
    return {
      navigations: [
        { label: "header.links.0", href: "/" },
        { label: "header.links.1", href: "/docs" },
        { label: "header.links.2", href: "/dashboard" },
      ] as LinkProps[],
      socials: [
        {
          href: config.public.gitHubUrl,
          icon: "i-simple-icons-github",
          label: "GitHub",
        },
        {
          href: config.public.twitterUrl,
          icon: "i-simple-icons-x",
          label: "Twitter",
        },

        {
          href: config.public.discordUrl,
          icon: "i-simple-icons-discord",
          label: "Discord",
        },
      ] as SocialProps[],
    };
  },
  actions: {
    addNavigation(link: LinkProps) {
      if (!this.navigations.some((item) => item.href === link.href)) {
        this.navigations.push(link);
      }
    },
    removeNavigation(href: string) {
      const index = this.navigations.findIndex((item) => item.href === href);
      if (index > -1) {
        this.navigations.splice(index, 1);
      }
    },
  },
});
