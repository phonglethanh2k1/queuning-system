import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { InputAdornment } from '@mui/material';
import { Icon } from 'components/icons';
import TextField from '../TextField';
import { Props } from './types';

const TimePicker = <E extends unknown, T extends unknown>(props: Props<E, T>) => {
  const { onChange = () => {} } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileTimePicker
        {...props}
        value={props?.value || new Date()}
        onChange={onChange}
        renderInput={(propsRest) => (
          <TextField
            placeholder="hh:mm:ss"
            {...propsRest}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Icon name="clock" />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
