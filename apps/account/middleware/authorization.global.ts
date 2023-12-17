export default defineNuxtRouteMiddleware(async (to) => {
  const { isAuthenticated } = useAuthStore();
  const isAuth = isAuthenticated;

  if (isAuth === true && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/");
  } else if (
    isAuth === false &&
    (to.path === "/" || to.path === "/update-password" || to.path === "/plan")
  ) {
    return navigateTo("/login");
  }
});
