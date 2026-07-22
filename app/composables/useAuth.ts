// export interface AuthUser {
//   id: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone?: string | null;
//   isVerified?: boolean;
// }

// /**
//  * Reactive authentication state shared across the app.
//  *
//  * State lives in `useState` (SSR-safe) and is mirrored to localStorage on the
//  * client so a page refresh keeps the user signed in. Components can react to
//  * `isAuthenticated` / `user` to update UI (e.g. the navbar) immediately.
//  */
// export const useAuth = () => {
//   const user = useState<AuthUser | null>("auth.user", () => null);
//   const token = useState<string | null>("auth.token", () => null);

//   const isAuthenticated = computed(() => !!token.value);

//   const setAuth = (payload: any) => {
//     const data = payload?.data ?? payload;
//     const accessToken = data?.accessToken ?? data?.token ?? null;
//     const refreshToken = data?.refreshToken ?? null;
//     const authUser = (data?.user ?? null) as AuthUser | null;

//     if (!import.meta.client) return;

//     if (accessToken) {
//       token.value = accessToken;
//       localStorage.setItem("token", accessToken);
//     }

//     if (refreshToken) {
//       localStorage.setItem("refreshToken", refreshToken);
//     }

//     if (authUser) {
//       user.value = authUser;
//       localStorage.setItem("user", JSON.stringify(authUser));
//     }
//   };

//   const loadFromStorage = () => {
//     if (!import.meta.client) return;

//     token.value = localStorage.getItem("token");

//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//       try {
//         user.value = JSON.parse(storedUser) as AuthUser;
//       } catch {
//         user.value = null;
//       }
//     }
//   };

//   const logout = () => {
//     token.value = null;
//     user.value = null;

//     if (import.meta.client) {
//       localStorage.removeItem("token");
//       localStorage.removeItem("refreshToken");
//       localStorage.removeItem("user");
//     }
//   };

//   return {
//     user,
//     token,
//     isAuthenticated,
//     setAuth,
//     loadFromStorage,
//     logout,
//   };
// };


export const useAuth = () => {
  const accessToken = useCookie("accessToken", { default: () => null });
  const refreshToken = useCookie("refreshToken", { default: () => null });
  const user = useState("user", () => null);

  const setAuth = (data: any) => {
    if (data.accessToken) accessToken.value = data.accessToken;
    if (data.refreshToken) refreshToken.value = data.refreshToken;
    if (data.user) user.value = data.user;
  };

  const logout = async () => {
    try {
      await $fetch(buildAuthUrl("auth/logout"), {
        method: "POST",
        body: { userId: user.value?.id },
      });
    } catch (err) {
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