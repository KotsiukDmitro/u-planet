require('dotenv').config({
  path: '.env'
})

const ignoredLinks = [
  'action--action',
  'aws_profile--aws_profile',
  'base_field_override--base_field_override',
  'block--block',
  'block_content_type--block_content_type',
  'comment--comment',
  'comment_type--comment_type',
  'contact_form--contact_form',
  'contact_message--feedback',
  'contact_message--personal',
  'context--context',
  'date_format--date_format',
  'describedby',
  'editor--editor',
  'entity_form_display--entity_form_display',
  'entity_form_mode--entity_form_mode',
  'entity_view_display--entity_view_display',
  'entity_view_mode--entity_view_mode',
  'field_config--field_config',
  'field_storage_config--field_storage_config',
  'file--file',
  'filter_format--filter_format',
  'image_style--image_style',
  'jsonapi_resource_config--jsonapi_resource_config',
  'menu--menu',
  // 'menu_link_content--menu_link_content',
  'metatag_defaults--metatag_defaults',
  'node--partners',
  'node--slider',
  'node_type--node_type',
  'paragraph--front_page_slider',
  'paragraph--slider',
  'paragraphs_type--paragraphs_type',
  'path_alias--path_alias',
  'pathauto_pattern--pathauto_pattern',
  'rdf_mapping--rdf_mapping',
  'rest_resource_config--rest_resource_config',
  'search_page--search_page',
  'self',
  'shortcut--default',
  'shortcut_set--shortcut_set',
  'taxonomy_term--position_works_on_slider',
  'taxonomy_term--tags',
  'taxonomy_vocabulary--taxonomy_vocabulary',
  'tour--tour', 'user--user',
  'user_role--user_role',
  'view--view',
  'webform_options--webform_options',
  'webform_submission--contact'
]

module.exports = {
  trailingSlash: 'never',
  siteMetadata: {
    title: process.env.GATSBY_SITE_TITLE,
    description: process.env.GATSBY_SITE_DESCRIPTION,
    // siteUrl: process.env.GATSBY_SITE_URL
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/assets/images/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://api-urancompany.devserver.app/',
        apiBase: 'jsonapi',
        basicAuth: {
          username: process.env.API_USER_NAME,
          password: process.env.API_USER_PASSWORD
        },
        concurrentFileRequests: 50,
        disallowedLinkTypes: ignoredLinks,
        filters: {
          'node--our_work': 'include=field_overview_image,field_slider_images,field_project_video,field_cover_video,field_environment',
          'node--article': 'include=field_image',
          'taxonomy_term--authors': 'include=field_photo',
          'block_content--why_we': 'include=field_logo'
        }
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80,
        duration: 500
      }
    },

  ],
}
