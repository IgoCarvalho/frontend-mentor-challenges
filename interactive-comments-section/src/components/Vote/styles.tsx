import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--very-light-gray);
  color: var(--moderate-blue);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;

  @media screen and (max-width: 425px) {
    flex-direction: row;
  }
`;

export const Counter = styled.p`
  font-weight: 500;
`;

export const VoteButton = styled.button`
  width: 4rem;
  height: 4rem;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.3;
  }
`;
