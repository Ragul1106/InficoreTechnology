export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],

  // vue-toastification is CommonJS; transpile it so `import { useToast }`
  // resolves during SSR (Nitro) instead of throwing a named-export error.
  build: {
    transpile: ["vue-toastification"],
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
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
});
