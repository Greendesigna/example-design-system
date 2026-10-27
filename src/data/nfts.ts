import wizard from '../assets/nfts/wizard.png';
import cat from '../assets/nfts/cat.png';
import frog from '../assets/nfts/frog.png';
import punk from '../assets/nfts/punk.png';
import leopard from '../assets/nfts/leopard.png';
import orange from '../assets/nfts/orange.png';
import raccoon from '../assets/nfts/raccoon.png';
import mafia from '../assets/nfts/mafia.png';
import anime from '../assets/nfts/anime.png';

export type Nft = {
  id: string;
  name: string;
  creator: string;
  image: string;
  /** Named area in the Compare screen's bento grid (see CompareScreen.css). */
  gridArea: string;
};

export const CATEGORIES = [
  'Avatars',
  'Generative',
  'Artwork',
  'Collectables',
  'Photography',
  'Music',
  'Gaming',
] as const;

export type Category = (typeof CATEGORIES)[number];

/**
 * Only "Mysterious Mafia Man PFP Avatar" by Pikisuperstar is named in the Figma
 * prototype. The other names and creators are placeholders.
 */
export const NFTS: Nft[] = [
  { id: 'wizard', name: 'Wizard Hat Avatar', creator: 'Unknown artist', image: wizard, gridArea: 'a' },
  { id: 'mafia', name: 'Mysterious Mafia Man PFP Avatar', creator: 'Pikisuperstar', image: mafia, gridArea: 'b' },
  { id: 'cat', name: 'Teal Lucky Cat', creator: 'Unknown artist', image: cat, gridArea: 'c' },
  { id: 'frog', name: 'Dancing Frog', creator: 'Unknown artist', image: frog, gridArea: 'd' },
  { id: 'punk', name: 'Pixel Punk', creator: 'Unknown artist', image: punk, gridArea: 'e' },
  { id: 'leopard', name: 'Leopard Hood Avatar', creator: 'Unknown artist', image: leopard, gridArea: 'f' },
  { id: 'anime', name: 'Masked Anime Avatar', creator: 'Unknown artist', image: anime, gridArea: 'g' },
  { id: 'orange', name: 'Purple Hair Avatar', creator: 'Unknown artist', image: orange, gridArea: 'h' },
  { id: 'raccoon', name: 'Sword Raccoon', creator: 'Unknown artist', image: raccoon, gridArea: 'i' },
];

/** Placeholder copy from the prototype's Detail screen. */
export const PLACEHOLDER_DESCRIPTION =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';
