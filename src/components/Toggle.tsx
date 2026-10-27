import type { ButtonHTMLAttributes } from 'react';
import './Toggle.css';

export type ToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> & {
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

/** Two-state switch. Renders a button with `role="switch"`. */
export function Toggle({ checked, onChange, className = '', ...rest }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`toggle ${checked ? 'is-on' : ''} ${className}`.trim()}
      onClick={() => onChange?.(!checked)}
      {...rest}
    >
      <span className="toggle__knob" />
    </button>
  );
}
