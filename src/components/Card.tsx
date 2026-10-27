import type { HTMLAttributes, ReactNode } from 'react';
import { CloseIcon } from './ui-icons';
import './Card.css';

export type CardProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  /** `copy`: dark card with a header and close button. `media`: light card with an image. */
  variant?: 'copy' | 'media';
  /** Media cards only: stack the image above the text, or put it beside it. */
  orientation?: 'vertical' | 'horizontal';
  title: ReactNode;
  /** Media cards only: line under the title in the brand colour. */
  subtitle?: ReactNode;
  /** Media cards only: the image slot. Falls back to a grey placeholder. */
  image?: ReactNode;
  /** Buttons shown at the bottom. */
  actions?: ReactNode;
  /** Copy cards only: shows the close button when given. */
  onClose?: () => void;
};

/** Content card from the Example UI design system. */
export function Card({
  variant = 'copy',
  orientation = 'vertical',
  title,
  subtitle,
  image,
  actions,
  onClose,
  className = '',
  children,
  ...rest
}: CardProps) {
  if (variant === 'copy') {
    return (
      <div className={`card card--copy ${className}`.trim()} {...rest}>
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
          {onClose && (
            <button type="button" className="card__close" aria-label="Close" onClick={onClose}>
              <CloseIcon />
            </button>
          )}
        </div>
        <div className="card__body">{children}</div>
        {actions && <div className="card__actions">{actions}</div>}
      </div>
    );
  }
  return (
    <div className={`card card--media card--${orientation} ${className}`.trim()} {...rest}>
      <div className="card__image">{image}</div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        <div className="card__text">{children}</div>
        {actions && <div className="card__actions">{actions}</div>}
      </div>
    </div>
  );
}
