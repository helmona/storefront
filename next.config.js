const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  basePath: '',
  assetPrefix: !debug ? '/' : '', 
  /* basePath: '/storefront', */
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      // "/about": { page: "/about" },
    }
  },
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  },
  experimental: {
    urlImports: [
      "https://framer.com/m/",
      "https://framerusercontent.com/",
      "https://ga.jspm.io/",
      "https://jspm.dev/",
    ],
  },
  images: {
    loader: 'custom',
  },
}
