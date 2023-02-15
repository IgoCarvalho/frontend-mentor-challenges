import { CommentBox } from '../CommentBox';

import { CommentData } from '../../types/comment';

import { Container, RepliesList } from './styles';

interface CommentRepliesProps {
  replies: CommentData['replies'];
  commentId: number;
}

export function CommentReplies({ replies, commentId }: CommentRepliesProps) {
  return (
    <Container>
      <RepliesList>
        {replies.map((reply) => (
          <li key={reply.id}>
            <CommentBox belongsTo={commentId} comment={reply} />
          </li>
        ))}
      </RepliesList>
    </Container>
  );
}
