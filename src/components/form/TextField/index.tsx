import React from 'react';
import MaterialTextField from '@mui/material/TextField';
import { Props } from './types';

export * from './types';

const TextField = (props: Props): JSX.Element => (
  <MaterialTextField variant="outlined" margin="none" fullWidth {...props} />
);

export default TextField;
