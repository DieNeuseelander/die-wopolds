import {graphql, useStaticQuery} from "gatsby";


export const useFooterQuery = () => {
    const data = useStaticQuery(graphql`
    query FooterQuery {
      mdx(frontmatter: {individual_type: {eq: "footer-page"}}) {
        frontmatter {
          content {
            contacts {
              mail
              tel
              name
              role
              pic {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          id
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
          status
          title
        }
      }
}`)

    return data;
}