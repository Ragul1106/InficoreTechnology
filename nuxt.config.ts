export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],

  build: {
    transpile: ["vue-toastification"],
  },

  runtimeConfig: {
    public: {
      apiBase: "https://infocorewarebackend.onrender.com",
    },
  },

  routeRules: {
    "/dashboard/**": { middleware: ["auth"] },
    "/profile/**": { middleware: ["auth"] },
    // Add more protected routes
  }, // <-- Missing comma was here

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
});