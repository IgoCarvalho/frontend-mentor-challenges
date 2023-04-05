import { InputHTMLAttributes } from 'react';

import { Input } from '../Input/Input';

import styles from './TextField.module.scss';

type TextFieldProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function TextField({ name, label, error, ...props }: TextFieldProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Input {...props} name={name} id={name} error={!!error} />
      {!!error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
}
