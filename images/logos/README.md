# Institution logos

Drop logo files here to turn the institution wordmarks on the redesign candidates into
real logos. The badge script (`designs/logos.js`) looks for these exact paths:

| File | Institution |
|------|-------------|
| `nvidia.svg` | NVIDIA |
| `shield-ai.svg` | Shield AI |
| `bair.svg` | Berkeley AI Research |
| `uc-berkeley.svg` | UC Berkeley |

If a file is missing, the badge keeps showing the institution's name set in type, so the
page never renders a broken image. Adding a file is the only step needed — no markup change.

`.png` works too; change the `data-logo` attribute on the badge to match the extension.

Logos render at a maximum height of 30px, so prefer SVG, or a PNG at least 120px tall with
a transparent background. Horizontal lockups (wordmark beside the mark) read best at this
size; square seals get small.

These are third-party trademarks. Using them to identify institutions you were actually
affiliated with is ordinary practice on a personal academic page, but the files are not
included in this repository — download them from each institution's own brand or press
page so you are using the current, official artwork.
