const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')

let config

if (process.env.VUE_APP_BOOK) {
  config = {
    lintOnSave: false,
    pages: {
      index: {
        entry: 'src/vue-book/book-main.js',
        template: 'public/index.html',
      },
    },
  }
}

if (!process.env.VUE_APP_BOOK) {
  config = {
    lintOnSave: false,
    pages: {
      index: {
        // entry for the page
        entry: 'src/app/main.js',
        // the source template
        template: 'public/index.html',
        // output as dist/index.html
        filename: 'index.html',
        // when using title option,
        // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Vuestic Admin',
        // chunks to include on this page, by default includes
        // extracted common chunks and vendor chunks.
        chunks: ['chunk-vendors', 'chunk-common', 'index'],
      },
    },
    configureWebpack: {
      resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': path.resolve('src'),
        },
      },
      plugins: [new StylelintPlugin({
        files: ['src/**/*.{vue,htm,html,css,sss,less,scss}'],
      })],
    },
    css: {
      loaderOptions: {
        sass: {
          // Preload vuestic-ui variables and mixins for every component
          data: `@import "~vuestic-ui/src/components/vuestic-sass/resources/resources.scss";`,
        },
      },
    },
    pwa: {
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: './src/service-worker.js',
        importWorkboxFrom: 'local',
      },
    },
  }
}

module.exports = config
