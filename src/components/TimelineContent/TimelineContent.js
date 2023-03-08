import * as React from 'react';
import {IconWrapper, TextWrapper} from "./TimelineContent.styles";
import {StyledImg} from "./TimelineContent.styles";

export const TimelineText = ({children}) => {
    return (
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}

export const TimelineIcon = ({icon}) => {
    return (
        <IconWrapper>
            <StyledImg image={icon.childImageSharp.gatsbyImageData} alt="program icon"/>
        </IconWrapper>
    )
}
