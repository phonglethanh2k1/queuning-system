import React from 'react';
import { Controller } from 'react-hook-form';

import RadioGroup from 'components/form/RadioGroup';
import { Props } from './types';

export * from './types';


const RadioGroupField = <E extends unknown = string | number>(props: Props<E>) => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <RadioGroup
          {...others}
          value={value}
          error={invalid}
          helperText={invalid ? error?.message || '' : helperText}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default RadioGroupField;
