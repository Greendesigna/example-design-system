import { useState } from 'react';
import { CategoryTabs } from '../components/CategoryTabs';
import { Navigation, type NavTab } from '../components/Navigation';
import { NftTile } from '../components/NftTile';
import { NFTS, type Category, type Nft } from '../data/nfts';
import './CompareScreen.css';

type CompareScreenProps = {
  onOpenNft: (nft: Nft) => void;
  onNavigate: (tab: NavTab) => void;
};

export function CompareScreen({ onOpenNft, onNavigate }: CompareScreenProps) {
  const [category, setCategory] = useState<Category>('Avatars');

  return (
    <main className="screen screen--dark compare">
      <h1 className="compare__title">
        Compare
        <br />
        NFTs
      </h1>
      <CategoryTabs active={category} onChange={setCategory} />
      <div className="compare__grid">
        {NFTS.map((nft) => (
          <div key={nft.id} className="compare__cell" style={{ gridArea: nft.gridArea }}>
            <NftTile nft={nft} onSelect={onOpenNft} />
          </div>
        ))}
      </div>
      <Navigation active="home" onSelect={onNavigate} />
    </main>
  );
}
