import React from 'react';
import { OutlinedInput } from '@mui/material';
import { InputTextProps } from '../../types/components.types';

/**
 * A componet for displaying a InputText with an label
 * @name InputText
 * @component
 * @prop {String} customClass The Optional className to custom any you went
 * @prop {String} errorColor The errorColor color need to show it
 * @prop {String} value the value render inside input
 * @prop {setValue} setValue the setValue to set text writied from user
 *
 */

const InputText: React.FC<InputTextProps | any> = ({
  value,
  inputLabel,
  setValue,
  placeholder,
  ...rest
}) => {
  const sqlKeywords: string[] = [
    'select',
    'add',
    'where',
    'values',
    'drop',
    'table',
    'altertable',
    'delete',
    'from',
    'insert',
    'into',
    'update',
    'view',
    'alter',
    '*',
  ];


  const onChangeText = (text: string): void => {
    // some validations to prevent sql injections
    const flag: boolean = sqlKeywords.includes(text.toLowerCase());

    if (setValue) setValue(flag ? '' : text);
  };

  return (
    <div className="input-warrper">

      {!!inputLabel && (
        <label className="input-style">{inputLabel}</label>
      )}

      <OutlinedInput
        value={!!value ? value : ''}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
        {...rest}
        sx={{
          borderRadius: '4px',
           height: '3.25rem', width: '28.68rem',
          '& .MuiInputBase-input': { paddingLeft: '10px' }
        }}

      />

    </div>
  );
};

export default InputText;
