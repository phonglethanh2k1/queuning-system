import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import CheckboxGroup from 'components/form/CheckboxGroup';
import { Props } from './types';

export * from './types';

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unnecessary-type-constraint
const CheckboxGroupField = <E extends unknown = string | number>(props: Props<E>) => {
  const { t } = useTranslation();
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <CheckboxGroup
          {...others}
          value={value}
          error={invalid}
          helperText={invalid ? t(error?.message || '') : helperText}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default CheckboxGroupField;
