// import axios from './api'
// const version = '/bc-api'

// oauth path
export const oauthPath = () => {
  return '/login'
  // return '/api/oauth2/login' // 微博登录
}

export const websocketURL = () => {
  // process.env.NODE_ENV === 'production' ?
  return 'ws://47.93.35.179:8099/websocket/'
}

// export const bcLogin = (params) => {
//   return axios({
//     url: `${version}/user/login`,
//     method: 'post',
//     data: params
//   })
// }

// const getUserInfo = () => {
//   return axios({
//     url: `${version}/user_manage/manager_info`,
//     method: 'get'
//   })
// }

export default {
  oauthPath,
  // bcLogin,
  // getUserInfo,
  websocketURL
}
