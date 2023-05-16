/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { FormControl, FormGroup, FormLabel } from '@mui/material';

import CheckBox from '../Checkbox';
import FormHelperText from '../FormHelperText';
import { Props } from './types';

export * from './types';

const getItemDefault = (item: any): any => `${item}`;

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unnecessary-type-constraint
const CheckboxGroup = <E extends unknown = string | number>(props: Props<E>) => {
  const {
    value,
    options,
    getItemValue = getItemDefault,
    getItemLabel = getItemDefault,
    onChange,
    onBlur,
    error,
    helperText,
    label,
    row,
  } = props;

  const [itemList, setItemList] = useState<E[]>(() => (Array.isArray(options) ? options : []));

  const onCheck = (itemValue: string | number): void => {
    onChange?.([...value, itemValue]);
  };

  const onUncheck = (itemValue: string | number): void => {
    onChange?.(value.filter((i) => i !== itemValue));
  };

  useEffect(() => {
    if (!Array.isArray(options)) {
      options().then(setItemList);
    }
  }, [options]);

  return (
    <FormControl>
      <FormLabel sx={{ mx: '4px', my: 1 }}>{label}</FormLabel>

      <FormGroup row={row}>
        {itemList.map((item) => {
          const itemValue = getItemValue(item);
          const checked = value?.includes(itemValue);

          return (
            <CheckBox
              key={itemValue}
              label={`${getItemLabel(item, checked)}`}
              checked={checked}
              onChange={() => (!checked ? onCheck(getItemValue(item)) : onUncheck(itemValue))}
              onBlur={onBlur}
            />
          );
        })}
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxGroup;
