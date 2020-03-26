const webpack = require("webpack");
require("dotenv").config();
let baseUrl = "";
switch (process.env.BASE) {
  case "dev":
    baseUrl = process.env.DEV_BASE_URL;
    break;
  case "production":
    baseUrl = process.env.PROD_BASE_URL;
    break;
  default:
    baseUrl = process.env.DEV_BASE_URL;
    break;
}

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "/themes/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "/themes/css/function.min.css"
      },
      {
        rel: "stylesheet",
        href: "/themes/css/handsome.min.css"
      },
      {
        rel: "stylesheet",
        href: "/themes/css/jquery.fancybox.min.css"
      },
      {
        rel: "stylesheet",
        href: "/themes/css/vs.min.css"
      },
      {
        rel: "stylesheet",
        href: "/themes/css/emojify.min.css"
      }
    ],
    script: [
      { src: "/themes/js/hm.js" },
      { src: "/themes/js/jquery.min.js" },

      {
        src: "/themes/js/jquery.pjax.min.js"
      },

      {
        src: "/themes/js/jquery.fancybox.min.js"
      },

      {
        src: "/themes/js/fancyMorph.min.js"
      },
      { src: "/themes/js/emojify.min.js" },
      { src: "/themes/js/bootstrap.min.js" },

      {
        src: "/themes/js/SmoothScroll.min.js"
      },
      {
        src: "/themes/js/feather.min.js"
      },

      {
        src: "/themes/js/easypiechart.min.js"
      },
   
      {
        src: "/themes/js/html2canvas.min.js"
      },
      {
        src: "/themes/js/function.min.js"
      },
      {
        src: "/themes/js/core.min.js"
      }
    
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["element-ui/lib/theme-chalk/index.css", "assets/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/element-ui", { src: "~/plugins/api.js" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage

    ["@nuxtjs/axios", "@nuxtjs/dotenv"]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: baseUrl
  },
  /*
   ** Build configuration
   */
  build: {
    //   plugins: [
    //     new webpack.ProvidePlugin({
    //         '$' : 'jquery'
    //     })
    // ],
    extractCSS: { allChunks: true },
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  env: {
    baseUrl: baseUrl,
    deskUrl: process.env.FORE_BASE_URL,
    adminUrl: process.env.FORE_ADMIN_URL
  }
};
