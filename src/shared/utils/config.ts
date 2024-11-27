import axios, {AxiosInstance} from 'axios';
import {BASE_URL} from './endpoints';
import {store} from '../redux/store';
import { AuthToken } from './constants';

const HTTP_CLIENT: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const initialConfig = () => {
  console.log("AuthToken",AuthToken)
  setupAxios();
};

const setupAxios = () => {
  HTTP_CLIENT.interceptors.request.use(
    (config: any) => {
      config.headers.Authorization = `Bearer ${AuthToken}`;
      return config;
    },
    (err: any) => {
      return Promise.reject(err);
    },
  );
  HTTP_CLIENT.interceptors.response.use(
    sucs => {
      return sucs;
    },
    err => {
      if (err?.response?.status === 401 || err?.status === 401) {
        let {user} = store.getState().root?.user;
        if (user) {
        }
      }
      throw err;
    },
  );
};

export {HTTP_CLIENT, setupAxios, initialConfig};
