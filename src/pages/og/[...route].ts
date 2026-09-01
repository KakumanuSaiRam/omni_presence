import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';
import { staticOgPages, dataOgPages } from '../../data/og-pages.js';

const posts = await getCollection('blog');
const blogPages = Object.fromEntries(
  posts.map((post) => [
    `blog/${post.id}`,
    { title: post.data.title, description: post.data.description },
  ])
);

const pages = { ...staticOgPages(), ...dataOgPages(), ...blogPages };

const NAVY = /** @type {const} */ ([31, 35, 104]);
const ORANGE = /** @type {const} */ ([232, 130, 26]);
const CHALK = /** @type {const} */ ([251, 250, 247]);

const FONTS = [
  'https://cdn.jsdelivr.net/fontsource/fonts/fraunces@latest/latin-700-normal.ttf',
  'https://cdn.jsdelivr.net/fontsource/fonts/karla@latest/latin-500-normal.ttf',
  'https://cdn.jsdelivr.net/fontsource/fonts/noto-sans-telugu@latest/telugu-700-normal.ttf',
];

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => {
    const telugu = /[\u0C00-\u0C7F]/.test(`${page.title}${page.description}`);
    const stack = telugu ? ['Noto Sans Telugu', 'Fraunces'] : ['Fraunces', 'Noto Sans Telugu'];
    const bodyStack = telugu ? ['Noto Sans Telugu', 'Karla'] : ['Karla', 'Noto Sans Telugu'];
    return {
      title: page.title,
      description: page.description,
      logo: { path: './public/logo.png', size: [96] },
      bgGradient: [NAVY],
      border: { color: ORANGE, width: 14, side: 'block-end' },
      padding: 64,
      fonts: FONTS,
      font: {
        title: { color: ORANGE, size: 52, lineHeight: 1.15, weight: 'Bold', families: stack },
        description: { color: CHALK, size: 28, lineHeight: 1.35, families: bodyStack },
      },
    };
  },
});
