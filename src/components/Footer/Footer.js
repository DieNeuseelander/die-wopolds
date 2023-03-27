import React from "react";
import { Wrapper } from "./Footer.styles";
import Heart from '../../images/heart_gray.svg'

const Footer = () => {

    return (
        <Wrapper>
            <span>2023, made with <img src={Heart} alt='Heart'/> by Louisa Reinger</span>
        </Wrapper>
    )
}


export default Footer;