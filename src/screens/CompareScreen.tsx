import { CategoryTabs } from '../components/CategoryTabs';
import { Navigation, type NavTab } from '../components/Navigation';
import { NftTile } from '../components/NftTile';
import { NFTS_BY_CATEGORY, type Category, type Nft } from '../data/nfts';
import './CompareScreen.css';

type CompareScreenProps = {
  category: Category;
  onChangeCategory: (category: Category) => void;
  savedCount: number;
  onOpenNft: (nft: Nft) => void;
  onNavigate: (tab: NavTab) => void;
};

export function CompareScreen({ category, onChangeCategory, savedCount, onOpenNft, onNavigate }: CompareScreenProps) {
  const nfts = NFTS_BY_CATEGORY[category];

  return (
    <main className="screen screen--dark compare">
      <h1 className="compare__title">
        Compare
        <br />
        NFTs
      </h1>
      <CategoryTabs active={category} onChange={onChangeCategory} />
      {nfts.length > 0 ? (
        <div className="compare__grid">
          {nfts.map((nft) => (
            <div key={nft.id} className="compare__cell" style={{ gridArea: nft.gridArea }}>
              <NftTile nft={nft} onSelect={onOpenNft} />
            </div>
          ))}
        </div>
      ) : (
        <p className="compare__empty">No {category.toLowerCase()} yet.</p>
      )}
      <Navigation active="home" savedCount={savedCount} onSelect={onNavigate} />
    </main>
  );
}
