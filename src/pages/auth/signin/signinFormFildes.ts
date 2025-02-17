import { IFormBuildersFildes } from "../../../types/components.types";
import Email from '../../../assest/login/email.svg'

export const signinPasswordFormFildes = (): IFormBuildersFildes[] => {
  return [
    {
      fildeType: 'textInput',
      inputProps: {
        autoComplete: 'username',
        icon: Email,
        placeholder: 'Email',
        name: 'username',
        type: 'email',
        'aria-label': 'Email',
      },
      validateFiled: {
        required: {
          value: true,
          message: ``,
        },
      },
    },
    {
      fildeType: 'password',
      inputProps: {
        autoComplete: 'current-password',
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        'aria-label': 'Password',
      },
      validateFiled: {
        required: {
          value: true,
          message: ``,
        },
      },
    },
  ];
};
