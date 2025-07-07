import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>Findoora Docs</span>,
  project: {
    link: 'https://github.com/findoora/findoora-shadcn',
  },
  docsRepositoryBase: 'https://github.com/findoora/findoora-shadcn/tree/main/apps/docs',
  footer: {
    text: 'Findoora Docs',
  },
  search: {
    component: null,
    placeholder: 'Search documentation...',
  },
  sidebar: {
    titleComponent({ title, type }: { title: string; type: string }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback',
  },
  primaryHue: 215,
  primarySaturation: 100,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Findoora Docs',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Findoora Docs" />
      <meta
        property="og:description"
        content="Documentation for using the Findoora application"
      />
    </>
  ),
};

export default config;
