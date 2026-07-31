// Nuxt configuration
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: [
    "~/assets/css/main.css",
    "vue-toastification/dist/index.css",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ],

  colorMode: {
    preference: "system",   // light | dark | system
    fallback: "light",
    classSuffix: "",        // important → adds class "dark"
    storageKey: "nuxt-color-mode",
  },

  build: {
    transpile: ["vue-toastification"],
  },

  runtimeConfig: {
    public: {
      apiBase: "https://infocorewarebackend.onrender.com",
    },
  },

  app: {
    head: {
      title: "InfiCoreWare Technologies",
      meta: [
        {
          name: "description",
          content: "Engineering Infinite Possibilities",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/favicon.png",
        },
      ],
    },
  },

  compatibilityDate: "2026-07-22",
});