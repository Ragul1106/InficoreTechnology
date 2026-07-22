export default defineNuxtRouteMiddleware((to, from) => {
  const { accessToken } = useAuth();

  // List of public pages (no login required)
  const publicPages = ['/login', '/signup', '/forget-password', '/reset-password', '/verify-email'];

  if (publicPages.includes(to.path)) {
    // If user is already logged in and tries to access login/signup, redirect to home
    if (accessToken.value && (to.path === '/login' || to.path === '/signup')) {
      return navigateTo('/');
    }
    return;
  }

  // Protected route — user not logged in
  if (!accessToken.value) {
    return navigateTo('/login');
  }
  definePageMeta({
  middleware: ["auth"],
});
});