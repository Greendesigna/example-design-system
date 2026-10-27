import { useEffect } from 'react';
import navDot from '../assets/icons/nav-dot.svg';
import { CATEGORIES, type Category } from '../data/nfts';
import { useDragScroll } from '../hooks/useDragScroll';
import './CategoryTabs.css';

type CategoryTabsProps = {
  active: Category;
  onChange: (category: Category) => void;
};

/**
 * Category row with a pink dot under the active tab. Like the prototype, the row
 * rotates so the active category always sits first and the others follow in a loop.
 */
export function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  const scrollRef = useDragScroll<HTMLDivElement>();

  const start = CATEGORIES.indexOf(active);
  const ordered = [...CATEGORIES.slice(start), ...CATEGORIES.slice(0, start)];

  // Bring the newly active tab back to the left edge.
  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0 });
  }, [active, scrollRef]);

  return (
    <div ref={scrollRef} className="category-tabs" role="tablist" aria-label="NFT categories">
      {ordered.map((category) => {
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
            {isActive && <img className="category-tabs__dot" src={navDot} alt="" draggable={false} />}
          </button>
        );
      })}
    </div>
  );
}
