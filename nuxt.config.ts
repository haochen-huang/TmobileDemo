import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  
  vite: {
    plugins: [tailwindcss()],
  },
  
  css: ["~/assets/css/main.css"],
  
  postcss: {
    plugins: {
      autoprefixer: {},
      "postcss-pxtorem": {
        rootValue: 16,
        propList: ["*"],
        selectorBlackList: [".ignore"],
        minPixelValue: 1,
        mediaQuery: false,
        exclude: /node_modules/i,
      },
    },
  },
  
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxtjs/fontaine",
  ],
});
