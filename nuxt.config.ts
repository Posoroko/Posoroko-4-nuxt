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
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/seo-assets/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/seo-assets/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/seo-assets/favicon-16x16.png' },
                { rel: 'manifest', href: '/images/seo-assets/site.webmanifest' },
                { rel: 'mask-icon', href: '/images/seo-assets/safari-pinned-tab.svg', color: '#5bbad5' },
                { rel: 'shortcut icon', href: '/images/seo-assets/favicon.ico' },
                { rel: 'msapplication-TileColor', content: '#da532c' },
                { rel: 'msapplication-config', content: '/images/seo-assets/browserconfig.xml' },
                { rel: 'theme-color', content: '#ffffff' }
            ]    
        }
    }

})

