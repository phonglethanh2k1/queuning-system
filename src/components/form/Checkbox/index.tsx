import { Checkbox as MaterialCheckbox, FormControl, FormControlLabel } from '@mui/material';
import React from 'react';
import { Props } from './types';
import FormHelperText from '../FormHelperText';

export * from './types';

const Checkbox = (props: Props): JSX.Element => {
  const { label, checked, onChange, onBlur, error, helperText, ...others } = props;

  return (
    <FormControl error={!!error}>
      <FormControlLabel
        control={<MaterialCheckbox checked={checked} {...others} color="primary" />}
        label={label || ''}
        onChange={onChange}
        onBlur={onBlur}
      />
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Checkbox;
