import axios from '@/http/api'

export const version = '/api'

/**
 * 获取法规列表
 * @param {*}
 */
export const getLawsList = (data) => {
  return axios({
    url: `${version}/search/search`,
    method: 'get',
    params: data
  })
}

export const creatContrast = (data) => {
  return axios({
    url: `${version}/compare/`,
    method: 'post',
    data: data
  })
}

export const getContrastStatus = (data) => {
  return axios({
    url: `${version}/compare/status/${data}`,
    method: 'get'
  })
}

export const getContrastResult = (data) => {
  return axios({
    url: `${version}/compare/result/${data}`,
    method: 'get'
  })
}

export const submitFeedback = (data) => {
  return axios({
    url: `${version}/compare/compare_review`,
    method: 'post',
    data: data
  })
}

export const downloadContrastResultURL = `${version}/compare/export/`
