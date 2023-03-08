import React from 'react';
import {ImgWrapper, StyledImg, Wrapper} from './Pic.styles'
import {useIndexBodyQuery} from "../../hooks/useIndexBodyQuery";

const Pic = () => {
    const { mdx: {frontmatter : indexData}} = useIndexBodyQuery();

    return(
        <Wrapper>
            <ImgWrapper>
                <StyledImg image={indexData[`newspaper_image`].childImageSharp.gatsbyImageData} alt="News" />
            </ImgWrapper>
        </Wrapper>
    )
}

export default Pic