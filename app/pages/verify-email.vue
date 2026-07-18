<script setup lang="ts">
import { useToast } from "vue-toastification"

const toast = useToast()
const route = useRoute()
const config = useRuntimeConfig()

onMounted(async () => {
  try {
    const response: any = await $fetch(
      `${config.public.apiBase}/auth/verify-email`,
      {
        method: "GET",
        query: {
          token: route.query.token
        }
      }
    )

    toast.success(response.message)

    setTimeout(() => {
      navigateTo("/login")
    }, 2000)
  } catch (err: any) {
    toast.error(
      err?.data?.message || "Verification failed"
    )
  }
})
</script>


<template>
  <div class="min-h-screen flex items-center justify-center">
    <h2 class="text-2xl font-bold text-sky-600">
      Verifying your email...
    </h2>
  </div>
</template>