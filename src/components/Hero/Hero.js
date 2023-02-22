import React from "react";
import {getImage} from "gatsby-plugin-image";
import {useHeroQuery} from "../../hooks/useHeroQuery";
import {Wrapper, HeaderWrapper, StyledImg} from "./Hero.styles";

const Hero = () => {
    const { mdx: {frontmatter : data}} = useHeroQuery();
    console.log(data);

    const imageData = getImage(data.image.childImageSharp.gatsbyImageData);

    return(
        <Wrapper>
            <StyledImg image={imageData} alt="Hero Image"/>
            <HeaderWrapper>
                <h1>
                    {data.title}
                </h1>
            </HeaderWrapper>
        </Wrapper>
    )
}

export default Hero;