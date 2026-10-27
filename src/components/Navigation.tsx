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
  /** How many NFTs are saved. A pink dot shows on the Saved icon while this is above 0. */
  savedCount?: number;
  onSelect?: (tab: NavTab) => void;
};

/** Floating pill navigation bar shown at the bottom of every screen. */
export function Navigation({ active, savedCount = 0, onSelect }: NavigationProps) {
  return (
    <nav className="navigation" aria-label="Main">
      {TABS.map(({ id, label, Icon }) => {
        const showBadge = id === 'saved' && savedCount > 0;
        return (
          <button
            key={id}
            type="button"
            className="navigation__tab"
            aria-label={showBadge ? `${label}, ${savedCount} saved` : label}
            aria-current={id === active ? 'page' : undefined}
            onClick={() => onSelect?.(id)}
          >
            <Icon className="navigation__icon" />
            {showBadge && <span className="navigation__badge" aria-hidden="true" />}
          </button>
        );
      })}
    </nav>
  );
}
