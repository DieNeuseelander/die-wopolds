import React from "react";
import {
    StyledImg,
    Wrapper,
    ExtLinkImageText,
    ContactCardTextWrapper, ExtLinkImageTitle
} from "./ContactCard.styles"

const ContactCard = ({contactContent}) => {

    return(
        <Wrapper>
            <a href={"mailto:" + contactContent.mail}>
                <StyledImg
                    image={contactContent.pic.childImageSharp.gatsbyImageData}
                    alt="External Link Image"
                    width={720}
                    style={{position: 'initial'}}
                />
            </a>
            <ContactCardTextWrapper>
                <ExtLinkImageTitle> {contactContent.name} </ExtLinkImageTitle>
                <ExtLinkImageText> {contactContent.mail}</ExtLinkImageText>
                <ExtLinkImageText>{contactContent.tel}</ExtLinkImageText>
            </ContactCardTextWrapper>
        </Wrapper>
    )
}

export default ContactCard;