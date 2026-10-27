import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: { children: 'My Popover text', beak: 'bottom' },
  argTypes: { beak: { control: 'select', options: ['top', 'bottom', 'left', 'right'] } },
  decorators: [(Story) => <div style={{ padding: 24 }}><Story /></div>],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {};
export const Top: Story = { args: { beak: 'top' } };
export const Left: Story = { args: { beak: 'left' } };
export const Right: Story = { args: { beak: 'right' } };
