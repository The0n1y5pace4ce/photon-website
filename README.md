# Install

## Commands

All commands are run from the root of the project, from a terminal:

| Command                          | Action                                       |
| :------------------------------- | :------------------------------------------- |
| `npm install / yarn`             | Installs dependencies                        |
| `npm run dev / yarn dev`         | Starts local dev server at `localhost:3000`  |
| `npm run build / yarn build`     | Build your production site to `./dist/`      |
| `npm run preview / yarn preview` | Preview your build locally, before deploying |

# Customize

## Needed

- Change site in astro.config.mjs for Sitemap
- Change META properties in Layout.astro for SEO
- Change names, links and text in components
- Delete renovate.json as it just updates my dependencies

## Optional

- Replace Icons | See IconTemplate.astro for details
- Change colors and styles | [Tailwind Docs](https://tailwindcss.com/docs)
- Change Favicon | public/favicon.ico
