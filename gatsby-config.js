module.exports = {
  siteMetadata: {
    title: "gatsby-decoupled-drupal",
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://dev-drupal-api-testing.pantheonsite.io//`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
