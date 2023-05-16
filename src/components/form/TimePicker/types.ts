/* eslint-disable @typescript-eslint/no-explicit-any */
import { Noop } from 'react-hook-form';
import { MobileTimePickerProps } from '@mui/x-date-pickers/MobileTimePicker';
import { SxProps } from '@mui/material';

export type Props<TInputDate, TDate> = Omit<
  MobileTimePickerProps<TInputDate, TDate>,
  'renderInput' | 'onChange' | 'value'
> & {
  onChange?(value: any, keyboardInputValue?: string | undefined): void;
  value?: any | null;
  error?: boolean;
  helperText?: string;
  onBlur?: Noop;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  sx?: SxProps;
  disabled?: boolean;
};
