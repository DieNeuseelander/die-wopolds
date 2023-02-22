/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Die Wopolds`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,

    //Goolge Fonts
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `Teko\:200, 400, 500, 600, 700`,
              `Dancing Script\:400i, 500i, 600i, 700i`,
              'Cormorant Garamond\:300, 400, 500, 600, 700'
          ],
          display: `swap`,
      }
    },

    //Where should Gatsby search for data for queries:
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
    }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem', //adds to query: allFile, file // read data ABOUT files of file system --> file nodes
      options: {
          "name": "data",
          "path": `${__dirname}/src/data/`
      },
      __key: "data"
    }]
};