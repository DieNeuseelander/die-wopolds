import {graphql, useStaticQuery} from "gatsby";


export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          title
        }
      }
      mdx(internal: {contentFilePath: {regex: "/menu/"}}) {
        frontmatter {
          menu{
            items {
              name
              slug
            }
          }
        }
      }
    }`)

    return data;
}