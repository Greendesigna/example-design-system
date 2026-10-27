import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Example Design System',
    brandUrl: 'https://greendesigna.github.io/nft-comparison-app/storybook/',
    colorPrimary: '#d8186e',
    colorSecondary: '#006e7a',
  }),
});
