import {graphql, useStaticQuery} from "gatsby";


export const usePageLocationQuery = () => {
    const data = useStaticQuery(graphql`
    
    query PageLocationQuery {
      mdx(frontmatter: {slug: {eq: "/location"}}) {
        frontmatter{
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            content {
              locations
            }
        }
      }
    }`)

    return data;
}