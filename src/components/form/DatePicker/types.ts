import { Noop } from 'react-hook-form';
import { MobileDatePickerProps } from '@mui/x-date-pickers/MobileDatePicker';
import { SxProps } from '@mui/material';

export type Props<TInputDate, TDate> = Omit<
  MobileDatePickerProps<TInputDate, TDate>,
  'renderInput' | 'onChange' | 'value'
> & {
  onChange?(value: TDate | React.SetStateAction<null>, keyboardInputValue?: string | undefined): void;
  value?: Date | null;
  error?: boolean;
  helperText?: string;
  onBlur?: Noop;
  required?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
  sx?: SxProps;
  disabled?: boolean;
};
