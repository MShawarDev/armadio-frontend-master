import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, TextField, TextareaAutosize, Button, Autocomplete, Typography } from '@mui/material';
import { Field } from '../../types/api/api.types';
import { HtmlInputType, InputTypeEnumType } from '../../enumerate/components';
import ArmadioVirtualeInputForm from './armadioVirtualeInputForm/ArmadioVirtualeInputForm';
import { FormErrorMessage } from '../formErrorMessage';

interface ArmadioVirtualeFormProps {
  fields: Field[];
  onSubmit: (data: any) => void;
  id?: string;
  loading?: boolean
}

const ArmadioVirtualeForm: React.FC<ArmadioVirtualeFormProps> = ({ fields, onSubmit, id, loading }) => {
  const { register, setValue, handleSubmit, control, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} id={`form-step-${id}`} style={{ flexDirection: 'row', display: 'flex' }}>
      {fields?.map((item, idx) => {
        const { ref } = register(`${id}-${idx}-${item.inputProps.name!}`, {
          ...item?.validateFiled,
        });

        return (
          <Fragment key={`${id}-${idx}-${item.inputProps.name}`}>
            {item?.inputProps?.name ? (
              <Controller
                name={`${id}-${idx}-${item.inputProps.name}`}
                control={control}
                defaultValue=""
                rules={
                  item.validateFiled?.requiredField && {
                    required: {
                      value: item.validateFiled.requiredField.value,
                      message: item.validateFiled.requiredField.message,
                    },
                  }
                }
                render={({ field, fieldState: { error } }) => (
                  <Box mb={2}>
                    {item.fieldType === InputTypeEnumType.textInput && (
                      <ArmadioVirtualeInputForm
                        {...field}
                        inputProps={field}
                        ref={ref}
                        inputLoading={loading}
                        isDisabled={!!item.validateFiled?.disabled}
                        fildePlaceholder={item.inputProps.placeholder || ''}
                        schemaname={item.inputProps.name}
                        inputType={item.inputProps.type as HtmlInputType}
                        isError={!!error}
                        errorMessage={error ? error.message : ''}
                        label={item.inputProps?.ariaLabel}
                      />
                    )}
                    {item.fieldType === InputTypeEnumType.dropDown && (

                      <Autocomplete
                        {...field}
                        id={item.inputProps.name}
                        freeSolo
                        getOptionLabel={(option: any) => typeof option === 'string' ? option : option.label}
                        isOptionEqualToValue={(option: any, value: any) => option.value === value.value}
                        onChange={(event, value) => {
                          setValue(`${id}-${idx}-${item.inputProps.name}`, value);
                          field.onChange(value);
                        }}
                        sx={{ color: '#D0D5DD !important', }}
                        disabled={item?.validateFiled?.disabled}
                        options={item?.dropDownList ? item?.dropDownList.map(listItem => listItem.label) : []}
                        renderInput={(params) => (
                          <Box display='flex' flexDirection='column' ml='1rem' mb='1rem'>
                            <Typography color='#98A2B3'>{item?.inputProps?.ariaLabel}</Typography>
                            <TextField
                              {...params}
                              placeholder={item?.inputProps?.placeholder}
                              sx={{
                                mt: '10px',
                                borderRadius: '4px', height: '3.25rem', width: '20rem', border: "1px solid #D0D5DD", color: '#D0D5DD !important',
                                '& .MuiInputBase-input': { paddingLeft: '10px', color: '#D0D5DD !important' }
                              }}
                            />
                            {!!error?.message && (
                              <FormErrorMessage
                                message={error?.message.toString() || ''}
                                type={'error'}
                              />
                            )}
                          </Box>
                        )}
                      />
                    )}

                    {item.fieldType === InputTypeEnumType.textarea && (
                      <Box display='flex' flexDirection='column' ml='1rem' mb='1rem'>
                        <Typography color='#98A2B3'>{item?.inputProps?.ariaLabel}</Typography>
                        <TextareaAutosize
                          {...field}
                          minRows={1.8}
                          placeholder={item.inputProps.placeholder}
                          aria-label={item.inputProps?.ariaLabel}
                          style={{
                            marginTop: '10px', padding: '10px', backgroundColor: 'transparent',
                            borderRadius: '4px', width: '18.5rem', border: "1px solid #D0D5DD", color: '#D0D5DD',

                          }}
                        />
                        {!!error?.message && (
                          <FormErrorMessage
                            message={error?.message.toString() || ''}
                            type={'error'}
                          />
                        )}
                      </Box>
                    )}
                  </Box>
                )
                }
              />
            ) : (
              <div style={{ color: 'red' }}>Field name is missing</div>
            )}
          </Fragment>
        );
      })}

      <Button type="submit" style={{ display: 'none' }}>Submit</Button>
    </form >
  );
};

export default ArmadioVirtualeForm;
