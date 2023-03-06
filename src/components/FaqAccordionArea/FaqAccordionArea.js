import React from "react";
import {Wrapper} from "./FaqAccordionArea.styles";
import FaqAccordion from "../FaqAccordion/FaqAccordion";

const FaqAccordionArea = ({faqItems}) => {

    return(
        <Wrapper>
            {faqItems.map((item, i) => (
                <li key={i}>
                    <FaqAccordion faqContent={faqItems[i]}/>
                </li>
                ))}
        </Wrapper>
    )
}

export default FaqAccordionArea;