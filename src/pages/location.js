import * as React from "react"
import SEO from "../components/SEO/SEO"
import PageBody from "../components/PageBody/PageBody";
import {usePageLocationQuery} from "../hooks/usePageLocationQuery";

const LocationPage = () => {
    const { mdx: {frontmatter : pageData}} = usePageLocationQuery();

    return(
        <PageBody pageData={pageData}>

        </PageBody>
    )
}


export const Head = () => <SEO title="Location" />

export default LocationPage;