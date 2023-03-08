import React from "react";
import Layout from "../Layout/Layout";
import PageHero from "../PageHero/PageHero";
import {Wrapper} from "../ContactCard/ContactCard.styles";
import {ContentWrapper, PageContent} from "./PageBody.styles";


const PageBody = ({pageData, children}) => {

    return (
        <Layout>
            {pageData.image ? (
                <PageHero
                    img={
                        pageData.image.childImageSharp
                            .gatsbyImageData
                    }
                />
            ) : null}

            <Wrapper>
                <h1>{pageData.title}</h1>
                <ContentWrapper>
                    <PageContent>
                        {children}
                    </PageContent>
                </ContentWrapper>
            </Wrapper>

        </Layout>
    )
}

export default PageBody;