import React from 'react';
import { Controller } from 'react-hook-form';

import RadioGroup from 'components/form/RadioGroup';
import { Props } from './types';

export * from './types';

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unnecessary-type-constraint
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
