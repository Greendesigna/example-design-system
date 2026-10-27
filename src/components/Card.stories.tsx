import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { NFTS_BY_CATEGORY } from '../data/nfts';
import { Button } from './Button';
import { Card } from './Card';

const COPY = 'This is a regular text body. This is a regular text body. This is a regular text body.';

const meta = {
  title: 'Components/Card',
  component: Card,
  args: { title: 'Card title', children: COPY },
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Dark card with a header, a close button and an action. */
export const CopyOnly: Story = {
  args: { variant: 'copy', onClose: fn(), actions: <Button variant="alternative">Button</Button> },
};

/** Light card with the image on top. */
export const MediaVertical: Story = {
  args: {
    variant: 'media',
    orientation: 'vertical',
    title: 'Dialog Title',
    subtitle: 'Dialog subtitle text here.',
    image: <img src={NFTS_BY_CATEGORY.Avatars[1].image} alt="" />,
    actions: (
      <>
        <Button variant="secondary">Button</Button>
        <Button variant="primary">Button</Button>
      </>
    ),
  },
};

/** Light card with the image beside the text. */
export const MediaHorizontal: Story = {
  args: { ...MediaVertical.args, orientation: 'horizontal' },
};
