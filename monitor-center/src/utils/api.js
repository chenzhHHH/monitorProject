import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'prod' ? process.env.VUE_APP_API_BASE_URL_PROD : process.env.VUE_APP_API_BASE_URL_DEV, // 根据实际情况配置基础URL
    timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
    config => {
        // 可能需要添加的请求头
        // config.headers['Authorization'] = 'Bearer ' + getToken(); // 如果需要认证
        // config.headers['Custom-Header'] = 'CustomValue'; // 自定义请求头

        // 可以在这里添加请求头等操作
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default {
  get(url, params = {}) {
    return instance.get(url, { params });
  },
  post(url, data = {}) {
    return instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  postForm(url, data = {}) {
    return instance.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        let ret = '';
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        return ret;
      }]
    });
  },
  postFile(url, formData) {
    return instance.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  put(url, data = {}) {
    return instance.put(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
  },
  delete(url, params = {}) {
    return instance.delete(url, { params });
  },
};