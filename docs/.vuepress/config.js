module.exports = {
  title: 'ServerlessDays Organisers Guide',
  description: 'A practical guide on how to run a ServerlessDays event',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=PT+Mono'
      }
    ]
  ],
  serviceWorker: {
    updatePopup: {
      message: 'New content is available.',
      buttonText: 'Refresh'
    }
  },
  themeConfig: {
    logo: '/serverlessdays_white.svg',
    nav: [
      { text: 'Home', link: 'https://serverlessdays.io' },
      { text: 'Guide', link: '/' }
    ],
    repo: 'serverlessdays/organise',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    sidebar: [
      '/',
      '/inclusivity/',
      '/budget/',
      '/event-logistics/',
      '/legal/',
      '/promotion/',
      '/speakers/',
      '/sponsors/',
      '/website/',
      '/sustainability/'
    ],
    serviceWorker: {
      updatePopup:
        true | { message: 'New content is available.', buttonText: 'Refresh' }
    }
  }
}
