import React from "react";
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/Layout";
import PageHero from "../components/PageHero/PageHero";
import Timeline from "../components/Timeline/Timeline";

//Styling

const Wrapper = styled.div`
    max-width; 1180px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    
    h1 {
        // font-family: 'Cormorant Garamond', serif;
        margin: 30px auto;
    }
    
    @media (max-width: 767px){
        padding: 0;
        
        h1{
            font-size: 2rem;
        }
    }
`

const ContentWrapper = styled.div`
    display: block;
`

const PageContent = styled.article`
    margin-top: 20px;
`

//Site

// data = pageQuery
const PageTemplate = ({data}) => {
    const frontmatterData = data.allMdx.nodes[0].frontmatter;

    return (
        <Layout>
            {frontmatterData.image ? (
                <PageHero
                    img={
                        frontmatterData.image.childImageSharp
                            .gatsbyImageData
                    }
                />
            ) : null}

            <Wrapper>
                <h1>{frontmatterData.title}</h1>
                <ContentWrapper>
                    <PageContent>
                        {frontmatterData.title === "Programm" &&
                        <Timeline timelineItems={frontmatterData.content.timelineItems}/>}
                    </PageContent>
                </ContentWrapper>
            </Wrapper>

        </Layout>
    )
}

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
            content {
              timelineItems {
                icon
                step
                text
              }
              locations
              faqs {
                answer
                question
              }
            }
          }
        }
      }
    }`