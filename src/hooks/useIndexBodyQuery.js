import {useStaticQuery, graphql} from "gatsby";


export const useIndexBodyQuery = () => {
    const data = useStaticQuery(graphql`
    query IndexBodyQuery {
      mdx(internal: {contentFilePath: {regex: "/home_page/"}}) {
        frontmatter {
         newspaper_image {
              childImageSharp {
                  gatsbyImageData
              }
          }
          
          ext_link_1_image {
              childImageSharp {
                  gatsbyImageData
              }
          }
          ext_link_1_text
          ext_link_1_link
          ext_link_2_image {
              childImageSharp {
                  gatsbyImageData
              }
          }
          ext_link_2_text
          ext_link_2_link
          ext_link_3_image {
              childImageSharp {
                  gatsbyImageData
              }
          }
          ext_link_3_text
          ext_link_3_link
          ext_link_4_image {
              childImageSharp {
                  gatsbyImageData
              }
          }
          ext_link_4_link
          ext_link_4_text
        }
      }
    }
    `)

    return data;
}