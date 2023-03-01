import styled from "styled-components";

export const SeparatorWrapper = styled.div`
    flex: 1;
    position: relative;
`

export const Dot = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: #767676;
`

export const Connector = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
    height: 60px;
    width: 2px;
    background-color: #767676;
    border-radius: 50%;
`

export const SpaceLeft = styled.div`
    flex: 2;
`

export const SpaceRight = styled.div`
    flex: 2;
    
    @media (max-width: 764px){
        flex: 5;
    }
`