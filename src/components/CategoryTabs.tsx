import navDot from '../assets/icons/nav-dot.svg';
import type { Category } from '../data/nfts';
import { CATEGORIES } from '../data/nfts';
import './CategoryTabs.css';

type CategoryTabsProps = {
  active: Category;
  onChange: (category: Category) => void;
};

/** Horizontally scrolling category row with a pink dot under the active tab. */
export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="category-tabs" role="tablist" aria-label="NFT categories">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            className="category-tabs__tab"
            onClick={() => onChange(category)}
          >
            {category}
            {isActive && <img className="category-tabs__dot" src={navDot} alt="" />}
          </button>
        );
      })}
    </div>
  );
}
