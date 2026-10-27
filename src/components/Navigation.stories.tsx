import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Navigation } from './Navigation';

const meta = {
  title: 'Components/Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <div style={{ width: 375, display: 'flex', flexDirection: 'column' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    active: { control: 'select', options: [undefined, 'home', 'search', 'saved', 'profile'] },
    savedCount: { control: { type: 'number', min: 0 } },
  },
  args: { onSelect: fn() },
  parameters: {
    docs: {
      description: {
        component:
          'Floating pill bar shown at the bottom of every screen. The active tab gets a dark icon and a marker dot. ' +
          'A pink dot appears on the Saved heart while `savedCount` is above 0.',
      },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeActive: Story = { args: { active: 'home' } };
export const SearchActive: Story = { args: { active: 'search' } };
export const SavedActive: Story = { args: { active: 'saved' } };
export const ProfileActive: Story = { args: { active: 'profile' } };

/** On the Detail screen no tab is highlighted. */
export const NoActiveTab: Story = { args: { active: undefined } };

/** Something is saved, so the Saved heart shows the pink dot. */
export const WithSavedIndicator: Story = { args: { active: 'home', savedCount: 2 } };
