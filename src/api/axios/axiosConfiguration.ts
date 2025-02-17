import Axios from 'axios';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { AppConfig } from '../../config/appConfig';
import { reduxStore } from '../../redux/store';

const axiosConfiguration = () => {
  const axiosConfig = {
    baseURL: "https://localhost:7181/api/",
  };

  const axios = Axios.create(axiosConfig);

  const requestHandler = async (
    request: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig> => {
    if (!axios.defaults.baseURL) {
      axios.defaults.baseURL = "https://localhost:7181/api/";
      request.baseURL = "https://localhost:7181/api/";
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
