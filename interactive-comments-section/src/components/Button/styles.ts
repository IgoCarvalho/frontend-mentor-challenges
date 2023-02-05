import styled from 'styled-components';

export const Container = styled.button`
  background-color: var(--moderate-blue);
  min-width: 10.4rem;
  height: 4.8rem;
  border: 0;
  border-radius: 0.8rem;
  color: var(--very-light-gray);
  font-weight: 500;
  text-transform: uppercase;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.5;
  }
`;
