import React, { FC } from 'react';
import { Alert } from '@mui/material';
import { IFormErrorMessageProps } from '../../types/components.types';
import './formErrorMessage.scss';

const FormErrorMessage: FC<IFormErrorMessageProps> = ({ message, type }) => {
  return (
    <div className="FormErrorMessage">
      <Alert severity={type}>{message}</Alert>
    </div>
  );
};

export default FormErrorMessage;
