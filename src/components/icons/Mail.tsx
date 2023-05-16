/* eslint-disable max-len */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

export const Mail = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <g opacity="0.8">
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke="#1E0D03"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 6L12 13L2 6" stroke="#1E0D03" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </SvgIcon>
);
