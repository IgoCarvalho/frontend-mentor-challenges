import { MessageBox } from '../MessageBox';
import { Container, RepliesList } from './styles';

export function MessageReplies() {
  return (
    <Container>
      <RepliesList>
        <li>
          <MessageBox />
        </li>
        <li>
          <MessageBox />
        </li>
      </RepliesList>
    </Container>
  );
}
