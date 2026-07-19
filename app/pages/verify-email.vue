<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const route = useRoute();
const config = useRuntimeConfig();

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

onMounted(async () => {
  try {
    const token = Array.isArray(route.query.token)
      ? route.query.token[0]
      : route.query.token;

    const response: any = await $fetch(buildAuthUrl("auth/verify-email"), {
      method: "GET",
      query: {
        token,
      },
    });

    toast.success(response.message);

    setTimeout(() => {
      navigateTo("/login");
    }, 2000);
  } catch (err: any) {
    toast.error(err?.data?.message || "Verification failed");
  }
});
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <h2 class="text-2xl font-bold text-sky-600">Verifying your email...</h2>
  </div>
</template>
