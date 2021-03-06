import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use((config) => {
  if (!config.headers.authorization) {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = `bearer ${token}`
    }
  }
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {},
)

export default axiosClient
