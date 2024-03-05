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
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/seo-assets/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/seo-assets/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/seo-assets/favicon-16x16.png' },
                { rel: 'manifest', href: '/seo-assets/site.webmanifest' },
                { rel: 'mask-icon', href: '/seo-assets/safari-pinned-tab.svg', color: '#5bbad5' },
                { rel: 'shortcut icon', href: '/seo-assets/favicon.ico' },
                { rel: 'msapplication-TileColor', content: '#da532c' },
                { rel: 'msapplication-config', content: '/seo-assets/browserconfig.xml' },
                { rel: 'theme-color', content: '#ffffff' }
            ],
            meta: [
                { name: 'og:image' , property: 'og:image', content: '/seo-assets/og-banner.jpg' },
                { name: 'og:image:width' , property: 'og:image:width', content: '1200' },
                { name: 'og:image:height' , property: 'og:image:height', content: '630' },
                { name: 'og:image:alt' , property: 'og:image:alt', content: 'Eric Podhorecki, développeur web full-stack' },
                { name: 'og:image:type' , property: 'og:image:type', content: 'image/jpg' },
                { name: 'og:image:secure_url' , property: 'og:image:secure_url', content: 'https://posoroko.com/seo-assets/og-banner.jpg' },
                { name: 'og:title' , property: 'og:title', content: 'Eric Podhorecki, développeur web full-stack' },
                { name: 'og:type' , property: 'og:type', content: 'website' },
                { name: 'fb:app_id' , property: 'fb:app_id', content: '123456789' },
            ]
        }
    }

})