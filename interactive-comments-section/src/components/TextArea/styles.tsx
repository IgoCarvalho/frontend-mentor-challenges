import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  min-height: 10rem;
  padding: 1.4rem 2.4rem;
  border-radius: 0.8rem;
  outline: 1px solid var(--light-gray);
  outline-offset: -1px;
  display: flex;

  &:hover,
  &:focus-within {
    outline-color: var(--moderate-blue);
  }

  textarea {
    flex: 1;
    color: var(--grayish-blue);
    line-height: 1.4;
    border: 0;
    overflow: hidden;
    resize: none;
    outline: none;
  }
`;
