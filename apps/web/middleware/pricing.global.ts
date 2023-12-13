export default defineNuxtRouteMiddleware(async (to, from) => {
  const { addNavigation, removeNavigation } = useLinksStore();
  const { flags } = await useFeatureFlags();
  const flag = flags.is_pricing_page_enable;
  if (flag === false) {
    if (to.path === "/pricing") {
      return showError({
        statusCode: 404,
        statusMessage: "Page not found: /pricing",
      });
    }
    removeNavigation("/pricing");
  } else if (flag === true) {
    addNavigation({ label: "header.links.3", href: "/pricing" });
  }
});
