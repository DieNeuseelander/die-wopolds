import styled from "styled-components";


export const Wrapper = styled.div`
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
  margin-bottom: var(--vertical-space);
  text-align: center;
  
  a{
    color: #b77853;
    text-decoration: underline;
  }
  
  li {
    list-style: none;
  }
  
  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    margin-top: 30px;
  }
  
  @media screen and (max-width: 480px) {
    padding: 0;
  
    h1 {
       font-size: 1.1rem;
    }
  }
 
`;