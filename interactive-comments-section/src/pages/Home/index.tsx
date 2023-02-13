import { Comment } from '../../components/Comment';
import { CommentTextInput } from '../../components/CommentTextInput';

import { useComments } from '../../hooks/useComments';

import { Container } from './styles';

export function Home() {
  const { comments } = useComments();

  return (
    <Container>
      {comments.map((m) => (
        <Comment key={m.id} comment={m} />
      ))}

      <CommentTextInput />
    </Container>
  );
}
