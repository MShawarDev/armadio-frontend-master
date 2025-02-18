import Axios from 'axios';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AppConfig } from '../../config/appConfig';
import { reduxStore } from '../../redux/store';
import { env } from 'node:process';

const axiosConfiguration = () => {
  const axiosConfig = {
    baseURL: process.env.REACT_APP_API_ROOT_REST_API,
  };

  const axios = Axios.create(axiosConfig);

  const requestHandler = async (
    request: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig> => {
    if (!axios.defaults.baseURL) {
      axios.defaults.baseURL = process.env.REACT_APP_API_ROOT_REST_API;
      request.baseURL = process.env.REACT_APP_API_ROOT_REST_API;
    }

    const accessToken = reduxStore.getState().Auth.accessToken;

    request.headers = {
      ...(!!accessToken ? { token: `Bearer ${accessToken}` } : {}),
      ...({ 'Content-Type': "application/json" }),
    };
    return request;

  };

  const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };

  axios.interceptors.request.use(
    (request: AxiosRequestConfig) => requestHandler(request),
    (error: AxiosError) => Promise.reject(error),
  );

  axios.interceptors.response.use(
    (response: AxiosResponse) => Promise.resolve(response),
    (error: AxiosError) => onResponseError(error),
  );

  return axios;
};

export default axiosConfiguration;
