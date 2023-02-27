import React from "react";
import {Link} from "gatsby";
import InvertedLogo from "../../images/logo-inverted.svg";
import CloseButton from "../../images/close_btn.svg"
import {Overlay} from "./OverlayMenu.styles";
import {useMenuQuery} from "../../hooks/useMenuQuery.js";

const OverlayMenu = ({ menuOpen, callback }) => {

    const { mdx: {frontmatter : {menu : { items : data}}}} = useMenuQuery();

    return(
        <Overlay menuOpen = {menuOpen}>
            <div className="inner">
                <img className="invertedLogo" src={InvertedLogo} alt="white-logo"/>
                <ul className="overlayMenu">
                    {data.map(item => (
                        <li key={item.name}>
                            <Link to={`/${item.slug}`} activeClassName="overlayActive">
                                {item.name}
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