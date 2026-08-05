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

This repository is **dual-licensed** to keep the code open while protecting the writing:

- **Code** — [MIT](LICENSE). The Astro scaffolding, components, config, and tooling are free
  to reuse.
- **Content** — [CC BY-NC-ND 4.0](LICENSE-CONTENT). The pages and prose under `src/content/`,
  the CV text, and any authored writing may be shared with attribution, but not used
  commercially or redistributed in modified form.

### Content and branding

The name "Krista Allison, DVM", the domain allisondvm.com, the site's visual identity, and
Krista's personal identity, likeness, and photographs are **not** licensed for reuse. Fork the
code, not the person. Listed publications remain under their journals' copyright.
