import { CommentBox } from '../CommentBox';
import { CommentReplies } from '../CommentReplies';

import { CommentData } from '../../types/comment';

import { Container } from './styles';

interface CommentProps {
  comment: CommentData;
}

export function Comment({ comment }: CommentProps) {
  return (
    <Container>
      <CommentBox comment={comment} />

      {!!comment.replies.length && (
        <CommentReplies commentId={comment.id} replies={comment.replies} />
      )}
    </Container>
  );
}
