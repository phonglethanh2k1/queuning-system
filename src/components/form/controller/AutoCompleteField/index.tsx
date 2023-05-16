/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AutoComplete from 'components/form/AutoComplete';
import { Props } from './types';

export * from './types';

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unnecessary-type-constraint
const AutoCompleteField = <E extends unknown = string | number>(props: Props<E>) => {
  const { t } = useTranslation();
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <AutoComplete
          {...others}
          error={invalid}
          helperText={invalid ? t(error?.message || '') : helperText}
          value={value}
          onChange={(_e: any, newVal: any) => {
            onChange(newVal);
          }}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default AutoCompleteField;
