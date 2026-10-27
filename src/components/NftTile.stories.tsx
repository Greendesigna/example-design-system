import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { NFTS_BY_CATEGORY } from '../data/nfts';
import { NftTile } from './NftTile';

const [wizard, mafia, , , , , anime] = NFTS_BY_CATEGORY.Avatars;

const meta = {
  title: 'Components/NFT Tile',
  component: NftTile,
  args: { nft: wizard, width: 109, height: 108 },
  parameters: {
    docs: {
      description: {
        component:
          'Rounded NFT image. It is a plain image by default and becomes a button when `onSelect` is given. ' +
          'The Compare grid sizes it from the grid cell; rows such as Similar Photos pass a fixed width and height.',
      },
    },
  },
} satisfies Meta<typeof NftTile>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 109 x 108, the standard grid cell. */
export const Small: Story = {};

/** 226 x 224, spans two grid columns and two rows. */
export const Large: Story = { args: { nft: mafia, width: 226, height: 224 } };

/** 139 x 136, used in the Similar Photos row. */
export const Row: Story = { args: { nft: anime, width: 139, height: 136 } };

/** With `onSelect` the tile is a button with a focus ring. */
export const Clickable: Story = { args: { onSelect: fn() } };

export const Generative: Story = { args: { nft: NFTS_BY_CATEGORY.Generative[0] } };
export const Artwork: Story = { args: { nft: NFTS_BY_CATEGORY.Artwork[0] } };
