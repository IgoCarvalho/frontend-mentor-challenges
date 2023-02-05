import { MessageBox } from '../../components/MessageBox';
import { MessageTextInput } from '../../components/MessageTextInput';
import { Container } from './styles';

export function Home() {
  return (
    <Container>
      <MessageBox />
      <MessageTextInput />
    </Container>
  );
}
