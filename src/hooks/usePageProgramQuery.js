import {graphql, useStaticQuery} from "gatsby";


export const usePageProgramQuery = () => {

    const data = useStaticQuery(graphql`
    query PageProgramQuery {
      mdx(frontmatter: {slug: {eq: "/program"}}) {
        frontmatter{
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            content {
              timelineItems {
                icon{
                    childImageSharp {
                      gatsbyImageData
                    }
                }
                step
                text
              }
            }
        }
      }
    }`)

    return data;
}