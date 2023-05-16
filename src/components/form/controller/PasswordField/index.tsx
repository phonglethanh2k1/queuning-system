import React, { useState } from 'react';

import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';

import { Icon } from 'components/icons';
import TextField from '../TextField';

export * from './types';

const PasswordField = (props: TextFieldProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const InputAdornmentPwd = (
    <InputAdornment position="end">
      <IconButton onClick={handleClickShowPassword} aria-label="toggle password visibility" edge="end">
        {!showPassword ? (
          <Icon name="eye" sx={{ color: 'text.primary' }} />
        ) : (
          <Icon name="eye-slash" sx={{ color: 'text.primary' }} />
        )}
      </IconButton>
    </InputAdornment>
  );

  return (
    <TextField
      InputProps={{ endAdornment: InputAdornmentPwd }}
      name="password"
      type={showPassword ? 'text' : 'password'}
      autoComplete="current-password"
      {...props}
    />
  );
};

export default PasswordField;
