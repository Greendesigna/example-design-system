# NFT Comparison App

A mobile NFT browsing app, built from the "GDA. Project - NFT Comparison Application" Figma prototype.
React + Vite + TypeScript with plain CSS.

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (http://localhost:5173 by default). `npm run build` type-checks and builds to `dist/`.

## What's built

- **Compare screen:** dark screen with a category row and a bento grid of NFTs. Tap a tile to open it.
- **Detail screen:** hero image, title, creator, description, a heart to save, and a scrolling "Similar Photos" row.
- **Floating navigation bar:** Home returns to Compare. Search, Saved and Profile have no screens in the prototype yet.

## Structure

```
src/
  components/   Navigation, NftTile, CategoryTabs, SavedButton, icons
  screens/      CompareScreen, DetailScreen
  data/         nfts.ts (images, names, grid placement)
  styles/       tokens.css (colours, type, spacing), global.css
  assets/       NFT images and icons exported from Figma
```

Design tokens live in `src/styles/tokens.css` and come from the Figma file: `#090909` background,
`#F04D6B` accent, Oxygen for headings and body, Hanken Grotesk for the category row.

## Notes

- Only "Mysterious Mafia Man PFP Avatar" by Pikisuperstar is named in the prototype. The other NFT
  names and creators in `src/data/nfts.ts` are placeholders, and the description is the prototype's lorem ipsum.
- In the prototype only the large tile links to Detail. Here every tile does.
- The category tabs change the highlighted tab only; every NFT is an avatar, so nothing is filtered.
- The "Similar Photos" row starts at the 16px gutter. The Figma frame offsets it to 32px, which looks unintentional.
- `.npmrc` points this project at the public npm registry.
