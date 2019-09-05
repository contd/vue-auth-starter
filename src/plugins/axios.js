import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
const config = {
  baseURL: 'http://localhost:3001',
  responseType: 'json',
  responseEncoding: 'utf8',
  headers: {
    'Content-Type': 'application/json'
  }
}

const $axios = axios.create(config)

export default $axios