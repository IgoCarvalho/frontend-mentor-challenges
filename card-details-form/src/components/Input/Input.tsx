import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import { PatternFormat } from 'react-number-format';

import styles from './Input.module.scss';

type InputProps = {
  error?: boolean;
  format?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function InputBase(
  { format, type, value, defaultValue, error = false, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  if (format) {
    return (
      <PatternFormat
        format={format}
        className={`${styles.input} ${error && styles.error}`}
        value={value as string}
        defaultValue={defaultValue as string}
        {...props}
        getInputRef={ref}
      />
    );
  }

  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      className={`${styles.input} ${error && styles.error}`}
      {...props}
      ref={ref}
    />
  );
}

export const Input = forwardRef(InputBase);
