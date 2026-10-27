import wizard from '../assets/nfts/wizard.png';
import cat from '../assets/nfts/cat.png';
import frog from '../assets/nfts/frog.png';
import punk from '../assets/nfts/punk.png';
import leopard from '../assets/nfts/leopard.png';
import orange from '../assets/nfts/orange.png';
import raccoon from '../assets/nfts/raccoon.png';
import mafia from '../assets/nfts/mafia.png';
import anime from '../assets/nfts/anime.png';

import genA from '../assets/nfts/generative/a.png';
import genB from '../assets/nfts/generative/b.png';
import genC from '../assets/nfts/generative/c.png';
import genD from '../assets/nfts/generative/d.png';
import genE from '../assets/nfts/generative/e.png';
import genF from '../assets/nfts/generative/f.png';
import genG from '../assets/nfts/generative/g.png';
import genH from '../assets/nfts/generative/h.png';
import genI from '../assets/nfts/generative/i.png';

import artA from '../assets/nfts/artwork/a.png';
import artB from '../assets/nfts/artwork/b.png';
import artC from '../assets/nfts/artwork/c.png';
import artD from '../assets/nfts/artwork/d.png';
import artE from '../assets/nfts/artwork/e.png';
import artF from '../assets/nfts/artwork/f.png';
import artG from '../assets/nfts/artwork/g.png';
import artH from '../assets/nfts/artwork/h.png';
import artI from '../assets/nfts/artwork/i.png';

/** The prototype's category row cycles through these four. */
export const CATEGORIES = ['Avatars', 'Generative', 'Artwork', 'Collectables'] as const;

export type Category = (typeof CATEGORIES)[number];

export type Nft = {
  id: string;
  category: Category;
  name: string;
  creator: string;
  image: string;
  /** Named area in the Compare screen's bento grid (see CompareScreen.css). */
  gridArea: string;
};

const UNKNOWN_ARTIST = 'Unknown artist';

/**
 * Only "Mysterious Mafia Man PFP Avatar" by Pikisuperstar is named in the Figma
 * prototype. Every other name and creator is a placeholder.
 */
const AVATARS: Nft[] = [
  { id: 'avatars-a', category: 'Avatars', name: 'Wizard Hat Avatar', creator: UNKNOWN_ARTIST, image: wizard, gridArea: 'a' },
  { id: 'avatars-b', category: 'Avatars', name: 'Mysterious Mafia Man PFP Avatar', creator: 'Pikisuperstar', image: mafia, gridArea: 'b' },
  { id: 'avatars-c', category: 'Avatars', name: 'Teal Lucky Cat', creator: UNKNOWN_ARTIST, image: cat, gridArea: 'c' },
  { id: 'avatars-d', category: 'Avatars', name: 'Dancing Frog', creator: UNKNOWN_ARTIST, image: frog, gridArea: 'd' },
  { id: 'avatars-e', category: 'Avatars', name: 'Pixel Punk', creator: UNKNOWN_ARTIST, image: punk, gridArea: 'e' },
  { id: 'avatars-f', category: 'Avatars', name: 'Leopard Hood Avatar', creator: UNKNOWN_ARTIST, image: leopard, gridArea: 'f' },
  { id: 'avatars-g', category: 'Avatars', name: 'Masked Anime Avatar', creator: UNKNOWN_ARTIST, image: anime, gridArea: 'g' },
  { id: 'avatars-h', category: 'Avatars', name: 'Purple Hair Avatar', creator: UNKNOWN_ARTIST, image: orange, gridArea: 'h' },
  { id: 'avatars-i', category: 'Avatars', name: 'Sword Raccoon', creator: UNKNOWN_ARTIST, image: raccoon, gridArea: 'i' },
];

/** Builds a category's nine NFTs from images in grid-area order a to i. */
function placeholderSet(category: Category, images: Record<string, string>): Nft[] {
  return Object.entries(images).map(([gridArea, image], index) => ({
    id: `${category.toLowerCase()}-${gridArea}`,
    category,
    name: `${category} #${index + 1}`,
    creator: UNKNOWN_ARTIST,
    image,
    gridArea,
  }));
}

const GENERATIVE = placeholderSet('Generative', {
  a: genA, b: genB, c: genC, d: genD, e: genE, f: genF, g: genG, h: genH, i: genI,
});

const ARTWORK = placeholderSet('Artwork', {
  a: artA, b: artB, c: artC, d: artD, e: artE, f: artF, g: artG, h: artH, i: artI,
});

/** Collectables has no design in the prototype yet, so it is empty. */
export const NFTS_BY_CATEGORY: Record<Category, Nft[]> = {
  Avatars: AVATARS,
  Generative: GENERATIVE,
  Artwork: ARTWORK,
  Collectables: [],
};

/** Placeholder copy from the prototype's Detail screen. */
export const PLACEHOLDER_DESCRIPTION =
  'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.';
