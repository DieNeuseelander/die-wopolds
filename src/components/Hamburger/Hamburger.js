import React from "react"
import { HamburgerButton } from "./Hamburger.styles"
import HamburgerIcon from "../../images/icon_menu.svg"

const Hamburger = ({ handleOverlayMenu }) => (
    <HamburgerButton onClick={handleOverlayMenu}>
        <img src={HamburgerIcon} alt="menu-hamburger"/>
    </HamburgerButton>
)

export default Hamburger