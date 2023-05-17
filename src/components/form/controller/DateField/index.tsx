import React from 'react';
import { Controller } from 'react-hook-form';
import DatePicker from 'components/form/DatePicker';

import InputLabel from '@mui/material/InputLabel';
import { Box } from '@mui/material';
import { Props } from './types';
const DateField = <E extends unknown, T extends unknown>(props: Props<E, T>) => {
  const { name, helperText, label, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => (
        <Box>
          <InputLabel sx={{ mb: 1 }}>{label}</InputLabel>
          <DatePicker
            {...others}
            inputRef={ref}
            error={invalid}
            helperText={invalid ? error?.message || '' : helperText}
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
          />
        </Box>
      )}
    />
  );
};

export default DateField;
