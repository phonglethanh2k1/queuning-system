import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as RadioControl } from '@mui/material';
import React, { useEffect, useState } from 'react';

import FormHelperText from '../FormHelperText';
import { Props } from './types';

export * from './types';

const getItemDefault = (item: unknown) => `${item}`;

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const RadioGroup = <E extends unknown = string | number>(props: Props<E>) => {
  const {
    label,
    controlProps,
    labelProps,
    options,
    itemProps,
    getItemValue = getItemDefault,
    getItemLabel = getItemDefault,
    error,
    helperText,
    ...others
  } = props;

  const [itemList, setItemList] = useState<E[]>(() => (Array.isArray(options) ? options : []));

  useEffect(() => {
    if (!Array.isArray(options)) {
      options().then(setItemList);
    }
  }, [options]);

  return (
    <FormControl fullWidth error={!!error} {...controlProps}>
      <FormLabel {...labelProps} sx={{ mx: '1px', my: 1 }}>
        {label}
      </FormLabel>
      <RadioControl {...others}>
        {itemList.map((item) => {
          const keyValue = getItemValue(item);
          return (
            <FormControlLabel
              key={keyValue}
              value={keyValue}
              control={<Radio />}
              label={`${getItemLabel(item)}`}
              {...itemProps?.(item)}
            />
          );
        })}
      </RadioControl>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default RadioGroup;
