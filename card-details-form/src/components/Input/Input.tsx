import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

import styles from './Input.module.scss';

type InputProps = {
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

function InputBase({ error = false, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  return <input className={`${styles.input} ${error && styles.error}`} {...props} ref={ref} />;
}

export const Input = forwardRef(InputBase);
