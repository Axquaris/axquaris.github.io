# Redesign candidates

Five light-mode directions for the homepage. Open `designs/index.html` to browse them, or
open any candidate file directly.

Each candidate is one self-contained HTML file: content in the markup, CSS in a single
`<style>` block at the top, colors and typefaces declared as custom properties on `:root`.
Nothing is compiled and there is no framework, so a candidate can be read top to bottom and
folded back into `index.html` + `stylesheet.css` by hand.

| # | Name | Direction |
|---|------|-----------|
| 01 | Lattice | Swiss grid, hairline rules, monospace rail. Quietest; closest to the current site. |
| 02 | Atelier | Soft white panels on a tinted ground, headshot, pill links, publication cards. |
| 03 | Orbit | Graphic poster: arch, chartreuse on forest, numbered index of work. Boldest. |
| 04 | Preprint | The page set as a typeset paper: numbered sections, figure captions, bibliography. |
| 05 | Manifold | Editorial: didone display face, violet accents, canvas-generated symmetry rosette. |

All five are light-only by design and set `color-scheme: light`; none carries the dark-mode
toggle. Whichever direction wins, the toggle and its `[data-theme=dark]` rules can be carried
over from `stylesheet.css` and `resources/darkmode_button.css`.

## Content notes

The candidates reuse the copy already on the site. Two things were added and should be
checked before any of this ships:

- **Affiliation captions.** NVIDIA, Shield AI, Berkeley AI Research and UC Berkeley are
  listed with short descriptions ("AI for autonomous vehicles", and so on) inferred from the
  existing homepage blurb. No dates are given, because the site does not state any.
- **Candidate 04 margin note.** The equation in §1 is the standard equivariance condition,
  Φ(ρ(g)x) = ρ′(g)Φ(x) — a map commuting with the group action, as in Cohen & Welling,
  *Group Equivariant Convolutional Networks* (ICML 2016). It is decorative; delete it if it
  is not wanted.

## Adopting one

1. Copy the chosen candidate's `<style>` block into `stylesheet.css`.
2. Move its markup into `index.html`, keeping the `<div id="papers_html">` hook and
   `loadPapers()` from `resources/scripts.js` if the papers should stay in `papers.html`.
3. Re-mark up `papers.html` to match the candidate's publication row classes.
