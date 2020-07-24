module.exports = {
  siteMetadata: {
    style: `light`,
    layout: `sidebar`,
    social: {
      medium: `https://medium.com/@vsr061`,
      twitter: `https://twitter.com/virajrane_com`,
      linkedIn: `https://www.linkedin.com/in/viraj-rane`
    }
  },
  pathPrefix: process.env.PATH_PREFIX || '/',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `yaml`, path: `${__dirname}/src/data` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `markdown-pages`, path: `${__dirname}/src/data/posts` },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              lineNumbers: true
            }
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        }
      },
    },
  ],
}
