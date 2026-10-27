import { useEffect, useState } from 'react';
import type { NavTab } from './components/Navigation';
import type { Nft } from './data/nfts';
import { CompareScreen } from './screens/CompareScreen';
import { DetailScreen } from './screens/DetailScreen';

export default function App() {
  const [openNft, setOpenNft] = useState<Nft | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  // Each screen starts at the top, like a new page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [openNft]);

  const toggleSaved = (id: string) =>
    setSavedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  // Only Home has a screen in the prototype; Search, Saved and Profile are not designed yet.
  const navigate = (tab: NavTab) => {
    if (tab === 'home') setOpenNft(null);
  };

  if (openNft) {
    return (
      <DetailScreen
        nft={openNft}
        saved={savedIds.has(openNft.id)}
        onToggleSaved={() => toggleSaved(openNft.id)}
        onOpenNft={setOpenNft}
        onNavigate={navigate}
      />
    );
  }
  return <CompareScreen onOpenNft={setOpenNft} onNavigate={navigate} />;
}
