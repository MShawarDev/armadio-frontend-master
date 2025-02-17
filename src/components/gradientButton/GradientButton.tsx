// GradientButton.tsx
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const GradientButton = styled(Button)`
  background: linear-gradient(100deg, #261A1A 20%, #667085 90%);
  border: 1px solid #FFFFFF57;
  border-radius: 4px;
  color: #fff;
  height: 54px;
  padding: 0 30px;
  box-shadow: 0px 3px 6px #00000029;
`;

export default GradientButton;
