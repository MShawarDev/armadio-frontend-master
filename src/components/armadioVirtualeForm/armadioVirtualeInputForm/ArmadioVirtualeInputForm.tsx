import { Fragment, forwardRef } from 'react';
import { Box, OutlinedInput, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { IArmadioVirtualeFormProps } from '../../../types/components.types';
import { FormErrorMessage } from '../../formErrorMessage';


const ArmadioVirtualeInputForm = forwardRef<HTMLInputElement, IArmadioVirtualeFormProps | any>(
  (
    {
      inputLoading,
      inputProps,
      schemaname,
      fildePlaceholder,
      inputType,
      errorMessage,
      value,
      isError,
      isDisabled,
      endAdornment,
      startAdornment,
      label,
      ...props
    },
    ref,
  ) => {
    return (
      <Box display='flex' flexDirection='column' ml='1rem' mb='1rem'>
        {label && <Typography color='#98A2B3'>{label}</Typography>}
        {inputLoading ? (
          <Skeleton
            variant="rectangular"
            sx={{ borderRadius: '5px' }}
            width={'100%'}
            height={30}
          />
        ) : (
          <OutlinedInput
            fullWidth
            defaultValue={!!value ? value : ''}
            disabled={isDisabled}
            error={isError}
            type={inputType}
            name={schemaname}
            inputRef={ref}
            placeholder={fildePlaceholder}
            endAdornment={endAdornment}
            startAdornment={startAdornment}
            {...props.props}
            {...(typeof inputProps !== 'undefined' ? { ...inputProps } : {})}
            sx={{
              mt: '10px',
              borderRadius: '4px', height: '3.25rem', width: '20rem', border: "1px solid #D0D5DD", color: '#D0D5DD',
              '& .MuiInputBase-input': { paddingLeft: '10px', }
            }}
          />
        )}
        {isError && <FormErrorMessage message={errorMessage} type={'error'} />}
      </Box>
    );
  },
);

export default ArmadioVirtualeInputForm;
