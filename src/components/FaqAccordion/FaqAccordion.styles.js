import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`

export const QuestionDiv = styled.div`
    border-bottom: 1px solid #BABABA;
    background-color: #FBFBFB;
    padding: 10px 30px;
    position: relative;
    
    >div:first-of-type{
        display: inline-block;
        width: 100%;
        text-align: left;
        margin: auto;
    }
    
    @media screen and (max-width: 1180px){
        padding: 10px !important;
    }
`

export const AnswerDiv = styled.div`
    padding: 10px 30px;
    position: relative;
    
    @media screen and (max-width: 1180px){
        padding: 10px !important;
    }
    
    >div{
        display: inline-block;
        min-width: 100%;
        text-align: left;
        margin: auto;
    }
`

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: calc(20px + (20px - 16px));
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
    @media screen and (max-width: 1180px){
        right: calc( 0px + (20px - 16px));
    }
`

export const IconButton = styled.div`
    
    img{
        height: 16px;
        display: block;
        transform: none;
        transition: all 0.5s ease;
    }
    
    .questionVisible{
        transform: rotate(180deg);
    }
`