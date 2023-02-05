import { MessageBox } from '../MessageBox';
import { MessageReplies } from '../MessageReplies';

import { MessageData } from '../../types/message';

import { Container } from './styles';

interface MessageProps {
  message: MessageData;
}

export function Message({ message }: MessageProps) {
  return (
    <Container>
      <MessageBox message={message} />

      {!!message.replies.length && <MessageReplies replies={message.replies} />}
    </Container>
  );
}
