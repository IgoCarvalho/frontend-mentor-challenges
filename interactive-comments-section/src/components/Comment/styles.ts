import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 425px) {
    gap: 1.6rem;
  }
`;
