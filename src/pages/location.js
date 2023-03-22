import * as React from "react"
import SEO from "../components/SEO/SEO"
import PageBody from "../components/PageBody/PageBody";
import {usePageLocationQuery} from "../hooks/usePageLocationQuery";
import {GatsbyImage} from "gatsby-plugin-image";
import styled from "styled-components"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    padding: 0 40px;
    max-width: calc(2 * 500px + 2*40px);
    margin: auto auto var(--vertical-space);
    
    a{
        max-width: 500px;
        margin: auto;
    }
    
    @media screen and (max-width: 1080px){
        padding: 0 var(--lateral_distance);
        grid-template-columns: 1fr;
    }
`

const LocationPage = () => {
    const { mdx: {frontmatter : pageData}} = usePageLocationQuery();

    return(
        <PageBody pageData={pageData}>
            <Wrapper>
                {pageData.locations.map(item => (
                    <a key={item.title} target='_blank' href={item.url}>
                        <GatsbyImage alt={item.title} image={item.img.childImageSharp.gatsbyImageData}/>
                    </a>
            ))}
            </Wrapper>
        </PageBody>
    )
}


export const Head = () => <SEO title="Location" />

export default LocationPage;