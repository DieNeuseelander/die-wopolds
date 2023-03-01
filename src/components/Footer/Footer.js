import React from "react";
import { Wrapper } from "./Footer.styles";
import {useFooterQuery} from "../../hooks/useFooterQuery";
import {Link} from "gatsby";

const Footer = () => {
    const { mdx: {frontmatter : data}} = useFooterQuery();

    return (
        <Wrapper>
            <Link to={`${data.slug}`}>
                <p>{data.title}</p>
            </Link>
        </Wrapper>
    )
}


export default Footer;