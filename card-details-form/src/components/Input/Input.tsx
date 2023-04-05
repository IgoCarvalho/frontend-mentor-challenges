import { InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

type InputProps = {
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ error = false, ...props }: InputProps) {
  return <input className={`${styles.input} ${error && styles.error}`} {...props} />;
}
