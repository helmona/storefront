module.exports = {
  reactStrictMode: true,
  assetPrefix: '/storefront/',
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
