/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';

// third-party
import DOMPurify from 'isomorphic-dompurify';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html';

// project imports
import HtmlParser from './HtmlParser';

const path = 'components.TruncateMarkup';

export const useMessages = (): {
  readMore: string;
  readLess: string;
} => {
  const { t } = useTranslation();

  return {
    readMore: t(`${path}.read_more`),
    readLess: t(`${path}.read_less`),
  };
};

interface Props {
  lines?: number;
  content: string;
  noMore?: boolean;
  onReflow?(value: boolean): void;
}

const getDefaultLine = (matchUp: boolean): number => (matchUp ? 4 : 6);

const TruncateMarkup: FC<Props> = ({ content, lines = 4, noMore = false, onReflow }) => {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const [shouldTruncated, setShouldTruncated] = useState(true);
  const [isClamped, setIsClamped] = useState(false);

  const maxLine = lines ?? getDefaultLine(matchUpSm);
  const sanitizedContent = (): string => DOMPurify.sanitize(content);

  const handleReflow = ({ clamped }: { clamped: boolean; text: string }): void => {
    setIsClamped(clamped);
  };

  const toggleTruncate = (): void => {
    setShouldTruncated((prevValue) => !prevValue);
    // eslint-disable-next-line no-unused-expressions
    onReflow && onReflow(shouldTruncated);
  };

  const toggleLink = (
    <span>
      <Link underline="none" component="button" onClick={toggleTruncate}>
        {shouldTruncated ? 'Read more' : 'Read less'}
      </Link>
    </span>
  );

  const shortContent = (
    <div>
      <HTMLEllipsis
        unsafeHTML={sanitizedContent()}
        maxLine={maxLine}
        ellipsis="..."
        basedOn="words"
        onReflow={handleReflow}
      />
      {isClamped && !noMore && toggleLink}
    </div>
  );

  const fullContent = (
    <div>
      <HtmlParser htmlContent={content} />
      {isClamped && !noMore && toggleLink}
    </div>
  );

  return shouldTruncated ? shortContent : fullContent;
};

export default TruncateMarkup;
