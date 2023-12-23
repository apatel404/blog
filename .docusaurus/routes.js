import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog/blog',
    component: ComponentCreator('/blog/blog', '550'),
    exact: true
  },
  {
    path: '/blog/blog/archive',
    component: ComponentCreator('/blog/blog/archive', '163'),
    exact: true
  },
  {
    path: '/blog/blog/first-blog-post',
    component: ComponentCreator('/blog/blog/first-blog-post', '613'),
    exact: true
  },
  {
    path: '/blog/blog/long-blog-post',
    component: ComponentCreator('/blog/blog/long-blog-post', '5c6'),
    exact: true
  },
  {
    path: '/blog/blog/mdx-blog-post',
    component: ComponentCreator('/blog/blog/mdx-blog-post', '32f'),
    exact: true
  },
  {
    path: '/blog/blog/tags',
    component: ComponentCreator('/blog/blog/tags', '2ec'),
    exact: true
  },
  {
    path: '/blog/blog/tags/docusaurus',
    component: ComponentCreator('/blog/blog/tags/docusaurus', '7f7'),
    exact: true
  },
  {
    path: '/blog/blog/tags/facebook',
    component: ComponentCreator('/blog/blog/tags/facebook', 'd5c'),
    exact: true
  },
  {
    path: '/blog/blog/tags/hello',
    component: ComponentCreator('/blog/blog/tags/hello', 'a3b'),
    exact: true
  },
  {
    path: '/blog/blog/tags/hola',
    component: ComponentCreator('/blog/blog/tags/hola', '16f'),
    exact: true
  },
  {
    path: '/blog/blog/welcome',
    component: ComponentCreator('/blog/blog/welcome', '952'),
    exact: true
  },
  {
    path: '/blog/markdown-page',
    component: ComponentCreator('/blog/markdown-page', '53b'),
    exact: true
  },
  {
    path: '/blog/docs',
    component: ComponentCreator('/blog/docs', '5e6'),
    routes: [
      {
        path: '/blog/docs',
        component: ComponentCreator('/blog/docs', '024'),
        routes: [
          {
            path: '/blog/docs',
            component: ComponentCreator('/blog/docs', 'b12'),
            routes: [
              {
                path: '/blog/docs/category/tutorial---basics',
                component: ComponentCreator('/blog/docs/category/tutorial---basics', 'b63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/category/tutorial---extras',
                component: ComponentCreator('/blog/docs/category/tutorial---extras', 'f6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/intro',
                component: ComponentCreator('/blog/docs/intro', '0e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/blog/docs/tutorial-basics/congratulations', 'b14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/blog/docs/tutorial-basics/create-a-blog-post', '1d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/blog/docs/tutorial-basics/create-a-document', '2fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/blog/docs/tutorial-basics/create-a-page', 'b70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/blog/docs/tutorial-basics/deploy-your-site', '3b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/blog/docs/tutorial-basics/markdown-features', 'efa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/blog/docs/tutorial-extras/manage-docs-versions', '1a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/blog/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/blog/docs/tutorial-extras/translate-your-site', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/blog/',
    component: ComponentCreator('/blog/', '968'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
