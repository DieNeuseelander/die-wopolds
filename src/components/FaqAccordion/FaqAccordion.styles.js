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
    padding: 10px;
    position: relative;
`

export const AnswerDiv = styled.div`
    padding: 10px;
    position: relative;
`

export const ButtonWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const IconButton = styled.div`
    
    img{
        height: 20px;
        display: block;
        transform: none;
        transition: all 0.5s ease;
    }
    
    .questionVisible{
        transform: rotate(180deg);
    }
`