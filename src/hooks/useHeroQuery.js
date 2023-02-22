import {useStaticQuery, graphql} from "gatsby";


export const useHeroQuery = () => {
    const data = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
        }
      }
      mdx(internal: {contentFilePath: {regex: "/home_page/"}}) {
        frontmatter {
          title
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }`)
        
    return data;
}