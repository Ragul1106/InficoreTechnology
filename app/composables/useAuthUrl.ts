// composables/useAuthUrl.ts
export const useAuthUrl = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiBase || "https://infocorewarebackend.onrender.com";

  return (endpoint: string) => {
    const cleanEndpoint = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
    return `${baseURL}${cleanEndpoint}`;
  };
};