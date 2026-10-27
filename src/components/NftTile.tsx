import type { CSSProperties } from 'react';
import type { Nft } from '../data/nfts';
import './NftTile.css';

type NftTileProps = {
  nft: Nft;
  onSelect?: (nft: Nft) => void;
  /** Fixed size in px, for horizontal rows. Omit to fill the parent grid cell. */
  width?: number;
  height?: number;
};

/** Rounded NFT image. Becomes a button when `onSelect` is given. */
export function NftTile({ nft, onSelect, width, height }: NftTileProps) {
  const style: CSSProperties = {
    ...(width ? { width, flex: `0 0 ${width}px` } : null),
    ...(height ? { height } : null),
  };
  const image = <img className="nft-tile__image" src={nft.image} alt={nft.name} draggable={false} />;

  if (!onSelect) {
    return (
      <div className="nft-tile" style={style}>
        {image}
      </div>
    );
  }
  return (
    <button type="button" className="nft-tile nft-tile--button" style={style} onClick={() => onSelect(nft)}>
      {image}
    </button>
  );
}
