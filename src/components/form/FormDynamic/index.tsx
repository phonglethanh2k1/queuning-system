import React from 'react';

import { Grid } from '@mui/material';

import { InputType, FieldConfigType } from 'types/field';
import FieldDynamic from './FieldDynamic';

type FormDynamicProps = {
  data: FieldConfigType[];
};

const FieldsDynamic = ({ data }: FormDynamicProps): JSX.Element => {
  const renderFormFields = (): JSX.Element[] =>
    data.map((field) => (
      <Grid item xs={12} key={field.fieldName} display={field.input === InputType.HIDDEN ? 'none' : 'block'}>
        {field.input !== InputType.HIDDEN && (
          <Grid item xs={12}>
            <FieldDynamic {...field} />
          </Grid>
        )}
      </Grid>
    ));

  return <>{renderFormFields()}</>;
};

export default FieldsDynamic;
