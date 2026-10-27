import type { InputHTMLAttributes } from 'react';
import './RadioButton.css';

export type RadioButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'>;

/** Radio button. A native radio input sits under the styled circles. */
export function RadioButton({ className = '', ...rest }: RadioButtonProps) {
  return (
    <span className={`radio ${className}`.trim()}>
      <input className="radio__input" type="radio" {...rest} />
      <span className="radio__base" aria-hidden="true">
        <span className="radio__ring" />
        <span className="radio__dot" />
      </span>
    </span>
  );
}
