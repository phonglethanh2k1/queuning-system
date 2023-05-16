import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

import { DATE_FORMAT } from 'constants/date';
import { InputAdornment } from '@mui/material';
import { Icon } from 'components/icons';
import TextField from '../TextField';
import { Props } from './types';

export * from './types';

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unnecessary-type-constraint
const DatePicker = <TInputDate extends unknown, TDate extends unknown>(props: Props<TInputDate, TDate>) => {
  const { value, helperText, error, required, placeholder, onChange = () => {}, disabled = false } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        inputFormat={DATE_FORMAT}
        value={value}
        disabled={disabled}
        onChange={onChange}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant="outlined"
            error={error}
            helperText={helperText}
            required={required}
            placeholder={placeholder}
            onChange={onChange}
            // eslint-disable-next-line react/destructuring-assignment
            sx={{
              // eslint-disable-next-line react/destructuring-assignment
              ...props?.sx,
              '.MuiInputBase': {
                borderRadius: '5px',
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Icon name="calendar" />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
