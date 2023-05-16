import React, { FC } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material';

interface Props {
  isPurify?: boolean;
  htmlContent: string;
  sx?: SxProps<Theme>;
}

const HtmlParser: FC<Props> = ({ isPurify = true, htmlContent, sx = {} }) => {
  const sanitizedData = (): {
    __html: string;
  } => ({
    __html: isPurify ? DOMPurify.sanitize(htmlContent) : htmlContent,
  });

  return <Box component="div" dangerouslySetInnerHTML={sanitizedData()} sx={{ ...sx }} />;
};

export default HtmlParser;
