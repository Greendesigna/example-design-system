import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'alternative' | 'link';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Visual style. */
  variant?: ButtonVariant;
};

/** Rounded button from the Example UI design system. */
export function Button({ variant = 'primary', className = '', type = 'button', children, ...rest }: ButtonProps) {
  return (
    <button type={type} className={`button button--${variant} ${className}`.trim()} {...rest}>
      <span className="button__label">{children}</span>
    </button>
  );
}
