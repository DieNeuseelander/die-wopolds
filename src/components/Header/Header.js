import React from 'react'
import {Link} from 'gatsby';
import Navigation from "../Navigation/Navigation";
import Logo from '../../images/logo.svg'
import {useMenuQuery} from "../../hooks/useMenuQuery"
import {Wrapper, Content} from "./Header.styles"

const Header = () => {
    const {site, mdx : {frontmatter: {menu}}} = useMenuQuery();

    return(
        <Wrapper>
            <Content>
                <Link to="/">
                    <img src={Logo} alt={site.siteMetadata.title}/>
                </Link>
                <Navigation menu={menu}></Navigation>
            </Content>
        </Wrapper>
    )
}

export default Header;