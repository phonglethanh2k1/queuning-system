import React from 'react';
import { TextFieldProps } from '@mui/material';
import TextField from '../TextField';

export * from './types';

const EmailField = (props: TextFieldProps): JSX.Element => (
  <TextField id="email" name="email" autoComplete="email" {...props} />
);

export default EmailField;
