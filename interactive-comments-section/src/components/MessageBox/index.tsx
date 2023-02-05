import { ReplyIcon } from '../icons/ReplyIcon';
import { Vote } from '../Vote';

import { MessageData } from '../../types/message';

import {
  Container,
  Content,
  MessageHeader,
  MessageText,
  ActionsButtons,
  ReplyButton,
} from './styles';

interface MessageBoxProps {
  message: MessageData;
}

export function MessageBox({ message }: MessageBoxProps) {
  return (
    <Container>
      <Vote value={message.score} />

      <Content>
        <MessageHeader>
          <img src={message.user.image.webp} alt={`${message.user.username} avatar`} />
          <strong>{message.user.username}</strong>
          <span>{message.createdAt}</span>
        </MessageHeader>

        <MessageText>{message.content}</MessageText>
      </Content>

      <ActionsButtons>
        <ReplyButton>
          <ReplyIcon />
          Reply
        </ReplyButton>
      </ActionsButtons>
    </Container>
  );
}
