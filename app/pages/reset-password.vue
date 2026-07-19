<script setup lang="ts">
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const route = useRoute();
const config = useRuntimeConfig();

const password = ref("");
const confirmPassword = ref("");

const DEFAULT_API_BASE = "https://infocorewarebackend.onrender.com/api";

const apiBase = computed(() => {
  const raw = (config.public?.apiBase ?? "").trim();
  const cleaned = raw.replace(/\/+$/, "");
  return cleaned || DEFAULT_API_BASE;   // fall back if empty after cleaning
});

const buildAuthUrl = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");
  return `${apiBase.value}/${normalizedPath}`;
};

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    toast.error("Passwords do not match");
    return;
  }

  try {
    const response: any = await $fetch(buildAuthUrl("auth/reset-password"), {
      method: "POST",
      body: {
        token: Array.isArray(route.query.token)
          ? route.query.token[0]
          : route.query.token,
        password: password.value,
      },
    });

    toast.success(response.message);

    setTimeout(() => {
      navigateTo("/login");
    }, 2000);
  } catch (err: any) {
    toast.error(err?.data?.message || "Unable to reset password");
  }
};
</script>
