import { InputHTMLAttributes, ReactNode } from 'react';

import { Input } from '../Input/Input';

import styles from './TextField.module.scss';

type TextFieldProps = {
  label: string;
  error?: string;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ name, label, error, children, ...props }: TextFieldProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      {children ? (
        <div>{children}</div>
      ) : (
        <Input {...props} name={name} id={name} error={!!error} />
      )}
      {!!error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
