// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Case Interview Book',
  tagline: 'Visual study notes for consulting case interviews.',
  favicon: 'img/logo.svg',
  future: {v4: true},
  // GitHub Pages: https://<user>.github.io/<repo>/  (override locally with BASE_URL=/)
  url: 'https://pratikguru998.github.io',
  baseUrl: process.env.BASE_URL || '/case-in-point-book/',
  organizationName: 'pratikguru998',
  projectName: 'case-in-point-book',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {onBrokenMarkdownLinks: 'throw'},
  },
  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {hashed: true, indexBlog: false, docsRouteBasePath: '/docs', highlightSearchTermsOnTargetPage: true},
    ],
  ],
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {sidebarPath: './sidebars.js', showLastUpdateTime: false},
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      mermaid: {theme: {light: 'default', dark: 'dark'}},
      navbar: {
        title: 'Case Interview Book',
        logo: {alt: 'Case Interview Book', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'book', position: 'left', label: '📚 Chapters'},
          {to: '/docs/case-library', label: '🗂️ Case library', position: 'left'},
          {to: '/docs/cheat-sheet', label: '⚡ Cheat sheet', position: 'left'},
          {to: '/docs/glossary', label: '🔤 Glossary', position: 'left'},
          {to: '/docs/start-here', label: '🗺️ Start here', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Personal study notes · original text and diagrams · chapter structure follows Cosentino's <em>Case in Point</em>, 8th ed. (Burgee Press, 2013)`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['bash']},
    }),
};

export default config;
