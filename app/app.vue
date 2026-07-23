<script setup lang="ts">
// Root component: shows the Navbar and Footer around every page (<NuxtPage />)
// and preloads the Montserrat font used in the site header.
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
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>
