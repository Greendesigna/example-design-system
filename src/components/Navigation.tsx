import type { ComponentType, SVGProps } from 'react';
import { HomeIcon, ProfileIcon, SavedIcon, SearchIcon } from './icons';
import './Navigation.css';

export type NavTab = 'home' | 'search' | 'saved' | 'profile';

const TABS: { id: NavTab; label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { id: 'home', label: 'Home', Icon: HomeIcon },
  { id: 'search', label: 'Search', Icon: SearchIcon },
  { id: 'saved', label: 'Saved', Icon: SavedIcon },
  { id: 'profile', label: 'Profile', Icon: ProfileIcon },
];

type NavigationProps = {
  /** Tab to highlight. Leave undefined on screens that are not a tab (e.g. Detail). */
  active?: NavTab;
  onSelect?: (tab: NavTab) => void;
};

/** Floating pill navigation bar shown at the bottom of every screen. */
export function Navigation({ active, onSelect }: NavigationProps) {
  return (
    <nav className="navigation" aria-label="Main">
      {TABS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          className="navigation__tab"
          aria-label={label}
          aria-current={id === active ? 'page' : undefined}
          onClick={() => onSelect?.(id)}
        >
          <Icon className="navigation__icon" />
        </button>
      ))}
    </nav>
  );
}
