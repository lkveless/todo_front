import axios from 'axios'

const $host = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:8080/api/'
})

const authInterceptor = config => {
  config.headers.create = localStorage.getItem('user_id')
  config.headers.token = localStorage.getItem('token')
  return config
}
$authHost.interceptors.request.use(authInterceptor)


export{
    $host,
    $authHost
}