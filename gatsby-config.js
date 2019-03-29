module.exports = {
  siteMetadata: {
    title: `Byron Is Me`,
    description: `I am a software developer at Clipchamp, with a love for React, Angular and Typescript. Follow me on my journey through programming, fitness and life.`,
    author: `@byron__mejia`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
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
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Byron Is (dot) Me`,
        short_name: `ByronIs.Me`,
        start_url: `/`,
        background_color: `#635ee3`,
        theme_color: `#635ee3`,
        display: `minimal-ui`,
        icon: `src/images/profile.png`
      },
    },
    'gatsby-plugin-offline',
  ],
}
