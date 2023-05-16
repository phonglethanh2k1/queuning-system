import { formatDistanceToNow, differenceInDays, format } from 'date-fns';

export const DATE_TIME_FORMAT = 'dd/MM/y HH:mm a';
export const DATE_TIME_FORMAT_LAST_ACTIVITY = 'MMM dd, y hh:mm a';
export const DATE_TIME_FORMAT_FIELD = 'MM/dd/yyyy';
export const DATE_FIELD_FORMAT = 'yyyy-MM-dd';
export const DATE_FORMAT = 'MMM dd, yyyy';

export const formatDiffFromNow = (value: string): string => {
  if (!value) {
    return '';
  }

  const date = new Date(value);

  if (differenceInDays(new Date(), date) > 1) {
    return format(date, DATE_TIME_FORMAT);
  }

  return formatDistanceToNow(date);
};

// eslint-disable-next-line max-len
export const formatUTCToLocalDate = (value: string, formatValue: string = DATE_TIME_FORMAT_LAST_ACTIVITY): string => {
  const date = new Date(value);

  return format(date, formatValue);
};
