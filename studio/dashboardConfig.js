export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '610b3fa816c063464133bbf6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-1x94eioc',
                  apiId: '46e0053f-bd0f-4442-a3a8-b4ab97b9c05c'
                },
                {
                  buildHookId: '610b3fa8e6c8ab49414f861e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-az9ut7b9',
                  apiId: 'bd3a790a-0280-4a09-aa64-ea0c6463ed7d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dobson11/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-az9ut7b9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
