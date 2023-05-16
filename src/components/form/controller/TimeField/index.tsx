import React from 'react';
import { Controller } from 'react-hook-form';
import TimePicker from 'components/form/TimePicker';

import InputLabel from '@mui/material/InputLabel';
import { Box } from '@mui/material';
import { Props } from './types';
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unnecessary-type-constraint
const TimeField = <E extends unknown, T extends unknown>(props: Props<E, T>) => {
  const { name, helperText, label, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur, ref }, fieldState: { invalid, error } }) => (
        <Box>
          <TimePicker
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

export default TimeField;
