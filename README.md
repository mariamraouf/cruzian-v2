# Cruzian — v2 site

A standalone static site for [thecruzian.com](https://www.thecruzian.com). No build
step, no dependencies, no framework. Open `index.html` in a browser and it runs.

This is a **separate project** from the current live site. Nothing here is connected
to it.

## Structure

```
index.html                  the whole page
styles.css                  all styles
script.js                   goal picker, tabs, calculator, copy buttons
assets/logo.webp            brand logo
assets/hero-st-croix.webp   hero photograph
```

## Sections

Sunset hero with the goal picker, the tabbed "clear next step" block with
before/after mockups, the growth calculator, the nine services, the four-step
process, the four packages plus add-ons, the contact band and footer.

## Deploying

Drop the folder into Vercel, Netlify or GitHub Pages. There is nothing to build —
point the host at the repo root and serve `index.html`.

## Notes

The hero photograph is cropped from the brand's own "The Cruzian LinkedIn Banner"
artwork, so it is roughly 900px wide before upscaling. Swap in the original
full-resolution photo before this goes live.

Figures in the growth calculator are arithmetic on whatever the visitor types.
They are labelled illustrative and are not projections.
