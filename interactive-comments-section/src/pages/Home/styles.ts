import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  max-width: 730px;
  margin: 0 auto;
  padding: 6.4rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 425px) {
    padding: 3.2rem 1.6rem;
    gap: 1.6rem;
  }
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  @media screen and (max-width: 425px) {
    gap: 1.6rem;
  }
`;
