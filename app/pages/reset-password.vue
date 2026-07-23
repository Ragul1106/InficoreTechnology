<script setup lang="ts">
// Reset-password page: reads the ?token= from the reset-link email, lets the
// user set a new password, submits it to the backend, then returns to /login.
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRoute, useRouter } from "vue-router";

const toast = useToast();
const route = useRoute();
const router = useRouter();
const buildAuthUrl = useAuthUrl();

// Reset token comes from the URL query string.
const token = ref(route.query.token as string || "");
const password = ref("");
const rePassword = ref("");
const loading = ref(false);

const handleResetPassword = async (e: Event) => {
  e.preventDefault();
  if (loading.value) return;

  if (password.value !== rePassword.value) {
    toast.error("Passwords do not match");
    return;
  }

  if (!token.value) {
    toast.error("Invalid or missing reset token");
    return;
  }

  loading.value = true;

  try {
    const res = await $fetch(buildAuthUrl("auth/reset-password"), {
      method: "POST",
      body: {
        token: token.value,
        password: password.value,
      },
    });

    toast.success(res.message || "Password reset successful!");
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  } catch (err: any) {
    const message = err?.response?._data?.message || "Failed to reset password";
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
        <h2 class="text-3xl font-bold text-sky-700">Reset Password</h2>
        <p class="text-gray-500 mt-2">Create a new password</p>
      </div>

      <form @submit="handleResetPassword" class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-2 font-medium">New Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter new password"
            class="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2 font-medium">Confirm New Password</label>
          <input
            v-model="rePassword"
            type="password"
            placeholder="Confirm new password"
            class="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
            required
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-3.5 rounded-2xl font-semibold bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-70 transition shadow-md"
        >
          {{ loading ? "Resetting password..." : "Reset Password" }}
        </button>
      </form>

      <div class="text-center mt-6">
        <router-link to="/login" class="text-sky-600 hover:underline text-sm">
          ← Back to Login
        </router-link>
      </div>
    </div>
  </div>
</template>