# AI Career Research

**[Read the research guide on GitHub Pages](https://northernladd.github.io/ai-career-research/)**

Explore emerging AI job titles, the work behind them, and possible routes into the field. The guide pairs employer examples with U.S. labor-market evidence and small projects you can try.

- [Career profiles](docs/roles.md)
- [Growth evidence and sources](docs/outlook.md)

## Run locally

With Node.js 22 or newer installed, run `npm ci` and `npm run docs:dev`. Open the local address printed by VitePress. Run `npm run docs:build` to check links and generate the production site.

## Extend the research

Add a profile to `docs/roles.md` with an employer's title, a description of the work, a possible entry route, and a linked source. For each growth claim, record the geography, period, occupation, and measure in `docs/outlook.md`. Check the build before pushing to main. GitHub Actions publishes successful builds to Pages.
