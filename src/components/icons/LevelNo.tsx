/* eslint-disable max-len */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

type Props = {
  stroke?: string;
} & SvgIconProps;

export const LevelNo = (props: Props): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 20 20">
    <g clipPath="url(#clip0_69142_2706)">
      <path
        d="M1.66666 14.167L10 18.3337L18.3333 14.167"
        stroke={props?.stroke || '#A9A9B0'}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M1.66666 10L10 14.1667L18.3333 10"
        stroke={props?.stroke || '#A9A9B0'}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 1.66699L1.66666 5.83366L10 10.0003L18.3333 5.83366L10 1.66699Z"
        stroke={props?.stroke || '#A9A9B0'}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>
    <defs>
      <clipPath id="clip0_69142_2706">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);
