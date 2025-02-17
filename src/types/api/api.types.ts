
export interface IAuthToken {
  newToken?: string;
  isVaild: boolean;
  refreshToken?: string;
  expired?: string | undefined;
}

export interface IAuthTokenProp {
  token: string;
  expired: number;
  refreshToken: string;
}

export interface ICreateNewPasswordRequset {
  emailOrUserName?: string | any;
  password: string;
  token?: string | any;
}
export interface DeviceInfo {
  Id: number
  UserID: number
  AppVersion: string
  MacAddress: string
  BrowserType: string
  PlayerId: string
  IPAddress: string
  Status: string
  ModifiedOn: string
}
export interface ILoginDataResponse {
  Id: number
  FullName: string
  Email: string
  Password: string
  UserRole: string
  Status: string
  AccessToken: string
  UserUniqueID: string
  DeviceInfo: DeviceInfo
}

export interface ILoginResponse {
  HttpStatusCode: number;
  ResponseMessage: string;
  Data: ILoginDataResponse;
}
export interface IGetEntityResponse {
  HttpStatusCode: number
  ResponseMessage: string
  data: Entities[];
}
export interface IGetRegistrationFormResponse {
  HttpStatusCode: number
  ResponseMessage: string
  data: Data
}
export interface Data {
  entityID: number
  entityName: string
  pageTitle: string
  tabsResponses: TabsResponse[]
}
export interface TabsResponse {
  title: string
  tabID: number
  fields: Field[]
}

export interface Field {
  fieldType: string
  fieldTagID: string
  inputProps: InputProps
  validateFiled: ValidateFiled
  dropDownList: DropDownList[]
  value?: string
}
export interface InputProps {
  name: string
  type: string
  placeholder: string
  ariaLabel: string
}
export interface ValidateFiled {
  ValidateType?: string
  requiredField: Required
  disabled?: boolean
}
export interface Required {
  value: boolean
  message: string
}

export interface DropDownList {
  label: string
  value: number
  fieldTagID: string
}

export interface Entities {
  entityName: string
  entityCode: string
  id: number
  status: string
  modifiedOn: string
}

export interface ILoginDeviceInfoPaylod {
  appVersion: string
  deviceId: string
  deviceManufacture: string
  deviceOs: string
  playerId: string
  osVersion: string
  deviceModel: string
}

export interface ILoginRequestPaylod {
  emailOrPhoneNumber: string;
  password: string;
  deviceInfo?: ILoginDeviceInfoPaylod
}
export interface IRegisterRequestPaylod {
  fullName?: string;
  email: string;
  password: string;
}

export interface ICreateWebUserPayload {
  contactId: string;
  userName: string;
  email: string;
  password: string;
}
