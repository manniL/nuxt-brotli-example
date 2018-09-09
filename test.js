const iltorb = require('iltorb')
const axios = require('axios')

axios.get('https://fonts.googleapis.com/css?family=Roboto:400,700', {
  headers: { 'Accept-Encoding': 'deflate, gzip' }
}, {})
  .then(res => {
    console.log(res.headers)
    return res
  })
  .then(res => {
    console.log(res.data)
  })
