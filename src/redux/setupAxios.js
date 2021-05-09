export default function setupAxios(axios, store) {
  axios.defaults.baseURL = 'http://api.otocrm.net/';

  axios.interceptors.request.use(config => {
    config.headers["Content-Type"]="application/json";
      const {
        auth: { authToken }
      } = store.getState();

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken.token}`;
      }

      return config;
    },
    err => Promise.reject(err)
  );
}
