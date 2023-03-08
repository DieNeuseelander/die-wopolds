import {useStaticQuery, graphql} from "gatsby";


export const usePageFaqQuery = () => {
    const data = useStaticQuery(graphql`
    query PageFaqQuery {
      mdx(frontmatter: {slug: {eq: "/faq"}}) {
        frontmatter{
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            content {
              faqs {
                answer
                question
              }
            }
        }
      }
    }`)

    return data;
}