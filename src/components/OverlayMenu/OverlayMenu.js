import React from "react";
import {Link} from "gatsby";
import InvertedLogo from "../../images/logo-inverted.svg";
import CloseButton from "../../images/close_btn.svg"
import {Overlay} from "./OverlayMenu.styles";
import {useMenuQuery} from "../../hooks/useMenuQuery";

const OverlayMenu = ({ menuOpen, callback }) => {
    const {allMdx : {nodes : menuItems}} = useMenuQuery();

    return(
        <Overlay menuOpen = {menuOpen}>
            <div className="inner">
                <Link
                    to="/"
                    onClick={callback}
                    onKeyDown={callback}
                >
                    <img className="invertedLogo" src={InvertedLogo} alt="white-logo"/>
                </Link>
                <ul className="overlayMenu">
                    {menuItems.map(item => (
                        <li key={item.frontmatter.title}>
                            <Link
                                to={`${item.frontmatter.slug}`}
                                activeClassName="overlayActive"
                                onKeyDown={callback}
                                onClick={callback}
                            >
                                {item.frontmatter.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    className="closeButton"
                    onClick={callback}
                    role="button"
                    tabIndex="0"
                    onKeyDown={callback}
                >
                    <img src={CloseButton} alt="close-button"/>
                </div>
            </div>
        </Overlay>
    )

}

export default OverlayMenu;