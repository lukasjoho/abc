module.exports = {
  siteMetadata: {
    title: `Abacum`,
    description: `Abacum helps finance teams scale their companies through business insights, collaboration and automation.`,
    author: `@lukasjoho`,
    siteUrl: `https://kind-ride-786754.netlify.app`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/image-logo.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
