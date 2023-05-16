import React, { memo, useEffect, useLayoutEffect, useRef } from 'react';

import { TextField, TextFieldProps } from '@mui/material';

function usePrevious<T>(value?: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
export type SingleOTPInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  TextFieldProps & {
    focus?: boolean;
  };

export const SingleOTPInputComponent = (props: SingleOTPInputProps): JSX.Element => {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return <TextField inputRef={inputRef} {...rest} />;
};

const SingleOTPInput = memo(SingleOTPInputComponent);
export default SingleOTPInput;
