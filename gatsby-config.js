require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    {
      resolve: "@sentry/gatsby",
      options: {
        dsn: "https://407cf15d3820426b98cfcd96540aa064@o525042.ingest.sentry.io/5643797",
        sampleRate: 0.7,
      }
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'src/pages'
      }
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: 'digital-coe-jamstack-ecommerce',
        accessToken: 'c5f2d6b52d0a27b341dc46c883565373',
        includeCollections: ["shop"],
      }
    }
  ]
}
