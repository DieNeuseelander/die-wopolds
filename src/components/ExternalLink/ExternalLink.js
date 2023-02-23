import React from "react";
import {StyledImg, Wrapper, ExtLinkImageText, ExtLinkImageTextWrapper} from "./ExternalLink.styles"

const ExternalLink = ({image, link, text}) => (

    <Wrapper>
        <StyledImg
            image={image}
            alt="External Link Image"
            width={720}
            style={{position: 'initial'}}
        />
        <a href={link}>
            <ExtLinkImageTextWrapper>
                <ExtLinkImageText>
                    {text}
                </ExtLinkImageText>
            </ExtLinkImageTextWrapper>
        </a>
    </Wrapper>
)

export default ExternalLink;