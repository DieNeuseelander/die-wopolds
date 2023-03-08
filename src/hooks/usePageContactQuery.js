import {useStaticQuery ,graphql} from "gatsby";


export const usePageContactQuery = () => {
    const data = useStaticQuery(graphql`
    query PageContactQuery {
      mdx(frontmatter: {slug: {eq: "/contact"}}) {
        frontmatter{
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
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
        }
      }
    }`)

    return data;
}