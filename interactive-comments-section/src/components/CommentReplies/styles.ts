import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  &::before {
    content: '';
    width: 2px;
    margin: 0 4.3rem;
    background-color: var(--light-gray);
  }
`;

export const RepliesList = styled.ul`
  width: 100%;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
