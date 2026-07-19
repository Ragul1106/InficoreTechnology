<script setup lang="ts">
import { computed, ref } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const isLogin = ref(true);
const email = ref("");
const password = ref("");
const rePassword = ref("");
const error = ref("");

const router = useRouter();

const firstName = ref("");
const lastName = ref("");
const phone = ref("");

const config = useRuntimeConfig();

const apiBase = computed(() => {
  const rawBase =
    config.public?.apiBase || "https://infocorewarebackend.onrender.com/api";
  return rawBase.replace(/\/+$/, "");
});

const buildAuthUrl = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");
  return `${apiBase.value}/${normalizedPath}`;
};

const persistAuth = (payload: any) => {
  const authData = payload?.data ?? payload;
  const accessToken = authData?.accessToken ?? authData?.token;
  const refreshToken = authData?.refreshToken ?? null;
  const user = authData?.user ?? null;

  if (accessToken) {
    localStorage.setItem("token", accessToken);
  }

  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }

  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

const handleLogin = async (e: Event) => {
  e.preventDefault();
  error.value = "";

  try {
    const response: any = await $fetch(buildAuthUrl("auth/login"), {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    });

    persistAuth(response);
    router.replace("/");
  } catch (err: any) {
    error.value = err?.data?.message || "Invalid email or password";
  }
};

const resendVerification = async () => {
  try {
    const response: any = await $fetch(
      buildAuthUrl("auth/send-verification-email"),
      {
        method: "POST",
        body: {
          email: email.value,
        },
      },
    );

    toast.success(response.message);
  } catch (err: any) {
    toast.error(err?.data?.message || "Failed to send verification email");
  }
};

const handleSignup = async (e: Event) => {
  e.preventDefault();
  error.value = "";

  if (password.value !== rePassword.value) {
    error.value = "Passwords do not match.";
    return;
  }

  try {
    const response: any = await $fetch(buildAuthUrl("auth/signup"), {
      method: "POST",
      body: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
      },
    });

    persistAuth(response);
    router.replace("/");
  } catch (err: any) {
    error.value = err?.data?.message || "Signup failed";
  }
};
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-sky-50 to-blue-100"
  >
    <div
      class="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_rgba(14,165,233,0.18)] border border-sky-100 p-8"
    >
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-sky-700">Welcome to InfiCoreWare</h2>
        <p class="text-gray-500 mt-2 text-sm">
          Engineering Infinite Possibilities
        </p>
      </div>

      <div
        class="flex justify-between bg-sky-50 rounded-xl p-2 mb-6 border border-sky-100"
      >
        <button
          @click="
            isLogin = true;
            error = '';
          "
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            isLogin
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-gray-500 hover:text-sky-700',
          ]"
        >
          Login
        </button>

        <button
          @click="
            isLogin = false;
            error = '';
          "
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            !isLogin
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-500 hover:text-blue-700',
          ]"
        >
          Sign Up
        </button>
      </div>

      <div
        v-if="error"
        class="bg-red-50 border border-red-200 text-red-500 text-sm p-3 rounded-lg mb-4"
      >
        <p class="text-center">{{ error }}</p>

        <button
          v-if="error.includes('verify your email')"
          @click="resendVerification"
          class="mt-3 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Resend Verification Email
        </button>
      </div>

      <form v-if="isLogin" @submit="handleLogin" class="space-y-5">
        <div>
          <label class="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-sky-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 rounded-xl font-semibold bg-sky-600 text-white hover:bg-sky-700 transition duration-300 shadow-md"
        >
          Login
        </button>

        <div
          @click="router.push('/forget-password')"
          class="text-sm text-sky-600 cursor-pointer hover:underline text-right"
        >
          Forgot Password?
        </div>
      </form>

      <form v-else @submit="handleSignup" class="space-y-5">
        <div>
          <label class="block text-gray-700 mb-2 font-medium">
            First Name
          </label>
          <input
            v-model="firstName"
            type="text"
            placeholder="Enter first name"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2 font-medium">
            Last Name
          </label>
          <input
            v-model="lastName"
            type="text"
            placeholder="Enter last name"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2 font-medium">
            Phone Number
          </label>
          <input
            v-model="phone"
            type="tel"
            placeholder="9876543210"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-blue-500 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Enter password"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2 font-medium"
            >Confirm Password</label
          >
          <input
            v-model="rePassword"
            type="password"
            placeholder="Confirm password"
            class="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>
