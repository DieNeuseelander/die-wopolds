import React from "react";
import {Link} from 'gatsby';
import {Wrapper} from './Navigation.styles';

const Navigation = ({ menu }) => (
    <Wrapper>
        <ul>
            {menu.items.map(item =>
                <li key={item.name}>
                    <Link to={`/${item.slug}`} activeClassName="nav-activate">
                        {item.name}
                    </Link>
                </li>
            )}
        </ul>
    </Wrapper>
)

export default Navigation;