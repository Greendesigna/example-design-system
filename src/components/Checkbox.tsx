import type { InputHTMLAttributes } from 'react';
import { ValidIcon } from './ui-icons';
import './Checkbox.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'children'> & {
  /** Accessible name when there is no visible label. */
  'aria-label'?: string;
};

/** Two-state checkbox. A native checkbox sits under the styled box, so keyboard and screen readers work. */
export function Checkbox({ className = '', ...rest }: CheckboxProps) {
  return (
    <span className={`checkbox ${className}`.trim()}>
      <input className="checkbox__input" type="checkbox" {...rest} />
      <span className="checkbox__box" aria-hidden="true">
        <ValidIcon className="checkbox__tick" width={28} height={21} />
      </span>
    </span>
  );
}
