import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';
import { RadioButton } from './RadioButton';
import { Toggle } from './Toggle';

const meta = {
  title: 'Components/Switches',
  parameters: {
    docs: {
      description: {
        component:
          'Toggle, checkbox and radio button. The checkbox and radio use real inputs under the styled shapes, so ' +
          'keyboard use, forms and screen readers work.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const row = { display: 'flex', alignItems: 'center', gap: 24 } as const;

/** Click to switch on and off. */
export const ToggleSwitch: Story = {
  name: 'Toggle',
  render: function Render() {
    const [on, setOn] = useState(false);
    return (
      <div style={row}>
        <Toggle checked={on} onChange={setOn} aria-label="Notifications" />
        <Toggle checked aria-label="Always on" />
        <Toggle checked={false} disabled aria-label="Disabled" />
      </div>
    );
  },
};

export const CheckboxStates: Story = {
  name: 'Checkbox',
  render: () => (
    <div style={row}>
      <Checkbox aria-label="Unchecked" />
      <Checkbox aria-label="Checked" defaultChecked />
      <Checkbox aria-label="Disabled" disabled />
    </div>
  ),
};

/** Pick one of the group. */
export const RadioGroup: Story = {
  name: 'Radio button',
  render: () => (
    <div style={row}>
      <RadioButton name="size" aria-label="Small" />
      <RadioButton name="size" aria-label="Medium" defaultChecked />
      <RadioButton name="size" aria-label="Large (disabled)" disabled />
    </div>
  ),
};
