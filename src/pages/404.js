import * as React from "react"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout";
import styled from "styled-components";


const Wrapper = styled.div`
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  text-align: center;
`

const NotFoundPage = () => (
    <Layout>
        <Wrapper>
            <h1>404: Not Found</h1>
            <p>Du bist leider auf einer Seite gelandet, die es nicht gibt...</p>
        </Wrapper>
    </Layout>
)

export const Head = () => <SEO title="404: Not Found" />

export default NotFoundPage
