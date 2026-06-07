// @ts-check
import path from 'path';
import {fileURLToPath} from 'url';
import { themes as prismThemes } from 'prism-react-renderer';
import {
  getProductionExcludedDocs,
  shouldFilterDocsInProduction,
} from './src/lib/docsPublication.mjs';

const siteDir = path.dirname(fileURLToPath(import.meta.url));
const filterDocsInProduction = shouldFilterDocsInProduction();
const productionExcludedDocs = getProductionExcludedDocs(siteDir);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CustomKnits Docs',
  tagline: 'Документация для редактора вязания CustomKnits',
  favicon: 'img/logo2.png',

  url: 'https://docs.customknits.ru',
  baseUrl: '/',

  organizationName: 'dashasablina',
  projectName: 'customknits-docs',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'yandex-verification',
        content: '7770f4ffcb5bbaba',
      },
    },
  ],

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          exclude: productionExcludedDocs,

          routeBasePath: '/',
        },
        pages: {
          exclude: process.env.NODE_ENV === 'production' ? ['**/dev-progress.js'] : [],
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: ['./src/plugins/docs-progress/index.js'],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'CustomKnits Docs',
      logo: {
        alt: 'CustomKnits Logo',
        src: 'img/logo2.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Документация',
        },
        ...(process.env.NODE_ENV !== 'production'
          ? [
              {
                to: '/dev-progress',
                label: 'Dev progress',
                position: 'right',
              },
            ]
          : []),
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Перейти в редактор',
          items: [
            {
              label: 'CustomKnits',
              href: 'https://app.customknits.ru',
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
