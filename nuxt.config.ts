export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:5000/api",
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
