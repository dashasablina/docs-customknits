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
const yandexMetrikaCounterId = '107256071';

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
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${yandexMetrikaCounterId}', 'ym');

        ym(${yandexMetrikaCounterId}, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
      `,
    },
    {
      tagName: 'noscript',
      attributes: {},
      innerHTML: '<div><img src="https://mc.yandex.ru/watch/107256071" style="position:absolute; left:-9999px;" alt="" /></div>',
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

        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
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
