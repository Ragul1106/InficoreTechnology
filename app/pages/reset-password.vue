<script setup lang="ts">
import { ref } from "vue"
import { useToast } from "vue-toastification"

const toast = useToast()
const route = useRoute()
const config = useRuntimeConfig()

const password = ref("")
const confirmPassword = ref("")

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    toast.error("Passwords do not match")
    return
  }

  try {
    const response: any = await $fetch(
      `${config.public.apiBase}/auth/reset-password`,
      {
        method: "POST",
        body: {
          token: route.query.token,
          password: password.value
        }
      }
    )

    toast.success(response.message)

    setTimeout(() => {
      navigateTo("/login")
    }, 2000)
  } catch (err: any) {
    toast.error(
      err?.data?.message || "Unable to reset password"
    )
  }
}
</script>