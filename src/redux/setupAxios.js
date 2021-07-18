export default function setupAxios(axios, store) {
  //axios.defaults.baseURL = 'http://api.otocrm.net/';
    axios.defaults.baseURL = process.env[`REACT_APP_API_${process.env.NODE_ENV.toUpperCase()}_URL`];
  axios.interceptors.request.use(config => {
    config.headers["Content-Type"]=config.headers["Content-Type"]==""?"application/json;charset=utf-8":config.headers["Content-Type"];
      const {
        auth: { authToken }
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken.token||authToken}`;
      }

      return config;
    },
    err => Promise.reject(err)
  );
}
