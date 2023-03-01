import styled from "styled-components";

export const TextWrapper = styled.div`
    flex: 2;
    text-align: start;
    margin: auto !important;
    color: #212121;
    
    @media (max-width: 767px){
        flex: 5;
    }
`

export const IconWrapper = styled.div`
    flex: 2;
    text-align: end;
    margin: auto;
    background-color: #e8e8e8;
    color: #212121;
`