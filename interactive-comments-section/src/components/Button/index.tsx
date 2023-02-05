import { HtmlHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return <Container {...props}>{children}</Container>;
}
