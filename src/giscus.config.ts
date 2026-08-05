// Giscus comments configuration (GitHub Discussions-backed).
//
// Comments render on blog posts ONLY when both repoId and categoryId are set.
// Until then the <Comments /> component renders nothing, so the build is safe
// to ship before setup is complete.
//
// To enable (one-time, on Krista's account):
//   1. On GitHub, enable Discussions for Allisondvm/allison-dvm-site
//      (repo Settings → General → Features → Discussions).
//   2. Install the giscus app: https://github.com/apps/giscus (grant it access
//      to the allison-dvm-site repo).
//   3. Go to https://giscus.app, enter the repo, pick mapping "pathname" and a
//      Discussion category (e.g. a dedicated "Comments" category). It prints a
//      data-repo-id and data-category-id.
//   4. Paste those two values below and redeploy.

export const giscus = {
  repo: 'Allisondvm/allison-dvm-site' as const,
  repoId: '', // fill from giscus.app
  category: 'Comments',
  categoryId: '', // fill from giscus.app
  // Visuals / behavior — light theme to match the site.
  mapping: 'pathname' as const,
  theme: 'light' as const,
  reactionsEnabled: '1' as const,
  inputPosition: 'bottom' as const,
};

export const giscusEnabled = giscus.repoId !== '' && giscus.categoryId !== '';
