# Redesign candidates

Five light-mode directions for the homepage. Open `designs/index.html` to browse them, or
open any candidate file directly.

Each candidate is one self-contained HTML file: content in the markup, CSS in a single
`<style>` block at the top, colors and typefaces declared as custom properties on `:root`.
Nothing is compiled and there is no framework, so a candidate can be read top to bottom and
folded back into `index.html` + `stylesheet.css` by hand.

## Round two — blends

Scannable panels (02), the chalk / forest / chartreuse palette and colour blocking (03), and
bibliography-style publication rows (04), recombined five ways. All are contained columns
rather than full-width layouts. These carry the institution badges and have no experience
section — LinkedIn covers that.

| # | Name | Direction |
|---|------|-----------|
| 06 | Folio | White panels on chalk under a forest name banner; acid keyword block. The most straightforward blend. |
| 07 | Tabula | Poster header tiles, each section hung off an acid file tab; numbered index entries. |
| 08 | Strata | One rounded sheet of stacked colour bands: forest, white, sage, white, paper. |
| 09 | Ledger | Sticky forest identity card with pedigree badges stacked beside white content panels. |
| 10 | Rotunda | Acid masthead over one card per paper, each with an arch-framed figure. |

## Round one — first directions

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

## Institution badges

Candidates 06–10 show a "Previously at" row of badges for NVIDIA, Shield AI, Berkeley AI
Research and UC Berkeley. Each badge renders the institution's name as a wordmark and
upgrades itself to a real logo as soon as a file exists at the path in its `data-logo`
attribute — see `images/logos/README.md` for the filenames. `designs/logos.js` does the
swap in about ten lines; a missing file leaves the wordmark, so nothing ever renders broken.

The logo files are not in this repository: download them from each institution's own brand
or press page.

## Content notes

The candidates reuse the copy already on the site. Two things were added and should be
checked before any of this ships:

- **Affiliation captions.** In candidates 01–05, NVIDIA, Shield AI, Berkeley AI Research and
  UC Berkeley carry short descriptions ("AI for autonomous vehicles", and so on) inferred
  from the existing homepage blurb. No dates are given, because the site does not state any.
  Candidates 06–10 drop these in favour of the badge row.
- **Candidate 04 margin note.** The equation in §1 is the standard equivariance condition,
  Φ(ρ(g)x) = ρ′(g)Φ(x) — a map commuting with the group action, as in Cohen & Welling,
  *Group Equivariant Convolutional Networks* (ICML 2016). It is decorative; delete it if it
  is not wanted.

## Adopting one

1. Copy the chosen candidate's `<style>` block into `stylesheet.css`.
2. Move its markup into `index.html`, keeping the `<div id="papers_html">` hook and
   `loadPapers()` from `resources/scripts.js` if the papers should stay in `papers.html`.
3. Re-mark up `papers.html` to match the candidate's publication row classes.
