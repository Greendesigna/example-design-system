import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchField } from './SearchField';
import { TextArea } from './TextArea';

const meta = {
  title: 'Components/Search and Text Area',
  parameters: {
    docs: {
      description: { component: 'Search field on the tertiary colour, and a multi-line text area.' },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = { render: () => <SearchField /> };

export const MultiLine: Story = {
  render: () => (
    <TextArea
      aria-label="Description"
      defaultValue="Multi-line textfield. Multi-line textfield. Multi-line textfield."
    />
  ),
};
