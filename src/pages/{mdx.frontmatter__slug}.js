import React from "react";
import {graphql} from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout/Layout";
import PageHero from "../components/PageHero/PageHero";
import Timeline from "../components/Timeline/Timeline";
import ContactCardsArea from "../components/ContactCardsArea/ContactCardsArea";
import FaqAccordionArea from "../components/FaqAccordionArea/FaqAccordionArea";

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

                        {frontmatterData.title === "Kontakte" &&
                        <ContactCardsArea contactItems={frontmatterData.content.contacts}/>}

                        {frontmatterData.title === "FAQ's" &&
                        <FaqAccordionArea faqItems={frontmatterData.content.faqs}/>}

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
        filter: {frontmatter: {individual_type: {regex: "/(footer-page)|(menu-page)/"}, slug: {ne: null}}, id: {eq: $id}}
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
      }
    }`