// export default {
//   generate: {
//     fallback: true,
//     // fallback: ''
//   },
// }

module.exports = {
  link: ['assets/main.css'],
  router: {
    middleware: 'stats'
  },
  module: [
    '@nuxtjs/axios',
  ],
  axios: {
    proxy: true,
    prefix: '/',
    credentials: true,
  },
  proxy: {
    
  },
}