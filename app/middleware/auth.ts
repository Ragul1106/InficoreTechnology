// Route guard: runs before navigating to a page.
// - Public pages are always allowed (but a logged-in user visiting /login or
//   /signup is redirected home).
// - Any other page requires a logged-in user; otherwise send them to /login.
export default defineNuxtRouteMiddleware((to) => {
  const { accessToken } = useAuth();

  // Pages that don't require login.
  const publicPages = [
    "/login",
    "/signup",
    "/forget-password",
    "/reset-password",
    "/verify-email",
  ];

  if (publicPages.includes(to.path)) {
    // Already logged in? Don't show the login/signup pages again.
    if (accessToken.value && (to.path === "/login" || to.path === "/signup")) {
      return navigateTo("/");
    }
    return;
  }

  // Protected page and no token → require login.
  if (!accessToken.value) {
    return navigateTo("/login");
  }
});
