export default {
  widgets: [
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
                  buildHookId: '5eb7c46bdfd2a0162ee251e7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-27h67asf',
                  apiId: 'f8eccf7d-9c59-4cbc-86b1-8c63adec2185'
                },
                {
                  buildHookId: '5eb7c46b8f7aa30549db97de',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8bwnvdad',
                  apiId: 'e6331cc6-6f6b-401d-a1a9-b080022fbabe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/G100g/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8bwnvdad.netlify.app', category: 'apps'}
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
