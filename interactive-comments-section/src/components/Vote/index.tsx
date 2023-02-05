import { useState } from 'react';

import { MinusIcon } from '../icons/MinusIcon';
import { PlusIcon } from '../icons/PlusIcon';

import { Container, Counter, VoteButton } from './styles';

export function Vote() {
  const [voteCounter, setVoteCounter] = useState(0);

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
