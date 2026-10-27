import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './TextField';

const meta = {
  title: 'Components/Text Field',
  component: TextField,
  args: { placeholder: 'Text input', 'aria-label': 'Text input' },
  argTypes: {
    status: { control: 'select', options: [undefined, 'valid', 'error'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Single-line field. Hover and focus are real browser states (click into the field to see the edit icon). ' +
          'Use `status` for the validation result.',
      },
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hover: Story = { args: { className: 'is-hover' } };
export const Active: Story = { args: { className: 'is-active' } };
export const Valid: Story = { args: { status: 'valid', defaultValue: 'Looks good' } };
export const Error: Story = { args: { status: 'error', defaultValue: 'Needs fixing' } };
export const Disabled: Story = { args: { disabled: true } };
