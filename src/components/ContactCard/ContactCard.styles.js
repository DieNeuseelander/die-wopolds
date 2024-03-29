import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  position: relative !important;
  display: inline-block;
  text-align: center;
  overflow: initial;
  height: 100%;
  width: 100%;
  border-radius: 50%;

    
  img {
    margin: auto;
    transition: all 0.3s !important;
    border-radius: 50%;
  }
  
  :hover img {
    transform: scale(1.1);
  }
`

export const ImageWrapper = styled.div`
    transition: all 1s ease!important;
    display: inline-block;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    
    :hover {
        transform: scale(1.1);
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`

export const CardTextWrapper = styled.div`
  color: #212121;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  display: inline;
`

export const CardTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 4px;
  padding: 0px;
  font-family: var(--FONT_1);
  font-weight: bold;
`

export const CardText = styled.p`
  font-family: var(--FONT_1);
  font-size: 1rem;
  margin: -2px;
  padding: 0px;
`
