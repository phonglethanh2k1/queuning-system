/* eslint-disable max-len */
// material-ui
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';

export const Close = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 26.869 26.126">
    <CloseIcon />
  </SvgIcon>
);
