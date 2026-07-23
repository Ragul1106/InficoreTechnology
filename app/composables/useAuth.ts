// Authentication state shared across the app.
//
// Tokens are stored in cookies (via useCookie) so they survive page refreshes
// and are available during SSR. `user` holds the logged-in user's details.
export const useAuth = () => {
  const accessToken = useCookie("accessToken", { default: () => null });
  const refreshToken = useCookie("refreshToken", { default: () => null });
  const user = useState("user", () => null);

  // Save tokens/user after a successful login or signup.
  const setAuth = (data: any) => {
    if (data.accessToken) accessToken.value = data.accessToken;
    if (data.refreshToken) refreshToken.value = data.refreshToken;
    if (data.user) user.value = data.user;
  };

  // Log out: tell the server, then clear local session and go to /login.
  const logout = async () => {
    try {
      await $fetch(buildAuthUrl("auth/logout"), {
        method: "POST",
        body: { userId: user.value?.id },
      });
    } catch (err) {
      // Ignore server errors — we still clear the local session below.
      console.warn("Logout API failed", err);
    }

    accessToken.value = null;
    refreshToken.value = null;
    user.value = null;

    navigateTo("/login");
  };

  return {
    setAuth,
    logout,
    user,
    accessToken,
    refreshToken,
  };
};
