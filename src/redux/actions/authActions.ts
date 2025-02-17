import { AuthActionsType } from '../../types/redux/actions.enums';

export const AuthActions = {
  FILL_TOKEN: AuthActionsType.FILL_TOKEN,
  REMOVE_AUTH_USER_DATA: AuthActionsType.REMOVE_AUTH_USER_DATA,
  SET_CREDINTIALS: AuthActionsType.SET_CREDINTIALS,
};

export const setAuthToken = (
  accessToken: string | undefined,
) => {
  console.log('accessToken', accessToken)
  return {
    type: AuthActions.FILL_TOKEN,
    payload: {
      accessToken: accessToken,
    },
  };
};

export const removeUserCredential = (payload: string) => {
  return {
    type: AuthActions.REMOVE_AUTH_USER_DATA,
    payload: payload,
  };
};

export const setUserCredential = (payload: {
  fullName?: string | undefined;
  password?: string | undefined;
  email?: string | undefined;
  userRole?: string | undefined;
}) => {
  return {
    type: AuthActions.SET_CREDINTIALS,
    payload: {
      fullName: payload.fullName,
      password: payload.password,
      email: payload.email,
      userRole: payload.userRole,
    },
  };
};

