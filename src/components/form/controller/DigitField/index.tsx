import React from 'react';
import { Controller } from 'react-hook-form';

import InputLabel from '@mui/material/InputLabel';

import Digit from 'components/form/Digit';
import { Props } from './types';
import FormHelperText from '../../FormHelperText';

export * from './types';

const DigitField = (props: Props): JSX.Element => {
  const { name, label, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          {label && <InputLabel sx={{ mb: 1 }}>{label}</InputLabel>}
          <Digit {...others} onChange={onChange} value={value} />
          <FormHelperText error={!!error}>{error?.message ?? helperText}</FormHelperText>
        </>
      )}
    />
  );
};

export default DigitField;
