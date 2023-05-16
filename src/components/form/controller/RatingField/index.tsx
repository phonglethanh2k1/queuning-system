import React from 'react';
import { Controller } from 'react-hook-form';

import Rating from 'components/form/Rating';
import { Props } from './types';

export * from './types';

const RatingField = (props: Props): JSX.Element => {
  const { name, helperText, ...others } = props;

  return (
    <Controller
      name={name}
      render={({ field: { value, onChange, onBlur }, fieldState: { invalid, error } }) => (
        <Rating
          {...others}
          error={invalid || false}
          helperText={invalid ? error?.message || '' : helperText}
          value={value || 0}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};

export default RatingField;
