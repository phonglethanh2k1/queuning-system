import { CheckboxProps, FormControlLabelProps } from '@mui/material';

export type Props = CheckboxProps &
  Pick<FormControlLabelProps, 'onChange' | 'onBlur'> & {
    label?: React.ReactNode;
    error?: boolean;
    helperText?: React.ReactNode;
  };
