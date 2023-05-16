import React from 'react';
import { Backdrop as MuiBackdrop } from '@mui/material';
import Spinner from '../Spinner';

export interface Props {
  isShow: boolean;
}

const Backdrop = (props: Props): JSX.Element | null => {
  // eslint-disable-next-line react/destructuring-assignment
  if (!props.isShow) {
    return null;
  }

  return (
    <MuiBackdrop sx={{ color: 'common.white', zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <Spinner />
    </MuiBackdrop>
  );
};

export default Backdrop;
