/* eslint-disable max-len */
import React from 'react';

import { SvgIcon, SvgIconProps } from '@mui/material';
import CalendarToday from '@material-ui/icons/CalendarToday';

export const Calendar = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 24 24" sx={{ color: 'common.white' }}>
    <path
      d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
      stroke="#FF993C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 10H21" stroke="#FF993C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2V6" stroke="#FF993C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 2V6" stroke="#FF993C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export const CalendarSecondary = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 26.869 26.126">
    <CalendarToday />
  </SvgIcon>
);

export const CalendarFill = (props: SvgIconProps): JSX.Element => (
  <SvgIcon {...props} viewBox="0 0 26.869 26.126">
    <CalendarToday />
  </SvgIcon>
);
