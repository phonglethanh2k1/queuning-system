import { FormControlLabelProps } from '@mui/material';
import { Props as CheckboxProps } from 'components/form/Checkbox';

export type Props = CheckboxProps &
  Pick<FormControlLabelProps, 'onChange' | 'onBlur'> & {
    name: string;
  };
