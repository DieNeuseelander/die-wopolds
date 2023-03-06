import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  position: relative !important;
  display: inline-block;
  text-align: center;
  overflow: initial;

    
  img {
    margin: auto;
    transition: all 0.3s !important;
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;

  :hover img {
    transform: scale(1.1);
  }
`

export const ContactCardTextWrapper = styled.div`
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
`

export const ExtLinkImageTitle = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-size: 1.2rem;
  margin-bottom: 4px;
  padding: 0px;
  font-family: 'Cormorant Garamond',serif;
  font-weight: bold;
`

export const ExtLinkImageText = styled.p`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: 'Cormorant Garamond',serif;
  font-size: 1rem;
  margin: -2px;
  padding: 0px;
`
