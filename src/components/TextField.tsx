import type { InputHTMLAttributes } from 'react';
import { EditIcon, ErrorIcon, EyeOffIcon, ValidIcon } from './ui-icons';
import './TextField.css';

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Validation result. Shows a tick or an alert icon and colours the outline. */
  status?: 'valid' | 'error';
};

/**
 * Single-line text field. Hover, focus (with the edit icon) and disabled (with the hidden-eye icon)
 * come from the browser's own states, so it behaves like a normal input.
 */
export function TextField({ status, disabled, className = '', ...rest }: TextFieldProps) {
  const classes = ['text-field', status ? `text-field--${status}` : '', disabled ? 'is-disabled' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <label className={classes}>
      {disabled && <EyeOffIcon className="text-field__icon text-field__icon--accent" />}
      <input className="text-field__input" disabled={disabled} aria-invalid={status === 'error' || undefined} {...rest} />
      {!status && !disabled && <EditIcon className="text-field__icon text-field__edit" />}
      {status === 'valid' && <ValidIcon className="text-field__icon text-field__icon--valid" />}
      {status === 'error' && <ErrorIcon className="text-field__icon text-field__icon--error" />}
    </label>
  );
}
