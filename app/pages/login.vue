<script setup lang="ts">
import { ref } from "vue"

const isLogin = ref(true)
const email = ref("")
const password = ref("")
const rePassword = ref("")
const error = ref("")

const router = useRouter()

const getUsers = () => {
  return JSON.parse(localStorage.getItem("users") || "[]")
}

const handleLogin = (e: Event) => {
  e.preventDefault()

  const users = getUsers()
  const user = users.find(
    (u: any) => u.email === email.value && u.password === password.value
  )

  if (user) {
    localStorage.setItem("user", JSON.stringify(user))
    router.push("/")
  } else {
    error.value = "Invalid credentials. Please try again."
    isLogin.value = false
  }
}

const handleSignup = (e: Event) => {
  e.preventDefault()

  const users = getUsers()
  const existing = users.find((u: any) => u.email === email.value)

  if (existing) {
    error.value = "Account already exists. Please login."
    isLogin.value = true
  } else if (password.value !== rePassword.value) {
    error.value = "Passwords do not match."
  } else {
    const newUser = {
      email: email.value,
      password: password.value
    }

    localStorage.setItem("users", JSON.stringify([...users, newUser]))
    localStorage.setItem("user", JSON.stringify(newUser))

    router.push("/")
  }
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-sky-50 to-blue-100"
  >
    <!-- Card -->
    <div
      class="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_rgba(14,165,233,0.18)] border border-sky-100 p-8"
    >
      <!-- Title -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-sky-700">
          Welcome to InfiCore
        </h2>
        <p class="text-gray-500 mt-2 text-sm">
          Engineering Infinite Possibilities
        </p>
      </div>

      <!-- Tabs -->
      <div
        class="flex justify-between bg-sky-50 rounded-xl p-2 mb-6 border border-sky-100"
      >
        <button
          @click="isLogin = true; error = ''"
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            isLogin
              ? 'bg-sky-600 text-white shadow-md'
              : 'text-gray-500 hover:text-sky-700'
          ]"
        >
          Login
        </button>

        <button
          @click="isLogin = false; error = ''"
          :class="[
            'w-1/2 py-2 rounded-lg font-semibold transition duration-300',
            !isLogin
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-gray-500 hover:text-blue-700'
          ]"
        >
          Sign Up
        </button>
      </div>

      <!-- Error -->
      <div
        v-if="error"
        class="bg-red-50 border border-red-200 text-red-500 text-sm p-3 rounded-lg mb-4 text-center"
      >
        {{ error }}
      </div>

      <!-- Login Form -->
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

      <!-- Signup Form -->
      <form v-else @submit="handleSignup" class="space-y-5">
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
          <label class="block text-gray-700 mb-2 font-medium">Confirm Password</label>
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