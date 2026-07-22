export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: [
    "~/assets/css/main.css",
    "vue-toastification/dist/index.css",
  ],

  modules: ["@nuxtjs/tailwindcss"],

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