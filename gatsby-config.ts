import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Shir's Casa`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 100,
          breakpoints: [560, 960, 1400]
        },
        defaultQuality: 100
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-alias-imports',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "styles/config.scss";`,
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`]
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
}

export default config
