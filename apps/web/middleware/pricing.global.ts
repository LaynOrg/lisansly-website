export default defineNuxtRouteMiddleware(async (to) => {
  const { addNavigation, removeNavigation } = useLinksStore();
  const { update, get } = useFeatureFlagsStore();

  await update();
  const flag = get("is_pricing_page_enable");

  if (flag === true) {
    addNavigation({ label: "header.links.3", href: "/pricing" });
  } else if (flag === false) {
    if (to.path === "/pricing") {
      return showError({
        statusCode: 404,
        statusMessage: "Page not found: /pricing",
      });
    }
    removeNavigation("/pricing");
  }
});
