import { useEffect, useState } from 'react';

import { Comment } from '../../components/Comment';
import { CommentTextInput } from '../../components/CommentTextInput';

import { CommentData } from '../../types/comment';

import { Container } from './styles';

export function Home() {
  const [data, setData] = useState<CommentData[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((mess) => setData(mess.comments));
  }, []);

  return (
    <Container>
      {data.map((m) => (
        <Comment key={m.id} comment={m} />
      ))}

      <CommentTextInput />
    </Container>
  );
}
