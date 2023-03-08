import * as React from "react"
import SEO from "../components/SEO/SEO"
import PageBody from "../components/PageBody/PageBody";
import {usePageContactQuery} from "../hooks/usePageContactQuery";
import ContactCardsArea from "../components/ContactCardsArea/ContactCardsArea";

const ContactPage = () => {
    const { mdx: {frontmatter : pageData}} = usePageContactQuery();

    return(
        <PageBody pageData={pageData}>
            <ContactCardsArea contactItems={pageData.content.contacts}/>
        </PageBody>
    )
}


export const Head = () => <SEO title="Kontakte" />

export default ContactPage;