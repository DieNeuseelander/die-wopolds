import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-top: 1px solid #ddd;
  text-align: center;
  h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem;
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    h1{
        font-size: 1.3rem;
    }
  }
`;

export const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    padding: 0 !important;
  }
  @media screen and (max-width: 480px) {
    margin: 0
    width: 100%
  }
`;
