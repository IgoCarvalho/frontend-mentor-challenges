import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  &::before {
    content: '';
    width: 2px;
    margin: 0 4.3rem;
    background-color: var(--light-gray);

    @media screen and (max-width: 425px) {
      margin-left: 0;
      margin-right: 1.6rem;
    }
  }
`;

export const RepliesList = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (max-width: 425px) {
    gap: 1.6rem;
  }
`;
