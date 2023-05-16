/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-prop-types */
import { Box } from '@mui/material';
import React, { memo, useState, useCallback } from 'react';
import SingleInput from './SingleInput';

export interface DigitInputProps {
  length?: number;
  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;
  helperText?: string;
  value?: string;
  onChange?: (otp: string) => any;
}

export const DigitInputComponent = (props: DigitInputProps): JSX.Element => {
  const { length = 4, isNumberInput = false, autoFocus = true, disabled, onChange = () => {}, value = '1' } = props;

  const [activeInput, setActiveInput] = useState(0);
  const [otpValues, setOTPValues] = useState(value.split(''));

  const handleOtpChange = useCallback(
    (otp: string[]) => {
      const otpValue = otp.join('');
      onChange(otpValue);
    },
    [onChange]
  );

  const getRightValue = useCallback(
    (str: string) => {
      const changedValue = str;

      if (!isNumberInput || !changedValue) {
        return changedValue;
      }

      return Number(changedValue) >= 0 ? changedValue : '';
    },
    [isNumberInput]
  );

  const changeCodeAtFocus = useCallback(
    (str: string) => {
      const updatedOTPValues = [...otpValues];
      updatedOTPValues[activeInput] = str[0] || '';
      setOTPValues(updatedOTPValues);
      handleOtpChange(updatedOTPValues);
    },
    [activeInput, handleOtpChange, otpValues]
  );

  const focusInput = useCallback(
    (inputIndex: number) => {
      const selectedIndex = Math.max(Math.min(length - 1, inputIndex), 0);
      setActiveInput(selectedIndex);
    },
    [length]
  );

  const focusPrevInput = useCallback(() => {
    focusInput(activeInput - 1);
  }, [activeInput, focusInput]);

  const focusNextInput = useCallback(() => {
    focusInput(activeInput + 1);
  }, [activeInput, focusInput]);

  const handleOnFocus = useCallback(
    (index: number) => () => {
      focusInput(index);
    },
    [focusInput]
  );

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = getRightValue(e.currentTarget.value);
      if (!val) {
        e.preventDefault();
        return;
      }
      changeCodeAtFocus(val);
      focusNextInput();
    },
    [changeCodeAtFocus, focusNextInput, getRightValue]
  );

  const onBlur = useCallback(() => {
    setActiveInput(-1);
  }, []);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const pressedKey = e.key;

      switch (pressedKey) {
        case 'Backspace':
        case 'Delete': {
          e.preventDefault();
          if (otpValues[activeInput]) {
            changeCodeAtFocus('');
          } else {
            focusPrevInput();
          }
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          focusPrevInput();
          break;
        }
        case 'ArrowRight': {
          e.preventDefault();
          focusNextInput();
          break;
        }
        default: {
          if (pressedKey.match(/^[^a-zA-Z0-9]$/)) {
            e.preventDefault();
          }

          break;
        }
      }
    },
    [activeInput, changeCodeAtFocus, focusNextInput, focusPrevInput, otpValues]
  );

  const handleOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      const pastedData = e.clipboardData
        .getData('text/plain')
        .trim()
        .slice(0, length - activeInput)
        .split('');
      if (pastedData) {
        let nextFocusIndex = 0;
        const updatedOTPValues = [...otpValues];
        updatedOTPValues.forEach((val, index) => {
          if (index >= activeInput) {
            const changedValue = getRightValue(pastedData.shift() || val);
            if (changedValue) {
              updatedOTPValues[index] = changedValue;
              nextFocusIndex = index;
            }
          }
        });
        setOTPValues(updatedOTPValues);
        setActiveInput(Math.min(nextFocusIndex + 1, length - 1));
      }
    },
    [activeInput, getRightValue, length, otpValues]
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {Array(length)
        .fill('')
        .map((_, index) => (
          <SingleInput
            key={`SingleInput-${_}`}
            type={isNumberInput ? 'number' : 'text'}
            focus={activeInput === index}
            value={otpValues && otpValues[index]}
            autoFocus={autoFocus}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={onBlur}
            onPaste={handleOnPaste}
            disabled={disabled}
            sx={{
              mx: 0.5,
              '& .MuiOutlinedInput-input': {
                textAlign: 'center',
              },
            }}
          />
        ))}
    </Box>
  );
};

const Digit = memo(DigitInputComponent);
export default Digit;
