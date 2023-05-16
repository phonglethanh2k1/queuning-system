import React, { useEffect, useState } from 'react';

import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import FormHelperText from '../FormHelperText';
import { Props } from './types';

export * from './types';

const getItemDefault = (item: any) => `${item}`;

const Dropdown = <E extends unknown = string | number>(props: Props<E>) => {
  const theme = useTheme();

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
    <FormControl
      variant="outlined"
      fullWidth
      error={!!error}
      {...controlProps}
      sx={{
        mt: 2,
      }}
    >
      <InputLabel {...labelProps}>{label}</InputLabel>

      <Select
        label={label}
        fullWidth
        {...others}
        sx={{
          '& .MuiOutlinedInput-root:hover': {
            '& > fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiOutlinedInput-notchedOutline': {
            paddingLeft: '33px',
            borderRadius: theme.shape.borderRadius,
          },
        }}
      >
        {itemList.map((item) => {
          const keyValue = getItemValue(item);
          return (
            <MenuItem key={keyValue} value={keyValue} {...itemProps}>
              {getItemLabel(item)}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Dropdown;
