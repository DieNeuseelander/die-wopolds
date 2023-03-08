import * as React from 'react';
import {TimelineConnector, TimelineDot} from "../TimelineSeparator/TimelineSeparator";
import {Wrapper, TimelineItem} from "./Timeline.styles";
import {TimelineIcon, TimelineText} from "../TimelineContent/TimelineContent";


export default function Timeline({timelineItems}) {
    return (
        <Wrapper>
            {timelineItems.map((item, i) =>
                <li key={item.step}>

                    <TimelineItem>
                        <TimelineIcon icon={item.icon}/>
                        <TimelineDot/>
                        <TimelineText>{item.text}</TimelineText>
                    </TimelineItem>

                    {(i + 1 === timelineItems.length) ? null :
                        <TimelineItem>
                            <TimelineConnector/>
                        </TimelineItem>
                    }
                </li>
            )}
        </Wrapper>
    );
}