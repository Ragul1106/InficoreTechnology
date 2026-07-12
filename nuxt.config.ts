export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss"],

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
          type: "image/x-icon",
          href: "/favicon.png",
        },
      ],
    },
  },
});
