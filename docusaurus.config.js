const { themes: prismThemes } = require('prism-react-renderer');

const config = {
  title: 'Agentic 智能体设计模式',
  tagline: '理解智能体的设计原理与模式，构建能够推理、行动和协作的系统。',
  favicon: 'favicon.svg',
  url: 'https://docs.siping.me',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          exclude: [
            'README.md',
            'node_modules/**',
            'build/**',
            'static/**',
            'src/**',
            '.github/**',
          ],
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './style.css',
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },
  themeConfig: {
    image: 'logo/light.svg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Agentic 智能体设计模式',
      logo: {
        alt: 'Agentic 智能体设计模式',
        src: 'logo/light.svg',
      },
      items: [
        { to: '/learning-guide', label: '阅读指南', position: 'right' },
        { to: '/chapter-directory', label: '章节目录', position: 'right' },
        {
          to: '/chapters/chapter-01/1.1-提示链模式概述',
          label: '开始阅读',
          position: 'right',
          className: 'navbar-start-reading',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: 'Agentic 智能体设计模式',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
