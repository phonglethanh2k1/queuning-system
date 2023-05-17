import React from 'react';

import { Typography } from '@mui/material';

import PasswordField from 'components/form/controller/PasswordField';
import TextField from 'components/form/controller/TextField';
import DigitField from 'components/form/controller/DigitField';
import AutoCompleteField from 'components/form/controller/AutoCompleteField';
import CheckboxField from 'components/form/controller/CheckboxField';
import { FieldConfigType, InputType } from 'types/field';
import { CoreType } from 'types/core';
import { Clickable } from 'components/ui/Clickable';
import DateField from '../controller/DateField';

const fields: { [key: string]: React.ElementType } = {
  [InputType.PASSWORD]: PasswordField,
  [InputType.TEXT]: TextField,
  [InputType.NUMBER]: TextField,
  [InputType.EMAIL]: TextField,
  [InputType.SELECT]: AutoCompleteField,
  [InputType.DATEPICKER]: DateField,
  [InputType.CHECKBOX]: CheckboxField,
};

const FieldDynamic = (props: FieldConfigType): JSX.Element => {
  const Component: any = fields[props.input];
  const { fieldName, label, placeHolder, optionList = [] } = props;

  if (props.input === InputType.DIGIT) {
    return <DigitField name={fieldName} />;
  }

  let selectFieldProps = {};
  if (props.input === InputType.SELECT) {
    selectFieldProps = {
      getItemLabel: (item: CoreType) => item.label,
      getItemValue: (item: CoreType) => item.value,
    };
  }

  if (props.input === InputType.CHECKBOX && props.clickableList) {
    return (
      <CheckboxField
        name={fieldName}
        label={
          <Typography>
            <Clickable label={props.label} configs={props.clickableList} />
          </Typography>
        }
      />
    );
  }

  return (
    <Component
      name={fieldName}
      label={label}
      placeholder={placeHolder}
      options={optionList}
      {...selectFieldProps}
      disabled={props.isDisabled}
    />
  );
};

export default FieldDynamic;
