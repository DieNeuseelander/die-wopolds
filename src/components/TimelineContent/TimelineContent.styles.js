import styled from "styled-components";
import {GatsbyImage} from "gatsby-plugin-image";

export const TextWrapper = styled.div`
    flex: 2;
    // flex: 3;
    text-align: start;
    margin: auto !important;
    color: #212121;
    
    @media (max-width: 767px){
        flex: 5;
    }
`

export const StyledImg = styled(GatsbyImage)`
    max-width: 150px;
    img{
        object-fit: contain !important;s
    }
`

export const IconWrapper = styled.div`
    flex: 2;
    text-align: end;
    margin: auto;
    
    position: relative !important;
    display: inline-block;
`