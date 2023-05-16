import React, { FC } from 'react';

import { Box, SxProps, Theme } from '@mui/material';
import { Images } from 'constants/images';

const images = {
  'app-store-badge': Images.APP_STORE,
  'google-play-badge': Images.GOOGLE_PLAY_STORE,
};

export type ImageTypes = keyof typeof images;

type Props = {
  name: ImageTypes;
  width?: string | number;
  height?: string | number;
  sx?: SxProps<Theme>;
  fill?: string;
};

export const Image: FC<Props> = (props) => {
  const { name, ...others } = props;
  return <Box component="img" {...others} src={images[name]} />;
};
