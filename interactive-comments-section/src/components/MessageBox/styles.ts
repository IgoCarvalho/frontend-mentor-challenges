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
  gap: 2.4rem;
`;

export const Content = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }

  span {
    color: var(--grayish-blue);
  }
`;

export const MessageText = styled.p`
  color: var(--grayish-blue);
  line-height: 1.4;
`;

export const ActionsButtons = styled.div`
  display: flex;

  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.6rem 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.5;
  }
`;

export const ReplyButton = styled(ActionButton)`
  color: var(--moderate-blue);
`;
