import { useState } from 'react';

import { MinusIcon } from '../icons/MinusIcon';
import { PlusIcon } from '../icons/PlusIcon';

import { Container, Counter, VoteButton } from './styles';

interface VoteProps {
  value: number;
}

export function Vote({ value }: VoteProps) {
  const [voteCounter, setVoteCounter] = useState(value ?? 0);

  function upVote() {
    setVoteCounter(voteCounter + 1);
  }

  function downVote() {
    setVoteCounter(voteCounter - 1);
  }

  return (
    <Container>
      <VoteButton onClick={upVote}>
        <PlusIcon />
      </VoteButton>
      <Counter>{voteCounter}</Counter>
      <VoteButton onClick={downVote}>
        <MinusIcon />
      </VoteButton>
    </Container>
  );
}
