module.exports = {
  siteMetadata: {
    title: `Byron Is Me`,
    description: `I am a software developer at Clipchamp, with a love for React, Angular and Typescript. Follow me on my journey through programming, fitness and life.`,
    author: `@byron__mejia`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'blog',
        link: '/blog'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137419172-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
