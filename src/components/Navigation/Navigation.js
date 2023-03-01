import React from "react";
import {Link} from 'gatsby';
import {Wrapper} from './Navigation.styles';

const Navigation = ({menuItems}) => {
    console.log(menuItems);
    return (
        <Wrapper>
            <ul>
                {menuItems.map(item =>
                    <li key={item.frontmatter.title}>
                        <Link to={`${item.frontmatter.slug}`} activeClassName="nav-activate">
                            {item.frontmatter.title}
                        </Link>
                    </li>
                )}
            </ul>
        </Wrapper>)
}

export default Navigation;