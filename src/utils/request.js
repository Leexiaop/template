import axios from 'axios';

const request = axios.create({
    xsrfCookieName: 'xsrf-token',
    timeout: 2 * 60 * 1000
});
request.defaults.withCredentials = true;
request.interceptors.request.use(config => {
    if (config.url.indexOf('http') > -1) {
        config.baseURL = '';
    }
    return config;
}, error => {
    return Promise.reject(error);
});

request.interceptors.response.use(response => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default request;
