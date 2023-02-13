import styled, { keyframes } from 'styled-components';

const overlayAnim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${overlayAnim} 200ms forwards;
`;

const containerAnim = keyframes`
from {
  transform: translate(-50px, -50px) scale(0.8);
}
to {
  transform: translate(0, 0) scale(1);
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  border-radius: 0.8rem;
  padding: 3.2rem;
  background: white;

  animation: ${containerAnim} 200ms forwards;
`;

export const Content = styled.div`
  padding: 2.2rem 0;
  line-height: 1.4;
`;

export const ModalTitle = styled.h2`
  font-weight: 500;
  font-size: 2.4rem;
`;

export const ActionsButtons = styled.div`
  display: flex;
  gap: 1.4rem;
`;

const ActionButton = styled.button`
  background-color: transparent;
  color: var(--white);
  border: none;
  padding: 1.4rem;
  border-radius: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  width: 100%;

  transition: opacity 200ms;

  &:hover {
    opacity: 0.5;
  }
`;

export const CancelButton = styled(ActionButton)`
  background-color: var(--grayish-blue);
`;

export const DeleteButton = styled(ActionButton)`
  background-color: var(--soft-red);
`;
