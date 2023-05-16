import React from 'react';
import { Props as CheckBoxProps } from '../Checkbox';

export type Props<E> = {
  value: (string | number)[];
  options: E[] | (() => Promise<E[]>);
  getItemLabel?: (e: E, checked: boolean) => React.ReactNode;
  getItemValue?: (e: E) => string | number;
  onChange?: (checkedItems: (string | number)[]) => void;
  onBlur?: CheckBoxProps['onBlur'];
  error?: boolean;
  helperText?: React.ReactNode;
  label?: string;
  row?: boolean;
};
