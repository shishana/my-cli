
/**
 * code2msg.js
 * msg content config
 * @author bayesba
 */

export const obj = {
}

export function code2msg (error) {
  if (!obj.hasOwnProperty(`${error.code}`)) {
    return `错误码：${error.code}`
  }

  return obj[String(error.code)]
}

export function warningMsg (warning) {
  return ''
}
