import { MessageBox } from '../MessageBox';

import { MessageData } from '../../types/message';

import { Container, RepliesList } from './styles';

interface MessageRepliesProps {
  replies: MessageData['replies'];
}

export function MessageReplies({ replies }: MessageRepliesProps) {
  return (
    <Container>
      <RepliesList>
        {replies.map((reply) => (
          <li key={reply.id}>
            <MessageBox message={reply} />
          </li>
        ))}
      </RepliesList>
    </Container>
  );
}
