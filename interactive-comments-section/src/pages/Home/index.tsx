import { useState } from 'react';

import { Comment } from '../../components/Comment';
import { CommentTextInput } from '../../components/CommentTextInput';

import { useComments } from '../../hooks/useComments';
import { useUser } from '../../hooks/useUser';

import { Container } from './styles';

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
      {comments.map((m) => (
        <Comment key={m.id} comment={m} />
      ))}

      <CommentTextInput
        value={newComment}
        onChange={setNewComment}
        onSend={handleNewCommentSubmit}
      />
    </Container>
  );
}
