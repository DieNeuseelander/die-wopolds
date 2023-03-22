import * as React from "react"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import ExternalLinksArea from "../components/ExternalLinkArea/ExternalLinksArea";
import Pic from "../components/Pic/Pic";
import {useIndexBodyQuery} from "../hooks/useIndexBodyQuery";

const IndexPage = () => {

    const { mdx: {frontmatter : indexData}} = useIndexBodyQuery();

    return (
        <Layout>
            <Hero/>
            <Pic image={indexData[`newspaper_image`]}/>
            <ExternalLinksArea/>
        </Layout>
    )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <SEO title="Home" />

export default IndexPage
