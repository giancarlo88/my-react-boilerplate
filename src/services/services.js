import axios from 'axios'

export const get = options => {
  return axios({
    method: 'GET',
    ...options
  })
    .then(response => Promise.resolve(response))
    .catch(err => Promise.reject(err))
}
