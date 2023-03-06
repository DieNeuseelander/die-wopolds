import React from "react";
import {Wrapper, SectionWrapper, Separator} from "./ContactCardsArea.styles";
import ContactCard from "../ContactCard/ContactCard";

const ContactCardsArea = ({contactItems}) => {

    return(
        <Wrapper>
            <Separator/>
            <h1>{contactItems[0].role}</h1>
            <SectionWrapper>
                <ContactCard contactContent={contactItems[0]}/>
                <ContactCard contactContent={contactItems[1]}/>
            </SectionWrapper>

            <Separator/>
            <h1>{contactItems[2].role}</h1>
            <SectionWrapper>
                <ContactCard contactContent={contactItems[2]}/>
                <ContactCard contactContent={contactItems[3]}/>
            </SectionWrapper>

            <Separator/>
            <h1>{contactItems[4].role}</h1>
            <SectionWrapper>
                <ContactCard contactContent={contactItems[4]}/>
                <ContactCard contactContent={contactItems[5]}/>
            </SectionWrapper>
        </Wrapper>
    )
}

export default ContactCardsArea;