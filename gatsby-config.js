/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Die Wopolds`,
        siteUrl: `https://www.die-wopolds.de`,
        author: `@LouisaReinger`
    },
    plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
        // `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-mdx`,

        //Goolge Fonts
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Teko\:200, 400, 500, 600, 700`,
                    `Dancing Script\:400i, 500i, 600i, 700i`,
                    'Cormorant Garamond\:300, 400, 500, 600, 700',
                    'Playfair Display\:400, 400i, 500, 500i, 600, 600i, 700, 700i, 800, 800i, 900, 900i'
                ],
                display: `swap`,
            }
        },

        //look of tab
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Die Wopolds`,
                short_name: `wopold`,
                start_url: `/`,
                display: `minimal-ui`,
                icon: `src/images/heart.svg`,
            }
        },

        //Where should Gatsby search for data for queries:
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/data/pages`
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
        }
        ]
};