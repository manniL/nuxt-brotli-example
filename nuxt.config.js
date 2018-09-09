import shrinkRay from 'shrink-ray-current'

export default {
  modules: ['@nuxtjs/axios'],
  render: {
    compressor: shrinkRay(),

  },
  axios: {
    prefix: '/api/',
    proxy: true,
  },

  proxy: {
    '/api/': { target: 'https://api.blog.lichter.io', pathRewrite: { '^/api/': '' } }
  },
}
