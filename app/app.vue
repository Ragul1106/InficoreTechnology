<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
// import "@fontsource/montserrat/800.css";
// import "@fontsource/montserrat/900.css";


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
