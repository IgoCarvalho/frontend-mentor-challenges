import { useState } from 'react';

import { ReplyIcon } from '../icons/ReplyIcon';
import { Vote } from '../Vote';

import { MessageData } from '../../types/message';

import {
  Box,
  Content,
  MessageHeader,
  MessageText,
  ActionsButtons,
  ReplyButton,
  Container,
} from './styles';
import { MessageTextInput } from '../MessageTextInput';

interface MessageBoxProps {
  message: MessageData;
}

export function MessageBox({ message }: MessageBoxProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const [replyText, setReplyText] = useState('');

  function handleReplyButton() {
    if (!isReplying) {
      setReplyText(`@${message.user.username}`);
    }

    setIsReplying(!isReplying);
  }

  function handleReplySubmit() {
    console.log(replyText);
  }

  return (
    <Container>
      <Box>
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
          <ReplyButton onClick={handleReplyButton}>
            <ReplyIcon />
            Reply
          </ReplyButton>
        </ActionsButtons>
      </Box>

      {isReplying && (
        <MessageTextInput
          value={replyText}
          onChange={setReplyText}
          onSend={handleReplySubmit}
          autoFocus
          isReplying
        />
      )}
    </Container>
  );
}
