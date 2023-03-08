import * as React from "react"
import SEO from "../components/SEO/SEO"
import PageBody from "../components/PageBody/PageBody";
import {usePageProgramQuery} from "../hooks/usePageProgramQuery";
import Timeline from "../components/Timeline/Timeline";

const ProgramPage = () => {
    const { mdx: {frontmatter : pageData}} = usePageProgramQuery();

    return(
        <PageBody pageData={pageData}>
            <Timeline timelineItems={pageData.content.timelineItems}/>
        </PageBody>
    )
}


export const Head = () => <SEO title="Programm" />

export default ProgramPage;