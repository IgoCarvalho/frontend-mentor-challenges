import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react';

import { Input } from '../Input/Input';

import styles from './TextField.module.scss';

type TextFieldProps = {
  label: string;
  error?: string;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

function TextFieldBase(
  { name, label, error, children, ...props }: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {children ? (
        <div>{children}</div>
      ) : (
        <Input {...props} name={name} id={name} error={!!error} ref={ref} />
      )}
      {!!error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}

export const TextField = forwardRef(TextFieldBase);
