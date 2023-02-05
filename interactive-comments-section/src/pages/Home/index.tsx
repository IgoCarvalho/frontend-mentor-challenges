import { useEffect, useState } from 'react';

import { Message } from '../../components/Message';
import { MessageTextInput } from '../../components/MessageTextInput';

import { MessageData } from '../../types/message';

import { Container } from './styles';

export function Home() {
  const [data, setData] = useState<MessageData[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((mess) => setData(mess.comments));
  }, []);

  return (
    <Container>
      {data.map((m) => (
        <Message key={m.id} message={m} />
      ))}

      <MessageTextInput />
    </Container>
  );
}
