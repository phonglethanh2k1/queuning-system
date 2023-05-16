/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatString = (value: string, variables: any): string => {
  if (!value) {
    return '';
  }

  return value.replace(/(\{\w+\})|(:\w+)/g, (match: any) =>
    encodeURIComponent(variables[match.replace(/\{|\}|:/g, '')] || '')
  );
};

export const formatCash = (str: number, prefix = 'đ') => {
  const value = `${str}`;
  if (!value) {
    return '0';
  }

  return (
    value
      .split('')
      .reverse()
      .reduce((prev, next, index) => (index % 3 ? next : `${next},`) + prev) + prefix
  );
};
