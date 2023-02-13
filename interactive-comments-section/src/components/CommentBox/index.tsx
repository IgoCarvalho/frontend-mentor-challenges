import { useState } from 'react';

import { ReplyIcon } from '../icons/ReplyIcon';
import { Vote } from '../Vote';

import type { CommentData } from '../../types/comment';

import {
  ActionsButtons,
  Box,
  Container,
  Content,
  CurrentUserTag,
  DeleteButton,
  EditButton,
  CommentHeader,
  CommentText,
  ReplyButton,
} from './styles';

import { useUser } from '../../hooks/useUser';
import { DeleteIcon } from '../icons/DeleteIcon';
import { EditIcon } from '../icons/EditIcon';
import { CommentTextInput } from '../CommentTextInput';

interface CommentBoxProps {
  comment: CommentData;
}

export function CommentBox({ comment }: CommentBoxProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const [replyText, setReplyText] = useState('');

  const { isCurrentUser } = useUser();

  function handleReplyButton() {
    if (!isReplying) {
      setReplyText(`@${comment.user.username}`);
    }

    setIsReplying(!isReplying);
  }

  function handleReplySubmit() {
    console.log(replyText);
  }

  return (
    <Container>
      <Box>
        <Vote value={comment.score} />

        <Content>
          <CommentHeader>
            <img src={comment.user.image.webp} alt={`${comment.user.username} avatar`} />
            <strong>{comment.user.username}</strong>

            {isCurrentUser(comment.user) && <CurrentUserTag>you</CurrentUserTag>}

            <span>{comment.createdAt}</span>
          </CommentHeader>

          <CommentText>{comment.content}</CommentText>
        </Content>

        <ActionsButtons>
          {isCurrentUser(comment.user) ? (
            <>
              <DeleteButton>
                <DeleteIcon />
                Delete
              </DeleteButton>

              <EditButton>
                <EditIcon />
                Edit
              </EditButton>
            </>
          ) : (
            <ReplyButton onClick={handleReplyButton}>
              <ReplyIcon />
              Reply
            </ReplyButton>
          )}
        </ActionsButtons>
      </Box>

      {isReplying && (
        <CommentTextInput
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
