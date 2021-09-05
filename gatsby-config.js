module.exports = {
  siteMetadata: {
    title: `Complian`,
    description: `Complian is a cloud-based Saas solution that uses data-informed artificial intelligence for the inspection process and assists with identifying trends for corrective actions.`,
    author: `Complian`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rgep4j2f85s5`,
        accessToken: `fzbr5Sgzh5Fw212OH2O87T0b3yzNHpTQqQHxH8A4F30`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `${__dirname}/src/common/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/common/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Poppins:300,400,500,600,700',
            'DM Sans:100,300,400,400i,500,500i,600,700,700i',
            'B612:400,400i,700,700i',
            'Heebo:300,400,500,600,700,800',
            'Raleway:500,600',
            'Open Sans:300,400,600,700,800',
            'Lato:300,400,700',
            'Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i',
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};