import { useState } from 'react';

import { Comment } from '../../components/Comment';
import { CommentTextInput } from '../../components/CommentTextInput';

import { useComments } from '../../hooks/useComments';
import { useUser } from '../../hooks/useUser';

import { CommentsContainer, Container } from './styles';

export function Home() {
  const [newComment, setNewComment] = useState('');

  const { user } = useUser();
  const { comments, createComment } = useComments();

  function handleNewCommentSubmit() {
    createComment(user, newComment);

    setNewComment('');
  }

  return (
    <Container>
      <CommentsContainer>
        {comments
          .sort((a, b) => b.score - a.score)
          .map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </CommentsContainer>

      <CommentTextInput
        value={newComment}
        onChange={setNewComment}
        onSend={handleNewCommentSubmit}
      />
    </Container>
  );
}
