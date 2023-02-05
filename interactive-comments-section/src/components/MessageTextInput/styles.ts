import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem;
  border-radius: 1rem;
  background-color: var(--white);
  position: relative;

  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
