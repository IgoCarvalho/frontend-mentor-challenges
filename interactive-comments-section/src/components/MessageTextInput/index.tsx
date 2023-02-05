import { ChangeEvent } from 'react';

import { Button } from '../Button';
import { TextArea } from '../TextArea';

import { Container, UserImage } from './styles';

interface MessageTextInputProps {
  value?: string;
  onChange?: (text: string) => void;
  onSend?: () => void;
  isReplying?: boolean;
  isEditing?: boolean;
  autoFocus?: boolean;
}

export function MessageTextInput({
  value,
  onChange,
  onSend,
  isEditing = false,
  isReplying = false,
  autoFocus = false,
}: MessageTextInputProps) {
  function handleClick() {
    if (onSend) {
      onSend();
    }
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (onChange) {
      onChange(event.target.value);
    }
  }

  function getButtonText() {
    if (isEditing) return 'Update';
    if (isReplying) return 'Reply';
    return 'Send';
  }

  const buttonText = getButtonText();

  return (
    <Container>
      <UserImage src="/images/avatars/image-juliusomo.webp" alt="juliusomo avatar" />

      <TextArea
        name="message-text"
        value={value}
        onChange={handleChange}
        placeholder="Add a comment..."
        autoFocus={autoFocus}
      />

      <Button onClick={handleClick}>{buttonText}</Button>
    </Container>
  );
}
