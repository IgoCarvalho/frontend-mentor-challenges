import { MouseEvent, ReactNode } from 'react';

import {
  ActionsButtons,
  CancelButton,
  Container,
  Content,
  DeleteButton,
  ModalTitle,
  Overlay,
} from './styles';

interface ModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onCancel?: () => void;
  onDelete?: () => void;
}

export function Modal({ children, title, isOpen, onClose, onCancel, onDelete }: ModalProps) {
  function handleOverlayClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  function handleCancel() {
    if (onCancel) onCancel();
  }

  function handleDelete() {
    if (onDelete) onDelete();
  }

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onClick={handleOverlayClick}>
      <Container>
        <ModalTitle>{title}</ModalTitle>
        <Content>{children}</Content>
        <ActionsButtons>
          <CancelButton onClick={handleCancel}>No, cancel</CancelButton>
          <DeleteButton onClick={handleDelete}>Yes, delete</DeleteButton>
        </ActionsButtons>
      </Container>
    </Overlay>
  );
}
