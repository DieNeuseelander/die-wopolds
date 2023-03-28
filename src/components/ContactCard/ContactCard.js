import React, {useState} from "react";
import {
    StyledImg,
    ImageWrapper,
    Wrapper,
    CardText,
    CardTextWrapper, CardTitle
} from "./ContactCard.styles"

const ContactCard = ({contactContent}) => {

    const [hoverIsActive, setHoverIsActive] = useState(false);

    return(
        <Wrapper>
            <a
                href={"mailto:" + contactContent.mail}
            >
                <ImageWrapper
                    onMouseEnter={() => setHoverIsActive(true)}
                    onMouseLeave={() => setHoverIsActive(false)}
                >
                    {hoverIsActive === false
                        ?
                        <StyledImg
                            image={contactContent.pic.childImageSharp.gatsbyImageData}
                            alt={contactContent.name}
                            width={720}
                            style={{position: 'initial'}}
                        />
                        :
                        <StyledImg
                            image={contactContent.picHover.childImageSharp.gatsbyImageData}
                            alt={contactContent.name}
                            width={720}
                            style={{position: 'initial'}}
                        />
                    }
                </ImageWrapper>
            </a>
            <CardTextWrapper>
                <CardTitle>{contactContent.name}</CardTitle>
                {contactContent.mail !== "" && <CardText>{contactContent.mail}</CardText>}
                {contactContent.tel !== "" && <CardText>{contactContent.tel}</CardText>}
            </CardTextWrapper>
        </Wrapper>
    )
}

export default ContactCard;