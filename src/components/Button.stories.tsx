import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button, type ButtonVariant } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Button', onClick: fn() },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'alternative', 'link'] },
    disabled: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Rounded button with four types and five states. Hover, press and keyboard focus come from the browser; ' +
          'the **States** story forces each one so you can see them side by side.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Alternative: Story = { args: { variant: 'alternative' } };
export const Link: Story = { args: { variant: 'link' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };

const VARIANTS: ButtonVariant[] = ['primary', 'secondary', 'alternative', 'link'];
const STATES: { label: string; className?: string; disabled?: boolean }[] = [
  { label: 'Default' },
  { label: 'Hover', className: 'is-hover' },
  { label: 'Pressed', className: 'is-pressed' },
  { label: 'Focus', className: 'is-focus' },
  { label: 'Disabled', disabled: true },
];

/** All four types in all five states, as in the Figma component. */
export const States: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <table style={{ borderCollapse: 'separate', borderSpacing: '24px 20px', font: 'var(--type-small)' }}>
      <thead>
        <tr>
          <th />
          {STATES.map((s) => (
            <th key={s.label} style={{ fontWeight: 400, textAlign: 'left' }}>{s.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {VARIANTS.map((variant) => (
          <tr key={variant}>
            <th style={{ fontWeight: 400, textAlign: 'left', textTransform: 'capitalize' }}>{variant}</th>
            {STATES.map((s) => (
              <td key={s.label}>
                <Button {...args} variant={variant} className={s.className} disabled={s.disabled} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
};
