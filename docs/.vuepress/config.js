module.exports = {
  title: 'ServerlessDays Organisers Guid',
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
    nav: [{ text: 'Home', link: '/' }, { text: 'Guide', link: '/guide/' }],
    sidebar: [
      '/guide/',
      '/guide/budget/',
      '/guide/event-logistics/',
      '/guide/inclusivity/',
      '/guide/legal/',
      '/guide/marketing/',
      '/guide/speakers/',
      '/guide/sponsors/',
      '/guide/website/'
    ],
    serviceWorker: {
      updatePopup:
        true | { message: 'New content is available.', buttonText: 'Refresh' }
    }
  }
}
