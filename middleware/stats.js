export default context => {
  context.userAgent = process.server
    ? context.req.headers['user-agent'] : navigator.userAgent

  console.log(context.userAgent)
}

// import axios from 'axios'

// export default ({ route }) => {
//   return axios.get('https://www.baidu.com')
// }