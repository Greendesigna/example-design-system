import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SavedButton } from './SavedButton';

const meta = {
  title: 'Components/Saved Button',
  component: SavedButton,
  args: { saved: false, onToggle: fn() },
  decorators: [
    (Story) => (
      <div style={{ padding: 24, background: '#f9fafb', borderRadius: 8 }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Heart toggle at the top right of the Detail screen. Outline when not saved, filled with the accent colour ' +
          'when saved. Hover or press it to see the grey circle.',
      },
    },
  },
} satisfies Meta<typeof SavedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotSaved: Story = {};
export const Saved: Story = { args: { saved: true } };

/** Click to toggle. */
export const Interactive: Story = {
  render: function Render() {
    const [saved, setSaved] = useState(false);
    return <SavedButton saved={saved} onToggle={() => setSaved((s) => !s)} />;
  },
};
