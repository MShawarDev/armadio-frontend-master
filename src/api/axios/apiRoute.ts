import axiosConfiguration from './axiosConfiguration';
import { AxiosResponse } from 'axios';
import { IGetEntityResponse, IGetRegistrationFormResponse, ILoginRequestPaylod, ILoginResponse, IRegisterRequestPaylod } from '../../types/api/api.types';


const axios = axiosConfiguration();


export const authRoute = {
  Login: (data: ILoginRequestPaylod): Promise<AxiosResponse<ILoginResponse>> =>
    axios.post('Users/login', data),
  Register: (data: IRegisterRequestPaylod): Promise<AxiosResponse<ILoginResponse | any>> =>
    axios.post('Users/Register', data),
  ForgetPassword: (data: IRegisterRequestPaylod): Promise<AxiosResponse<any>> =>
    axios.post('Users/ForgetPassword', data),

};

export const userRoute = {
  GetEntity: (): Promise<AxiosResponse<IGetEntityResponse>> => axios.get('Entity/GetEntity'),
  GetRegistrationForm: (id: string): Promise<AxiosResponse<IGetRegistrationFormResponse>> => axios.get('Registration/GetRegistrationForm?entityID=' + id),
};
