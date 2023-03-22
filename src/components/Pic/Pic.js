import React from 'react';
import {ImgWrapper, StyledImg, Wrapper} from './Pic.styles'

const Pic = ({image}) => {

    return(
        <Wrapper>
            <ImgWrapper>
                <StyledImg image={image.childImageSharp.gatsbyImageData} alt="News" />
            </ImgWrapper>
        </Wrapper>
    )
}

export default Pic