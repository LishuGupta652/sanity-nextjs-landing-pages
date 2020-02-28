export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e5983ffe6c5a8a601edf63e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gnycrsid',
                  apiId: 'a37bc56d-52b9-4dac-b66f-aa0a0aeda0b5'
                },
                {
                  buildHookId: '5e5983ff067fe17b33a0abe0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-owu5t1ci',
                  apiId: '16885aa3-9a7e-4935-87ca-4481c119d87f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LishuGupta652/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-owu5t1ci.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
