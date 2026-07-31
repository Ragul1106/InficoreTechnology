<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@800;900&display=swap",
    },
  ],
});
</script>

<template>
  <div
    class="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-white transition-colors duration-300"
  >
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>