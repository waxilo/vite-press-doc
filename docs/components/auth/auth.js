import md5 from 'js-md5';

// 全局认证状态管理
export const authState = {
  isAuthenticated: false,
  password: '843a52c298b66f721599c82255972010'
}

export const setAuthenticated = (value) => {
  authState.isAuthenticated = value
}

export const getAuthenticated = () => {
  return authState.isAuthenticated
}

export const checkPassword = (inputPassword) => {
  if (md5(inputPassword) === authState.password) {
    authState.isAuthenticated = true
    return true
  }
  return false
}