import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { ChangeEvent, useState } from 'react';

import { Button } from '../Button';
import { CommentTextInput } from '../CommentTextInput';
import { DeleteIcon } from '../icons/DeleteIcon';
import { EditIcon } from '../icons/EditIcon';
import { ReplyIcon } from '../icons/ReplyIcon';
import { Modal } from '../Modal';
import { TextArea } from '../TextArea';
import { Vote } from '../Vote';

import { useComments } from '../../hooks/useComments';
import { useUser } from '../../hooks/useUser';

import type { CommentData } from '../../types/comment';

import {
  ActionsButtons,
  Box,
  CommentHeader,
  CommentText,
  Container,
  Content,
  CurrentUserTag,
  DeleteButton,
  EditButton,
  EditCommentBox,
  ReplyButton,
} from './styles';

interface CommentBoxProps {
  comment: CommentData;
  belongsTo?: number;
}

export function CommentBox({ comment, belongsTo }: CommentBoxProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);

  const [replyText, setReplyText] = useState('');
  const [commentText, setCommentText] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isCurrentUser, user } = useUser();
  const { removeComment, createReply, removeReply, editComment, vote } = useComments();

  function handleReplyButton() {
    if (!isReplying) {
      setReplyText(`@${comment.user.username}`);
    }

    setIsReplying(!isReplying);
  }

  function handleReplySubmit() {
    createReply(user, replyText, comment, belongsTo);

    setIsReplying(false);
  }

  function handleEditButton() {
    if (!isEditing) {
      setCommentText(comment.content);
    }

    setIsEditing(!isEditing);
  }

  function handleEditComment(event: ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(event.target.value);
  }

  function handleEditSubmit() {
    if (belongsTo) {
      editComment(belongsTo, commentText, comment.id);
    } else {
      editComment(comment.id, commentText);
    }

    setIsEditing(false);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  function openModal() {
    setIsModalOpen(true);
  }

  function handleDeleteButton() {
    openModal();
  }

  function handleDeleteCancel() {
    closeModal();
  }

  function handleDeleteConfirm() {
    if (belongsTo) {
      removeReply(comment.id, belongsTo);
    } else {
      removeComment(comment.id);
    }

    closeModal();
  }

  function getFormattedDate() {
    if (comment.id < 10) {
      return comment.createdAt;
    }

    const date = new Date(Number(comment.createdAt));

    const formattedDateText = `${formatDistanceToNowStrict(date)} ago`;

    return formattedDateText;
  }

  function handleVote(voteValue: number) {
    if (belongsTo) {
      vote(belongsTo, voteValue, comment.id);
    } else {
      vote(comment.id, voteValue);
    }
  }

  function highlightUserNames(message: string) {
    const regExTest = /(@\w+)/g;

    const parsedMessage = message.split(regExTest).map((part) => {
      if (part.match(regExTest)) return <span key={part}>{part}</span>;
      return part;
    });

    return parsedMessage;
  }

  return (
    <>
      <Container>
        <Box>
          <Vote onVote={handleVote} value={comment.score} />

          <Content>
            <CommentHeader>
              <img src={comment.user.image.webp} alt={`${comment.user.username} avatar`} />
              <strong>{comment.user.username}</strong>

              {isCurrentUser(comment.user) && <CurrentUserTag>you</CurrentUserTag>}

              <span>{getFormattedDate()}</span>
            </CommentHeader>

            {isEditing ? (
              <EditCommentBox>
                <TextArea
                  name="comment-edit"
                  value={commentText}
                  onChange={handleEditComment}
                  placeholder="Add a comment..."
                  autoFocus
                />

                <Button onClick={handleEditSubmit}>Update</Button>
              </EditCommentBox>
            ) : (
              <CommentText>{highlightUserNames(comment.content)}</CommentText>
            )}
          </Content>

          <ActionsButtons>
            {isCurrentUser(comment.user) ? (
              <>
                <DeleteButton onClick={handleDeleteButton}>
                  <DeleteIcon />
                  Delete
                </DeleteButton>

                <EditButton onClick={handleEditButton}>
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

      {isCurrentUser(comment.user) && (
        <Modal
          title="Delete comment"
          isOpen={isModalOpen}
          onClose={closeModal}
          onCancel={handleDeleteCancel}
          onDelete={handleDeleteConfirm}
        >
          <p>
            Are you sure you want to delete this comment? This will remoce the comment and
            can&lsquo;t be undone.
          </p>
        </Modal>
      )}
    </>
  );
}
