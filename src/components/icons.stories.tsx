import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeIcon, ProfileIcon, SavedIcon, SearchIcon } from './icons';

const ICONS = { HomeIcon, SearchIcon, SavedIcon, ProfileIcon };

const meta = {
  title: 'Components/Icons',
  component: HomeIcon,
  parameters: {
    docs: {
      description: {
        component:
          'Navigation icons exported from the Figma prototype. They fill with `currentColor`, so set the `color` ' +
          'in CSS: `--color-nav-idle` when idle and `--color-nav-active` when active.',
      },
    },
  },
} satisfies Meta<typeof HomeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

function Gallery({ color }: { color: string }) {
  return (
    <div style={{ display: 'flex', gap: 32, color }}>
      {Object.entries(ICONS).map(([name, Icon]) => (
        <figure key={name} style={{ margin: 0, textAlign: 'center', fontFamily: 'var(--font-ui)', fontSize: 12, color: '#555' }}>
          <div style={{ color }}>
            <Icon width={32} height={32} />
          </div>
          {name}
        </figure>
      ))}
    </div>
  );
}

export const Idle: Story = { render: () => <Gallery color="var(--color-nav-idle)" /> };
export const Active: Story = { render: () => <Gallery color="var(--color-nav-active)" /> };
