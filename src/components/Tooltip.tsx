import type { HTMLAttributes } from 'react';
import './Tooltip.css';

export type TooltipProps = HTMLAttributes<HTMLDivElement> & {
  /** Which side of the box the beak sits on. */
  beak?: 'top' | 'bottom' | 'left' | 'right';
};

/** Popover with a beak on any side. Position it next to the thing it describes. */
export function Tooltip({ beak = 'bottom', className = '', children, ...rest }: TooltipProps) {
  return (
    <div role="tooltip" className={`tooltip tooltip--${beak} ${className}`.trim()} {...rest}>
      <div className="tooltip__body">{children}</div>
      <span className="tooltip__beak" aria-hidden="true" />
    </div>
  );
}
