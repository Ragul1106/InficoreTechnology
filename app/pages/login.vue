<script setup lang="ts">
// Combined Login / Sign-up page. `isLogin` toggles between the two forms.
// Login and signup both call the backend, store the returned auth tokens, and
// on success send the user to the home page.
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";
import { Eye, EyeOff } from "lucide-vue-next";

const toast = useToast();
const router = useRouter();

const { setAuth } = useAuth();
const buildAuthUrl = useAuthUrl();

const isLogin = ref(true);
const error = ref("");

const email = ref("");
const password = ref("");
const rePassword = ref("");
const firstName = ref("");
const lastName = ref("");
const phone = ref("");

const loginLoading = ref(false);
const signupLoading = ref(false);
const resendLoading = ref(false);

// Password visibility toggles
const showPassword = ref(false);
const showRePassword = ref(false);

const switchMode = (login: boolean) => {
  isLogin.value = login;
  error.value = "";
  showPassword.value = false;
  showRePassword.value = false;
};

const getApiErrorMessage = (err: any, defaultMsg: string): string => {
  return (
    err?.data?.message ||
    err?.response?._data?.message ||
    err?.message ||
    defaultMsg
  );
};

const handleLogin = async (e: Event) => {
  e.preventDefault();
  if (loginLoading.value) return;

  error.value = "";
  loginLoading.value = true;

  try {
    const res: any = await $fetch(buildAuthUrl("auth/login"), {
      method: "POST",
      body: { email: email.value, password: password.value },
    });

    setAuth(res.data || res);
    toast.success(res.message || "Login successful!");
    await navigateTo("/");
  } catch (err: any) {
    error.value = getApiErrorMessage(err, "Invalid email or password");
  } finally {
    loginLoading.value = false;
  }
};

const resendVerification = async () => {
  if (resendLoading.value || !email.value) return;

  resendLoading.value = true;
  try {
    const res = await $fetch(buildAuthUrl("auth/send-verification-email"), {
      method: "POST",
      body: { email: email.value },
    });
    toast.success(res.message || "Verification email sent successfully");
  } catch (err: any) {
    toast.error(getApiErrorMessage(err, "Failed to send verification email"));
  } finally {
    resendLoading.value = false;
  }
};

const handleSignup = async (e: Event) => {
  e.preventDefault();
  if (signupLoading.value) return;

  error.value = "";

  if (password.value !== rePassword.value) {
    error.value = "Passwords do not match.";
    return;
  }

  signupLoading.value = true;

  try {
    const res = await $fetch(buildAuthUrl("auth/signup"), {
      method: "POST",
      body: {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value,
        password: password.value,
        phone: phone.value || undefined,
      },
    });

    toast.success(res.message || "Account created! Please verify your email.");
    switchMode(true);
    firstName.value =
      lastName.value =
      phone.value =
      password.value =
      rePassword.value =
        "";
  } catch (err: any) {
    error.value = getApiErrorMessage(err, "Signup failed");
  } finally {
    signupLoading.value = false;
  }
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-sky-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 transition-colors duration-300"
  >
    <div
      class="w-full max-w-md bg-white dark:bg-slate-800 rounded-3xl shadow-[0_20px_60px_rgba(14,165,233,0.18)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-sky-100 dark:border-slate-700 p-8"
    >
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-sky-700 dark:text-sky-400">
          Welcome to InfiCoreWare
        </h2>
        <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">
          Engineering Infinite Possibilities
        </p>
      </div>

      <div
        class="flex justify-between bg-sky-50 dark:bg-slate-700/50 rounded-xl p-2 mb-6 border border-sky-100 dark:border-slate-600"
      >
        <button
          type="button"
          @click="switchMode(true)"
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            isLogin
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-gray-500 dark:text-gray-400 hover:text-sky-700 dark:hover:text-sky-300',
          ]"
        >
          Login
        </button>

        <button
          type="button"
          @click="switchMode(false)"
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            !isLogin
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300',
          ]"
        >
          Sign Up
        </button>
      </div>

      <div
        v-if="error"
        class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-500 dark:text-red-400 text-sm p-3 rounded-lg mb-4"
      >
        <p class="text-center">{{ error }}</p>

        <button
          v-if="error.includes('verify your email')"
          type="button"
          @click="resendVerification"
          :disabled="resendLoading"
          class="mt-3 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ resendLoading ? "Sending..." : "Resend Verification Email" }}
        </button>
      </div>

      <!-- LOGIN FORM -->
      <form v-if="isLogin" @submit="handleLogin" class="space-y-5">
        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-sky-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Password
          </label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              class="w-full px-4 py-3 pr-12 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-sky-500"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition"
              aria-label="Toggle password visibility"
            >
              <Eye v-if="!showPassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          :disabled="loginLoading"
          class="w-full py-3 rounded-xl font-semibold bg-sky-600 text-white hover:bg-sky-700 transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ loginLoading ? "Logging in..." : "Login" }}
        </button>

        <div
          @click="router.push('/forget-password')"
          class="text-sm text-sky-600 dark:text-sky-400 cursor-pointer hover:underline text-right"
        >
          Forgot Password?
        </div>
      </form>

      <!-- SIGN UP FORM -->
      <form v-else @submit="handleSignup" class="space-y-5">
        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            First Name
          </label>
          <input
            v-model="firstName"
            type="text"
            placeholder="Enter first name"
            class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Last Name
          </label>
          <input
            v-model="lastName"
            type="text"
            placeholder="Enter last name"
            class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Phone Number
          </label>
          <input
            v-model="phone"
            type="tel"
            placeholder="9876543210"
            class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Password
          </label>
          <div class="relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter password"
              class="w-full px-4 py-3 pr-12 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition"
              aria-label="Toggle password visibility"
            >
              <Eye v-if="!showPassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <label class="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Confirm Password
          </label>
          <div class="relative">
            <input
              v-model="rePassword"
              :type="showRePassword ? 'text' : 'password'"
              placeholder="Confirm password"
              class="w-full px-4 py-3 pr-12 rounded-xl bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="button"
              @click="showRePassword = !showRePassword"
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition"
              aria-label="Toggle confirm password visibility"
            >
              <Eye v-if="!showRePassword" class="w-5 h-5" />
              <EyeOff v-else class="w-5 h-5" />
            </button>
          </div>
        </div>

        <button
          type="submit"
          :disabled="signupLoading"
          class="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {{ signupLoading ? "Creating account..." : "Sign Up" }}
        </button>
      </form>
    </div>
  </div>
</template>