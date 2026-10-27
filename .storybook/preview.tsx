import type { Preview } from '@storybook/react-vite';
import '../src/styles/tokens.css';
import '../src/styles/global.css';

const preview: Preview = {
  tags: ['autodocs'],
  initialGlobals: {
    backgrounds: { value: 'grey' },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      options: {
        grey: { name: 'Grey', value: '#f3f3f3' },
        white: { name: 'White', value: '#ffffff' },
        dark: { name: 'Dark', value: '#090909' },
        backdrop: { name: 'Backdrop', value: '#2a2a2a' },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', 'Components', 'Screens'],
      },
    },
  },
};

export default preview;
