import { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ onChange, autoFocus, ...props }: TextAreaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    if (inputRef.current) {
      inputRef.current.style.removeProperty('height');
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }

    if (onChange) {
      onChange(event);
    }
  }

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
      const textSize = inputRef.current?.value.length ?? 0;
      inputRef.current?.setSelectionRange(textSize, textSize);
    }
  }, []);

  return (
    <Container>
      <textarea ref={inputRef} onChange={handleChange} {...props} />
    </Container>
  );
}
