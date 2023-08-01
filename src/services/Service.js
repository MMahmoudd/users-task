/* eslint-disable no-unreachable */
import axios from "axios";
const _axios = axios.create({});

// Add a request interceptor
_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
);
_axios.interceptors.response.use((response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      // window.location = "/";
      console.log('error.response = 401', error.response)
    }
    if (error.response.status === 404) {
      console.log('error.response = 404', error.response)
    }
    if (error.response.status === 403) {
      // window.location = "/";
      console.log('error.response = 403', error.response)
    }
    return error.response;
  }
);

export default _axios;
