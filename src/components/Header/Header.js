import React from 'react'
import {Link} from 'gatsby';
import Navigation from "../Navigation/Navigation";
import Logo from '../../images/logo.svg'
import {Wrapper, Content} from "./Header.styles"
import {useMenuQuery} from "../../hooks/useMenuQuery";

const Header = () => {
    const {site, allMdx: {nodes : menuItems}} = useMenuQuery();

    return(
        <Wrapper>
            <Content>
                <Link to="/">
                    <img src={Logo} alt={site.siteMetadata.title}/>
                </Link>
                <Navigation menuItems={menuItems}/>
            </Content>
        </Wrapper>
    )
}

export default Header;