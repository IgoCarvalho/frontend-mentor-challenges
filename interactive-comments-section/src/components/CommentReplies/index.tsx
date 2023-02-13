import { CommentBox } from '../CommentBox';

import { CommentData } from '../../types/comment';

import { Container, RepliesList } from './styles';

interface CommentRepliesProps {
  replies: CommentData['replies'];
}

export function CommentReplies({ replies }: CommentRepliesProps) {
  return (
    <Container>
      <RepliesList>
        {replies.map((reply) => (
          <li key={reply.id}>
            <CommentBox comment={reply} />
          </li>
        ))}
      </RepliesList>
    </Container>
  );
}
