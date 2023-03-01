import * as React from 'react';
import {IconWrapper, TextWrapper} from "./TimelineContent.styles";

export const TimelineText = ({children}) => {
    return (
        <TextWrapper>
            {children}
        </TextWrapper>
    )
}

export const TimelineIcon = ({children}) => {
    return (
        <IconWrapper>
            {children}
        </IconWrapper>
    )
}
