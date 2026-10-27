# NFT Comparison App

A mobile NFT browsing app, built from the "GDA. Project - NFT Comparison Application" Figma prototype.
React + Vite + TypeScript with plain CSS.

**Live site:** https://greendesigna.github.io/nft-comparison-app/ (deploys automatically from `main` with GitHub Pages)

## Run it

```bash
npm install
npm run dev
```

Then open the URL Vite prints (http://localhost:5173 by default). `npm run build` type-checks and builds to `dist/`.

## What's built

- **Compare screen:** dark screen with a category row and a bento grid of NFTs. Tap a tile to open it.
  Choosing Generative, Artwork or Avatars swaps the grid, and the category row rotates so the chosen one comes first.
- **Detail screen:** hero image, title, creator, description, a heart to save, and a "Similar Photos" row that
  scrolls sideways (swipe on touch, drag or use the scrollbar with a mouse).
- **Saved indicator:** saving an NFT puts a pink dot on the Saved heart in the navigation bar. It goes away when
  nothing is saved.
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
- The category row has four categories, as in the prototype's Generative and Artwork frames. Collectables has no
  design yet, so it shows an empty message. Photography, Music and Gaming from the first frame are not included.
- The "Similar Photos" row starts at the 16px gutter. The Figma frame offsets it to 32px, which looks unintentional.
- `.npmrc` points this project at the public npm registry.
