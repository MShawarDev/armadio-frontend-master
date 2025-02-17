import React from 'react';
import { InputProps } from '@mui/material';
import { FieldValues, SubmitHandler, RegisterOptions } from 'react-hook-form';
import { AlertErrorCodeType, HtmlInputType, InputTypeEnumType } from '../enumerate/components';
import { ButtonProps } from '@mui/material/Button/Button';



export interface InputTextProps extends InputProps {
  inputLabel?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;

}

export interface SocialButtonsProps {
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
}

export interface IFormErrorMessageProps {
  message: string | undefined;
  type: AlertErrorCodeType;
}

export interface IArmadioVirtualeFormProps {
  inputLoading: boolean;
  inputProps: InputProps;
  schemaname: string;
  fildePlaceholder: string;
  inputType: HtmlInputType;
  value: any;
  isDisabled: boolean;
  isError: boolean;
  errorMessage: string;
  props: any;
  endAdornment?: React.ReactNode;

}

export interface IButtonProps extends ButtonProps {
  icon?: React.ReactNode | any;
  buttonTitle: string;
  loading?: boolean;
  customClass?: string;
}

export type IValidateFileds = RegisterOptions & {
  ValidateType?: AlertErrorCodeType;
};

export interface IFormBuildersFildes {
  inputProps?: InputProps | any;
  fildeType: keyof typeof InputTypeEnumType;
  validateFiled?: IValidateFileds;
  inputLoading?: boolean;
  value?: any;

  withPasswordHint?: boolean;
  checkPasswordIsValidHandler?: (value: boolean) => void;
}

export interface IFormProps<T extends FieldValues = any> {
  inputs: IFormBuildersFildes[];
  onSubmit: SubmitHandler<T>;
  withCheckbox?: boolean;
  withButton?: boolean;
  buttonProps?: IButtonProps;
  customFieldsClass?: string;
  renderJsxElement?: () => React.ReactNode;
}
export interface StrengthIndicator {
  label: string;
  hint: string;
  count: number;
  color: string;
}