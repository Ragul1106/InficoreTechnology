<script setup lang="ts">
// Email verification page. Reads the ?token= from the link in the email, calls
// the backend to verify it, and on success redirects to /login.
import { onMounted, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const route = useRoute();
const buildAuthUrl = useAuthUrl();

// Drives which message/colour is shown in the template.
const status = ref<"verifying" | "success" | "error">("verifying");
const message = ref("Verifying your email...");

// Run the verification as soon as the page loads.
onMounted(async () => {
  try {
    const token = Array.isArray(route.query.token)
      ? route.query.token[0]
      : route.query.token;

    if (!token) {
      throw new Error("Verification token is missing");
    }

    const response: any = await $fetch(buildAuthUrl("auth/verify-email"), {
      method: "GET",
      query: {
        token,
      },
    });

    status.value = "success";
    message.value = response?.message || "Email verified successfully";
    toast.success(message.value);

    setTimeout(() => {
      navigateTo("/login");
    }, 2000);
  } catch (err: any) {
    status.value = "error";
    message.value = getApiErrorMessage(err, "Verification failed");
    toast.error(message.value);
  }
});
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-4">
    <h2
      class="text-2xl font-bold text-center"
      :class="{
        'text-sky-600': status === 'verifying',
        'text-green-600': status === 'success',
        'text-red-500': status === 'error',
      }"
    >
      {{ message }}
    </h2>

    <NuxtLink
      v-if="status === 'error'"
      to="/login"
      class="mt-6 text-sky-600 hover:text-sky-700 font-medium transition"
    >
      Back to Login
    </NuxtLink>
  </div>
</template>
