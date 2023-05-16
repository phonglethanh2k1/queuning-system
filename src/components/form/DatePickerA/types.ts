import { Noop } from 'react-hook-form';
import { MobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker';
import { SxProps } from '@mui/material';
import { DateRange } from '@mui/x-date-pickers-pro/internal/models';
import { Dayjs } from 'dayjs';

export type Props<TInputDate, TDate> = Omit<
  MobileDatePickerProps<TInputDate, TDate>,
  'renderInput' | 'onChange' | 'value'
> & {
  onChange?(value: DateRange<any> | null, keyboardInputValue?: string | undefined): void;
  value: DateRange<any>;
  error?: boolean;
  helperText?: string;
  onBlur?: Noop;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  sx?: SxProps;
  disabled?: boolean;
  defaultValue: Dayjs;
};
