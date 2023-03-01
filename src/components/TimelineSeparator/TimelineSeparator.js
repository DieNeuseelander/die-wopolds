import * as React from 'react';
import {Connector, Dot, SeparatorWrapper, SpaceLeft, SpaceRight} from "./TimelineSeparator.styles";

export const TimelineDot = () => {
    return(
        <SeparatorWrapper>
            <Dot/>
        </SeparatorWrapper>
    )
}

export const TimelineConnector = () => {
    return(
        <>
            <SpaceLeft/>
            <SeparatorWrapper>
                <Connector/>
            </SeparatorWrapper>
            <SpaceRight/>
        </>
    )
}
