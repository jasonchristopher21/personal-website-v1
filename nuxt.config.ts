// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
    ['nuxt-font-loader', { url: '~/assets/fonts/font-face.css' }],
    '@pinia/nuxt',
  ],
  components: [
    { path: '~/components/special-components', prefix: 'Special' },
    '~/components'
  ],
})
