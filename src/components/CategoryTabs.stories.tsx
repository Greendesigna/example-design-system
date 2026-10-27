import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { CATEGORIES, type Category } from '../data/nfts';
import { CategoryTabs } from './CategoryTabs';

const meta = {
  title: 'Components/Category Tabs',
  component: CategoryTabs,
  decorators: [
    (Story) => (
      <div style={{ width: 375, padding: '16px 0', background: 'var(--color-bg-dark)' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    active: { control: 'select', options: CATEGORIES },
  },
  args: { active: 'Avatars', onChange: fn() },
  parameters: {
    docs: {
      description: {
        component:
          'Category row with a pink dot under the active tab. The row rotates so the active category always comes first ' +
          'and the others follow in a loop. Drag it with a mouse or swipe on touch.',
      },
    },
  },
} satisfies Meta<typeof CategoryTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Avatars: Story = { args: { active: 'Avatars' } };
export const Generative: Story = { args: { active: 'Generative' } };
export const Artwork: Story = { args: { active: 'Artwork' } };
export const Collectables: Story = { args: { active: 'Collectables' } };

/** Click a tab to see the row rotate. */
export const Interactive: Story = {
  render: function Render() {
    const [active, setActive] = useState<Category>('Avatars');
    return <CategoryTabs active={active} onChange={setActive} />;
  },
};
