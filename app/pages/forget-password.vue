<script setup lang="ts">
// Forgot-password page: user enters their email, we ask the backend to send a
// reset link, then show a "check your email" confirmation.
import { ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();
const buildAuthUrl = useAuthUrl();

const email = ref("");
const loading = ref(false);
// Switches the form to the "check your email" success view.
const submitted = ref(false);

const handleForgotPassword = async (e: Event) => {
  e.preventDefault();
  if (loading.value) return;

  loading.value = true;

  try {
    const res = await $fetch(buildAuthUrl("auth/forgot-password"), {
      method: "POST",
      body: { email: email.value },
    });

    toast.success(res.message || "Password reset link has been sent to your email.");
    submitted.value = true;
  } catch (err: any) {
    const message = err?.response?._data?.message || err?.data?.message || "Failed to send reset link";
    toast.error(message);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-sky-50 to-blue-100">
    <div class="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_rgba(14,165,233,0.18)] border border-sky-100 p-8">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-sky-700">Forgot Password?</h2>
        <p class="text-gray-500 mt-2">Enter your email to receive a reset link</p>
      </div>

      <form v-if="!submitted" @submit="handleForgotPassword" class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-2 font-medium">Email Address</label>
          <input
            v-model="email"
            type="email"
            placeholder="your@email.com"
            class="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
            required
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3.5 rounded-2xl font-semibold bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-70 transition shadow-md"
        >
          {{ loading ? "Sending reset link..." : "Send Reset Link" }}
        </button>
      </form>

      <!-- Success State -->
      <div v-else class="text-center py-8">
        <div class="text-green-500 text-5xl mb-4">📧</div>
        <h3 class="text-xl font-semibold text-gray-800">Check your email</h3>
        <p class="text-gray-600 mt-2">
          We have sent a password reset link to <strong>{{ email }}</strong>
        </p>
        <button
          @click="submitted = false; email = ''"
          class="mt-6 text-sky-600 hover:underline"
        >
          Send again
        </button>
      </div>

      <div class="text-center mt-6">
        <router-link to="/login" class="text-sky-600 hover:underline text-sm">
          ← Back to Login
        </router-link>
      </div>
    </div>
  </div>
</template>