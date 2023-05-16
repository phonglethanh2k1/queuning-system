import React from 'react';
import { Controller } from 'react-hook-form';

import InputLabel from '@mui/material/InputLabel';

import TextFieldMaterial from 'components/form/TextField';
import { Props } from './types';

export * from './types';

const TextField = (props: Props): JSX.Element => {
  const { name, helperText, label, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
        <>
          <InputLabel sx={{ mb: 1 }}>{label}</InputLabel>
          <TextFieldMaterial
            {...others}
            inputRef={ref}
            error={!!error}
            helperText={error?.message ?? helperText}
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        </>
      )}
    />
  );
};

export default TextField;
