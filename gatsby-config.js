/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

// require('dotenv').config({
//   path: '.env'
// })


// module.exports = {
//   trailingSlash: 'never',
//   siteMetadata: {
//     title: process.env.GATSBY_SITE_TITLE,
//     description: process.env.GATSBY_SITE_DESCRIPTION,
//     siteUrl: process.env.GATSBY_SITE_URL
//   },
//   plugins: [
//     `gatsby-plugin-image`,
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: `${__dirname}/src/assets/images/`,
//       },
//     },
//     {
//       resolve: 'gatsby-source-drupal',
//       options: {
//         baseUrl: process.env.GATSBY_API_BASE_URL,
//         apiBase: 'jsonapi',
//         basicAuth: {
//           username: process.env.API_USER_NAME,
//           password: process.env.API_USER_PASSWORD
//         },
//         concurrentFileRequests: 50,
//         disallowedLinkTypes: ignoredLinks,
//         filters: {
//           'node--our_work': 'include=field_overview_image,field_slider_images,field_project_video,field_cover_video,field_environment',
//           'node--article': 'include=field_image',
//           'taxonomy_term--authors': 'include=field_photo',
//           'block_content--why_we': 'include=field_logo'
//         }
//       }
//     },
//     {
//       resolve: 'gatsby-plugin-manifest',
//       options: {
//         icon: `${__dirname}/src/assets/images/gatsby-icon.png`
//       }
//     },

//   ],
// }
