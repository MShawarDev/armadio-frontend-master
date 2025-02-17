import { AuthActionsType } from "../../types/redux/actions.enums";
import { IAuthActionsType } from "../../types/redux/actions.types";


interface IinitialStateAuth {
  accessToken?: string | undefined;
  fullName?: string | undefined;
  password?: string | undefined;
  email?: string | undefined;
  userRole?: string | undefined;
}

const initialState: IinitialStateAuth = {
  accessToken: '',
  fullName: '',
  password: '',
  email: '',
  userRole: '',
};

const authReducer = (
  State: IinitialStateAuth = initialState,
  action: IAuthActionsType | any | undefined,
) => {
  switch (action.type) {
    case AuthActionsType.FILL_TOKEN:
      return {
        ...State,
        accessToken: action.payload.accessToken,
      };

    case AuthActionsType.SET_CREDINTIALS: {
      return {
        ...State,
        fullName: action.payload.fullName,
        password: action.payload.password,
        email: action.payload.email,
        userRole: action.payload.userRole,
      };
    }


    case AuthActionsType.REMOVE_AUTH_USER_DATA: {
      return {
        ...State,
        accessToken: '',
        fullName: '',
        password: '',
        email: '',
        userRole: '',
      };
    }

    default:
      return State;
  }
};

export default authReducer;
