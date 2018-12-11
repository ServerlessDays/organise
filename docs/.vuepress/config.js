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
    sidebar: [
      '/',
      '/inclusivity/',
      '/budget/',
      '/event-logistics/',
      '/legal/',
      '/promotion/',
      '/speakers/',
      '/sponsors/',
      '/website/'
    ],
    serviceWorker: {
      updatePopup:
        true | { message: 'New content is available.', buttonText: 'Refresh' }
    }
  }
}
