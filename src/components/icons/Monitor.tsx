/* eslint-disable max-len */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';

type Props = {
  stroke?: string;
} & SvgIconProps;
export const Monitor = (props: Props): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 20 20">
    <path
      d="M5.36666 1.66699H14.625C17.5917 1.66699 18.3333 2.40866 18.3333 5.36699V10.642C18.3333 13.6087 17.5917 14.342 14.6333 14.342H5.36666C2.40833 14.3503 1.66666 13.6087 1.66666 10.6503V5.36699C1.66666 2.40866 2.40833 1.66699 5.36666 1.66699Z"
      stroke={props?.stroke || '#A9A9B0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M10 14.3496V18.3329"
      stroke={props?.stroke || '#A9A9B0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M1.66666 10.833H18.3333"
      stroke={props?.stroke || '#A9A9B0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M6.25 18.333H13.75"
      stroke={props?.stroke || '#A9A9B0'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);
