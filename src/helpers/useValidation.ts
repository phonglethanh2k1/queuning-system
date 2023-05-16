/* eslint-disable no-continue */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from 'yup';
import { FieldConfigType, InputType } from 'types/field';
import { AnyObject } from 'yup/lib/types';
import { AssertsShape, TypeOfShape } from 'yup/lib/object';

const getValidationForm = (data: FieldConfigType[]): yup.ObjectSchema<any> => {
  const result: any = {};

  data.forEach((item) => {
    const validation = yup.string();

    item?.rulesList?.forEach((rule) => {
      result[item.fieldName] = validation.matches(RegExp(rule.rule), rule.label);

      if (item.input === InputType.CHECKBOX) {
        result[item.fieldName] = validation.not([''], rule.label);
      }
    });

    item?.extraRules?.forEach((rule) => {
      result[item.fieldName] = validation.oneOf([yup.ref(rule.targetField)], rule.label);
    });
  });

  return yup.object().shape({
    ...result,
  });
};

const useValidation = (
  data: FieldConfigType[]
): yup.ObjectSchema<any, AnyObject, TypeOfShape<any>, AssertsShape<any>> => getValidationForm(data);

export default useValidation;
