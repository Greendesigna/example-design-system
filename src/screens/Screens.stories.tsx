import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { NFTS_BY_CATEGORY, type Category, type Nft } from '../data/nfts';
import { CompareScreen } from './CompareScreen';
import { DetailScreen } from './DetailScreen';

const meta = {
  title: 'Screens/Overview',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disabled: true },
    docs: {
      description: {
        component:
          'The two screens of the app, wired up with the same state as the live site. Open a tile on Compare to move to ' +
          'Detail, tap the heart to save, and use Home to go back.',
      },
    },
  },
  decorators: [(Story) => <div style={{ background: 'var(--color-backdrop)' }}><Story /></div>],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Compare screen. Switch category to swap the grid; open a tile to see Detail. */
export const Compare: Story = {
  render: function Render() {
    const [category, setCategory] = useState<Category>('Avatars');
    const [open, setOpen] = useState<Nft | null>(null);
    const [saved, setSaved] = useState<Set<string>>(new Set());
    const toggle = (id: string) =>
      setSaved((cur) => {
        const next = new Set(cur);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        return next;
      });
    if (open) {
      return (
        <DetailScreen
          nft={open}
          saved={saved.has(open.id)}
          savedCount={saved.size}
          onToggleSaved={() => toggle(open.id)}
          onOpenNft={setOpen}
          onNavigate={(tab) => tab === 'home' && setOpen(null)}
        />
      );
    }
    return (
      <CompareScreen
        category={category}
        onChangeCategory={setCategory}
        savedCount={saved.size}
        onOpenNft={setOpen}
        onNavigate={() => {}}
      />
    );
  },
};

/** Detail screen for the named NFT in the prototype. */
export const Detail: Story = {
  render: function Render() {
    const [nft, setNft] = useState<Nft>(NFTS_BY_CATEGORY.Avatars[1]);
    const [saved, setSaved] = useState(false);
    return (
      <DetailScreen
        nft={nft}
        saved={saved}
        savedCount={saved ? 1 : 0}
        onToggleSaved={() => setSaved((s) => !s)}
        onOpenNft={(next) => { setNft(next); setSaved(false); }}
        onNavigate={() => {}}
      />
    );
  },
};
