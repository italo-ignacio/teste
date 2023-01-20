import axios from 'axios'

export const Api = axios.create({
  baseURL: 'https://63c587d5f80fabd877eadd51.mockapi.io/api/v1',
})

export default Api
