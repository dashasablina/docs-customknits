// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

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

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',

          // ✅ ключевое: документация будет на https://docs.customknits.ru/...
          routeBasePath: '/',
        },

        // ✅ включаем блог и задаём красивый путь
        blog: {
          routeBasePath: '/blog',
          showReadingTime: true,
          // опционально: postsPerPage: 10,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

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
        // ✅ ссылка на docs sidebar (теперь это "в корне")
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Документация',
        },

        // ✅ ссылка на блог
        { to: '/blog', label: 'Блог', position: 'left' },
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
