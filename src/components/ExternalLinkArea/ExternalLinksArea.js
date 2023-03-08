import React from "react";
import {useIndexBodyQuery} from "../../hooks/useIndexBodyQuery";
import {Wrapper, SectionWrapper} from "./ExternalLinksArea.styles";
import ExternalLink from "../ExternalLink/ExternalLink";

const ExternalLinksArea = () => {
    const { mdx: {frontmatter : indexData}} = useIndexBodyQuery();

    return(
        <Wrapper>
            <h1>Du möchtest mitgestalten? Gerne!</h1>
            <SectionWrapper>
                <ExternalLink
                    image={indexData[`ext_link_1_image`].childImageSharp.gatsbyImageData}
                    link={indexData[`ext_link_1_link`]}
                    text={indexData[`ext_link_1_text`]}
                />
                <ExternalLink
                    image={indexData[`ext_link_2_image`].childImageSharp.gatsbyImageData}
                    link={indexData[`ext_link_2_link`]}
                    text={indexData[`ext_link_2_text`]}
                />
            </SectionWrapper>

            <h1>Bilder</h1>
            <SectionWrapper>
                <ExternalLink
                    image={indexData[`ext_link_3_image`].childImageSharp.gatsbyImageData}
                    link={indexData[`ext_link_3_link`]}
                    text={indexData[`ext_link_3_text`]}
                />
                <ExternalLink
                    image={indexData[`ext_link_4_image`].childImageSharp.gatsbyImageData}
                    link={indexData[`ext_link_4_link`]}
                    text={indexData[`ext_link_4_text`]}
                />
            </SectionWrapper>
        </Wrapper>
    )
}

export default ExternalLinksArea;