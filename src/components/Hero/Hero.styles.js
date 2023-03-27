import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 40px;
  width: 100%;
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  // align-items: center;
  align-items: end;
  justify-content: center;
  height: calc(100% - 60px);
  width: 100%;

  h1 {
    font-family: var(--FONT_1);
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
`
