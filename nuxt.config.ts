// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', "@nuxtjs/tailwindcss"],
  content: {
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  },
  // @nuxtjs/tailwindcss
  css: [
    "@/assets/main.scss"
  ],
  routeRules: {
    '/': { prerender: true }
  }
})
