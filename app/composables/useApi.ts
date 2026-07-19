const DEFAULT_API_BASE = "https://infocorewarebackend.onrender.com/api";

/**
 * Resolved API base URL, sourced from runtime config with a safe fallback.
 * Trailing slashes are stripped so paths can be joined predictably.
 */
export const useApiBase = () => {
  const config = useRuntimeConfig();

  return computed(() => {
    const raw = (config.public?.apiBase ?? "").trim();
    const cleaned = raw.replace(/\/+$/, "");
    return cleaned || DEFAULT_API_BASE;
  });
};

/**
 * Builds an absolute auth endpoint URL from a relative path,
 * e.g. buildAuthUrl("auth/login") -> "<apiBase>/auth/login".
 */
export const useAuthUrl = () => {
  const apiBase = useApiBase();

  return (path: string) => {
    const normalizedPath = path.replace(/^\/+/, "");
    return `${apiBase.value}/${normalizedPath}`;
  };
};

/**
 * Normalizes an error thrown by $fetch into a human readable message.
 */
export const getApiErrorMessage = (err: any, fallback: string) => {
  return err?.data?.message || err?.message || fallback;
};
