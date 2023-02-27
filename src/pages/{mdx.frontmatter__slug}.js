import React from "react";
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/Layout";
import PageHero from "../components/PageHero/PageHero";

//Styling

const Wrapper = styled.div`
    max-width; 1180px;
    margin: 0 auto;
    padding: 20px;
`

const ContentWrapper = styled.div`
    display: block;
    
    @media(min-width: 992px) {
        display: flex;
    }
`

const PageContent = styled.article`
    margin-top: 20px;
`

//Site

// data = pageQuery
const PageTemplate = ({data}) => (
    <Layout>
        {data.allMdx.nodes[0].frontmatter.image ? (
            <PageHero
                img={
                    data.allMdx.nodes[0].frontmatter.image.childImageSharp
                        .gatsbyImageData
                }
            />
        ) : null}
        <Wrapper>
            <ContentWrapper>
                <PageContent>
                    <p>Content</p>
                </PageContent>
            </ContentWrapper>
        </Wrapper>
    </Layout>
)

export default PageTemplate;



//Graph-QL

export const pageQuery = graphql`
    query($id: String) {
      allMdx(
        filter: {internal: {contentFilePath: {regex: "/pages/"}}, id: {eq: $id}}
        ) {
        nodes {
          frontmatter {
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }`