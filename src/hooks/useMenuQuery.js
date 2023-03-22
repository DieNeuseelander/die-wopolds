import {graphql, useStaticQuery} from "gatsby";


export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMdx(
        filter: {frontmatter: {individual_type: {eq: "menu-page"}}}
        sort: {frontmatter: {position: ASC}}
      ) {
        nodes{
          frontmatter {
            slug
            title
          }
        }
      }
    }`)

    return data;
}