// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      title: "SAST OJ MANAGEMENT",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  alias: {
    variables: "@/_variables.scss",
  },
  build: {
    transpile: ["vuetify"],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@pinia/nuxt",
    "nuxt-svgo",
    [
      "@nuxtjs/google-fonts",
      {
        families: { "Fira Mono": true },
      },
    ],
    async (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./assets/styles/_variables.scss" as *;',
        },
      },
    },
  },
});
