module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    'gatsby-plugin-loadable-components-ssr',
    'gatsby-plugin-netlify-cms',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/cms/projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-graphql-codegen`,
  ],
  flags: {
    FAST_DEV: true,
    // FAST_REFRESH: true,
  },
}
