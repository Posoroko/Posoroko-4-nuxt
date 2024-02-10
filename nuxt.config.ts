export default defineNuxtConfig({
    modules: ['@nuxtjs/seo'],
    css: [ '@/css/base.css', '@/css/utility.css'],
    ssr: true,

    site: {
        url: 'https://posoroko.com',
        name: "Eric Podhorecki, développeur web full-stack",
        description: "Eric Podhorecki est un développeur web full-stack spécialisé dnas le développement de sites web et d'applications web.",
        defaultLocale: 'fr', // not needed if you have @nuxtjs/i18n installed
    },

    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]    
        }
    }

})
