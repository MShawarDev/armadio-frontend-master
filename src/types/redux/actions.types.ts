
import { AuthActionsType } from './actions.enums';
import { IMembershipInfo, ManagePeopleVariables } from './redux.types';

export interface UserAuthPayload {
  accessToken: string;
}


export interface IAuthActions {
  type: AuthActionsType.FILL_TOKEN;
  payload: UserAuthPayload;
}

export interface IRemoveUserCredential {
  type: AuthActionsType.REMOVE_AUTH_USER_DATA;
  payload: string;
}

export interface IFillAuthPayload {
  type: AuthActionsType.FILL_TOKEN;
  payload: {
    accessToken: string | undefined;
  };
}

export interface ISetCredintialsPayload {
  type: AuthActionsType.SET_CREDINTIALS;
  payload: {
    fullName?: string | undefined;
    password?: string | undefined;
    email?: string | undefined;
    userRole?: string | undefined;
  };
}

export interface IRemoveAuthPaylod {
  type: AuthActionsType.REMOVE_AUTH_USER_DATA;
  payload: string;
}





export type Action =
  | IAuthActions

export type IAuthActionsType =
  | IFillAuthPayload
  | IRemoveAuthPaylod
  | ISetCredintialsPayload
