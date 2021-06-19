export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Random Words 🔀',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'X-UA-Compatible',
        content: 'IE=edge, chrome=1'
      },
      {
        name: 'HandheldFriendly',
        content: 'True'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Random Words - Get Random Words with Definition and Pronunciation.' },
      {
        name: 'referrer',
        content: 'no-referrer-when-downgrade'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'application-name',
        content: 'Random Words'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'Random Words'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://words.sanweb.info/media/random-word.jpg'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Random Words 🔀'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Random Words - Get Random Words with Definition and Pronunciation.'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://words.sanweb.info/media/random-word.jpg'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://words.sanweb.info/'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@santhoshveerece'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@santhoshveerece'
      },
      {
        hid: 'twitter:label1',
        name: 'twitter:label1',
        content: 'Written by'
      },
      {
        hid: 'twitter:data1',
        name: 'twitter:data1',
        content: '@santhoshveerece'
      }
    ],
    link: [
      // {
      //  rel: 'shortcut icon',
      //  href: '/icons/Icon-32.png'
      // },
      {
        rel: 'apple-touch-icon',
        sizes: '48x48',
        href: '/icons/Icon-48.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/icons/Icon-72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '96x96',
        href: '/icons/Icon-96.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/icons/Icon-144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '192x192',
        href: '/icons/Icon-192.png'
      },
      // {
      //  rel: 'apple-touch-icon',
      //  sizes: '512x512',
      //  href: '/icons/Icon-512.png'
      // },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://san-random-words.vercel.app' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://cdn.jsdelivr.net' },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Random Words 🔀',
        href: 'https://words.sanweb.info/feed.xml'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@type': 'Website',
          publisher: {
            '@type': 'Organization',
            name: 'Random Words 🔀',
            url: 'https://words.sanweb.info/',
            logo: {
              '@type': 'ImageObject',
              url: 'https://words.sanweb.info/icons/Icon-72.png',
              width: 72,
              height: 72
            }
          },
          url: 'https://words.sanweb.info/',
          image: {
            '@type': 'ImageObject',
            url: 'https://words.sanweb.info/media/random-word.jpg',
            width: 1920,
            height: 1080
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://words.sanweb.info/'
          },
          description: 'Random Words - Get Random Words with Definition and Pronunciation.'
        }
      }
    ]
  },
  loading: { color: '#e84b0d' },
  generate: { fallback: '404.html' },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
    'nuxt-clipboard2'
  ],
  sitemap: {
    hostname: 'https://words.sanweb.info',
    gzip: true,
    exclude: ['/404'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  feed: [
    {
      path: '/feed.xml',
      create (feed) {
        feed.options = {
          title: 'Random Words 🔀',
          link: 'https://words.sanweb.info/',
          description: 'Random Words - Get Random Words with Definition and Pronunciation.'
        }
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ],
  /*
   ** Add overriding info for meta items
   */
  meta: {
    name: 'Random Words 🔀', // this is needed to change title for all PWA meta tags
    description: 'Random Words - Get Random Words with Definition and Pronunciation.' // this is needed to change title for all PWA meta tags
  },
  manifest: {
    name: 'Random Words',
    short_name: 'Random Words',
    description: 'Random Words - Get Random Words with Definition and Pronunciation.',
    icons: [
      {
        src: '/icons/Icon-48.png',
        sizes: '48x48',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/icons/Icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    orientation: 'any'
  },
  pwa: {
    icon: false // disables the icon module
  },
  workbox: {
    dev: false,
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    }
  }
}
