import type { TextareaHTMLAttributes } from 'react';
import './TextArea.css';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

/** Multi-line text area. Drag the corner handle to resize. */
export function TextArea({ className = '', ...rest }: TextAreaProps) {
  return <textarea className={`text-area ${className}`.trim()} {...rest} />;
}
