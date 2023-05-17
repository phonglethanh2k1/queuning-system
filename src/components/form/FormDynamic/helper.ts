import { FieldConfigType, InputType } from 'types/field';

export const getDefaultValues = (inputList: FieldConfigType[]): object =>
  inputList.reduce((result: any, currentValue: FieldConfigType) => {
    if (currentValue.input === InputType.SELECT) {
      result[currentValue.fieldName] =
        currentValue.optionList?.find((item) => item.value === currentValue.value) || null;
      return result;
    }

    result[currentValue.fieldName] = currentValue.value || '';
    return result;
  }, {});
