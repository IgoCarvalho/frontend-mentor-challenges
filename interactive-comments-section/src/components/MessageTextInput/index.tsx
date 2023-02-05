import { useState } from 'react';

import { Button } from '../Button';
import { TextArea } from '../TextArea';

import { Container, UserImage } from './styles';

export function MessageTextInput() {
  const [messageText, setMessageText] = useState('');

  return (
    <Container>
      <UserImage src="/images/avatars/image-juliusomo.webp" alt="juliusomo avatar" />

      <TextArea
        name="message-text"
        value={messageText}
        onChange={setMessageText}
        placeholder="Add a comment..."
      />

      <Button>Send</Button>
    </Container>
  );
}
