import { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from 'react';

import { Container } from './styles';

type TextAreaProps = InputHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ onChange, autoFocus, ...props }: TextAreaProps) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  function handleTextAreaSize() {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    handleTextAreaSize();

    if (onChange) {
      onChange(event);
    }
  }

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
      const textSize = inputRef.current?.value.length ?? 0;
      inputRef.current?.setSelectionRange(textSize, textSize);

      handleTextAreaSize();
    }
  }, []);

  return (
    <Container>
      <textarea ref={inputRef} onChange={handleChange} {...props} />
    </Container>
  );
}
