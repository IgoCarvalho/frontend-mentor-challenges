import { ReplyIcon } from '../icons/ReplyIcon';
import { Vote } from '../Vote';

import {
  Container,
  Content,
  MessageHeader,
  MessageText,
  ActionsButtons,
  ReplyButton,
} from './styles';

export function MessageBox() {
  return (
    <Container>
      <Vote />

      <Content>
        <MessageHeader>
          <img src="/avatars/image-amyrobson.webp" alt="User avatar" />
          <strong>amyrobson</strong>
          <span>1 month ago</span>
        </MessageHeader>

        <MessageText>
          Impressive! Though it seems the drag feature could be improved. But overall it looks
          incredible. You&apos;ve nailed the design and the responsiveness at various breakpoints
          works really well.
        </MessageText>
      </Content>

      <ActionsButtons>
        <ReplyButton>
          <ReplyIcon />
          Reply
        </ReplyButton>
      </ActionsButtons>
    </Container>
  );
}
