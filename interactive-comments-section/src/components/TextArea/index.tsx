import { ChangeEvent, useRef } from 'react';

import { Container } from './styles';

interface TextAreaProps {
  name: string;
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
}

export function TextArea({ onChange, ...props }: TextAreaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (inputRef.current) {
      inputRef.current.style.removeProperty('height');
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }

    onChange(event.target.value);
  }

  return (
    <Container>
      <textarea ref={inputRef} onChange={handleChange} {...props} />
    </Container>
  );
}
