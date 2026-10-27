import divider from '../assets/icons/divider.svg';
import { Navigation, type NavTab } from '../components/Navigation';
import { NftTile } from '../components/NftTile';
import { SavedButton } from '../components/SavedButton';
import { NFTS, PLACEHOLDER_DESCRIPTION, type Nft } from '../data/nfts';
import './DetailScreen.css';

type DetailScreenProps = {
  nft: Nft;
  saved: boolean;
  onToggleSaved: () => void;
  onOpenNft: (nft: Nft) => void;
  onNavigate: (tab: NavTab) => void;
};

export function DetailScreen({ nft, saved, onToggleSaved, onOpenNft, onNavigate }: DetailScreenProps) {
  const similar = NFTS.filter((other) => other.id !== nft.id);

  return (
    <main className="screen screen--light detail">
      <div className="detail__hero">
        <img className="detail__hero-image" src={nft.image} alt={nft.name} />
        <div className="detail__saved">
          <SavedButton saved={saved} onToggle={onToggleSaved} />
        </div>
      </div>

      <div className="detail__body">
        <h1 className="detail__title">{nft.name}</h1>
        <p className="detail__creator">{nft.creator}</p>
        <p className="detail__description">{PLACEHOLDER_DESCRIPTION}</p>
        <img className="detail__divider" src={divider} alt="" />
        <h2 className="detail__subheading">Similar Photos</h2>
      </div>

      <div className="detail__similar">
        {similar.map((other) => (
          <NftTile key={other.id} nft={other} width={139} height={136} onSelect={onOpenNft} />
        ))}
      </div>

      <Navigation onSelect={onNavigate} />
    </main>
  );
}
