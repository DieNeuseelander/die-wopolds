import React from "react";
import {
    StyledImg,
    Wrapper,
    CardText,
    CardTextWrapper, CardTitle
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
            <CardTextWrapper>
                <CardTitle>{contactContent.name}</CardTitle>
                <CardText>{contactContent.mail}</CardText>
                <CardText>{contactContent.tel}</CardText>
            </CardTextWrapper>
        </Wrapper>
    )
}

export default ContactCard;