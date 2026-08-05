# allisondvm.com

Personal professional site for Krista Allison, DVM: a veterinarian and clinical
researcher moving into animal-health industry roles (pharmacovigilance, drug
safety, medical affairs).

Static site built with [Astro](https://astro.build) and Tailwind CSS, served by
nginx from a small container.

## Develop

```bash
pnpm install
pnpm dev            # local dev server
pnpm build          # static build -> dist/
pnpm preview        # serve the built site
pnpm check:contrast # verify palette meets WCAG 2.1 AA
```

## Content

- Pages live in `src/pages/`.
- Blog posts: `src/content/posts/*.md`.
- Publications: `src/content/publications/*.md`.
- Visual editing via Decap CMS at `/admin` (GitHub-backed; OAuth setup pending).

## Assets

- OG social card: `pnpm og` (regenerates `public/og.png`).
- CV PDF: run `pnpm preview` then `pnpm cv` (renders `/cv` to `public/cv.pdf`).

## License

Code is MIT licensed (see `LICENSE`). Site content, text, and the likeness and
identity of Krista Allison are © Krista Allison and not covered by the code license.
