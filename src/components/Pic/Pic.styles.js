import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Wrapper = styled.div`
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: -20px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding: 0 !important;
  }
`


export const StyledImg = styled(GatsbyImage)`
    max-width: 730px;
    margin: auto;
    border: 5px solid black;
 
    img{
        object-fit: contain !important;
    }
`;

export const ImgWrapper = styled.div`
  width: calc(100% - 40px);
  max-width: 1100px;
  // background-color: #f7f7f7;
  padding: 40px;
  margin: 20px;
  border: 1px #e2dac8 solid;
  
  position: relative !important;
  display: inline-block;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    padding: 0 !important;
  }
`
