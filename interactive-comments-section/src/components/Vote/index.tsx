import { MinusIcon } from '../icons/MinusIcon';
import { PlusIcon } from '../icons/PlusIcon';

import { Container, Counter, VoteButton } from './styles';

interface VoteProps {
  value: number;
  onVote: (voteCounter: number) => void;
}

export function Vote({ value, onVote }: VoteProps) {
  function upVote() {
    onVote(value + 1);
  }

  function downVote() {
    onVote(value - 1);
  }

  return (
    <Container>
      <VoteButton onClick={upVote}>
        <PlusIcon />
      </VoteButton>
      <Counter>{value}</Counter>
      <VoteButton onClick={downVote}>
        <MinusIcon />
      </VoteButton>
    </Container>
  );
}
