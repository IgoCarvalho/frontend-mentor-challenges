import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem;
  border-radius: 1rem;
  background-color: var(--white);
  position: relative;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.02);

  display: flex;
  align-items: flex-start;
  gap: 1.6rem;

  @media screen and (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1.6rem;

    img {
      order: 1;
      width: 3.2rem;
      height: 3.2rem;
    }

    button {
      order: 2;
    }
  }
`;

export const UserImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
