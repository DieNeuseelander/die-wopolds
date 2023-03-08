import * as React from "react"
import SEO from "../components/SEO/SEO"
import PageBody from "../components/PageBody/PageBody";
import {usePageFaqQuery} from "../hooks/usePageFaqQuery";
import FaqAccordionArea from "../components/FaqAccordionArea/FaqAccordionArea";

const FaqPage = () => {
    const { mdx: {frontmatter : pageData}} = usePageFaqQuery();

    return(
        <PageBody pageData={pageData}>
            <FaqAccordionArea faqItems={pageData.content.faqs}/>
        </PageBody>
    )
}


export const Head = () => <SEO title="FAQ" />

export default FaqPage;