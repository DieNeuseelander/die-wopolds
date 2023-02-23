import React from "react";
import {getImage} from "gatsby-plugin-image";
import {useHeroQuery} from "../../hooks/useHeroQuery";
import {Wrapper, HeaderWrapper, StyledImg} from "./Hero.styles";

const Hero = () => {
    const { mdx: {frontmatter : heroData}} = useHeroQuery();
    console.log(heroData);

    const imageData = getImage(heroData.image.childImageSharp.gatsbyImageData);

    return(
        <Wrapper>
            <StyledImg image={imageData} alt="Hero Image"/>
            <HeaderWrapper>
                <h1>
                    {heroData.title}
                </h1>
            </HeaderWrapper>
        </Wrapper>
    )
}

export default Hero;