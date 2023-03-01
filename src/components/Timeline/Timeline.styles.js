import styled from "styled-components";

export const Wrapper = styled.ul`
    width: 100%;
    margin: 30px 0;
    list-style: none;
    font-family: 'Playfair Display', serif;
`

export const TimelineItem = styled.div`
    width: 80%;
    margin: auto;
    list-style: none;
    display: flex;
    position: relative;
    min-height: 70px;
    
    @media (max-width: 420px){
        width: 98%;
    }
`