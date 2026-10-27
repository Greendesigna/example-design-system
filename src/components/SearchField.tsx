import type { InputHTMLAttributes } from 'react';
import { SearchIcon18 } from './ui-icons';
import './SearchField.css';

export type SearchFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

/** Search field on the tertiary colour. */
export function SearchField({ className = '', placeholder = 'Search input', ...rest }: SearchFieldProps) {
  return (
    <label className={`search-field ${className}`.trim()}>
      <SearchIcon18 />
      <input className="search-field__input" type="search" placeholder={placeholder} aria-label={placeholder} {...rest} />
    </label>
  );
}
