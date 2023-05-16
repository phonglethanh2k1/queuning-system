import { Props as DatePickerProps } from 'components/form/DatePicker/types';

export type Props<TInputDate, TDate> = DatePickerProps<TInputDate, TDate> & {
  name: string;
};
