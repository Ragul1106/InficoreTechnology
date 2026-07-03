<script setup lang="ts">
import { ref } from "vue"
import { useToast } from "vue-toastification"

const email = ref("")
const toast = useToast()

const handleSubmit = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]")

  const userIndex = users.findIndex(
    (u: any) => u.email.toLowerCase() === email.value.toLowerCase()
  )

  if (userIndex === -1) {
    toast.clear()
    toast.error("Email not found", {
      position: "top-right",
      timeout: 2000
    })
    return
  }

  const newPassword = "inficore123"
  users[userIndex].password = newPassword

  localStorage.setItem("users", JSON.stringify(users))

  toast.clear()
  toast.success("Password reset successful", {
    position: "top-center",
    timeout: 2000
  })

  setTimeout(() => {
    navigateTo("/login")
  }, 2200)
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-blue-100 px-4"
  >
    <!-- Card -->
    <div
      class="w-full max-w-lg bg-white rounded-3xl shadow-[0_20px_60px_rgba(14,165,233,0.18)] border border-sky-100 p-8"
    >
      <!-- Heading -->
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-sky-700">
          Forgot Password
        </h1>

        <p class="text-gray-500 mt-3 text-sm">
          Enter your registered email to reset your password
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label class="block text-gray-700 mb-2 font-medium">
            Email Address
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full py-4 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-700 transition duration-300 shadow-md"
        >
          Reset Password
        </button>
      </form>

      <!-- Bottom Links -->
      <div class="mt-6 text-center">
        <NuxtLink
          to="/login"
          class="text-sky-600 hover:text-sky-700 font-medium transition"
        >
          Back to Login
        </NuxtLink>
      </div>

      <!-- Terms -->
      <p class="text-gray-500 text-xs text-center mt-8 leading-6">
        By using InfiCore Platform, you agree to our
        <NuxtLink
          to="/terms-and-conditions"
          class="text-sky-600 hover:underline"
        >
          Terms & Conditions
        </NuxtLink>
      </p>
    </div>
  </div>
</template>