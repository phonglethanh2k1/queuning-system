/* eslint-disable max-len */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

export const FillLeft = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 8 10" sx={{ fontSize: '13px' }}>
    <path
      d="M7.3642 10C7.24552 10 7.12854 9.96609 7.02511 9.90002L0.297552 5.5521C0.112748 5.43212 -2.28363e-07 5.22433 -2.18558e-07 5.00002C-2.08753e-07 4.77572 0.112748 4.56793 0.297552 4.44795L7.02511 0.100029C7.22094 -0.0260359 7.46848 -0.0338606 7.67108 0.0817709C7.87454 0.196533 8 0.414755 8 0.652104L8 9.34794C8 9.58529 7.87454 9.80351 7.67108 9.91828C7.57529 9.97305 7.46932 10 7.3642 10Z"
      fill="#A5A8B1"
    />
  </SvgIcon>
);
