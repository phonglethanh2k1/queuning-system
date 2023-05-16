import { FieldConfigType, InputType } from './field';

export const ModalDynamicName = {
  USER: 'user',
  EMPLOYEE: 'employee',
  PRODUCT: 'product',
  FIELD: 'field',
  MODAL: 'modal',
};

export const ModalDynamic: { [key: string]: FieldConfigType[] } = {
  [ModalDynamicName.FIELD]: [
    {
      id: '1',
      fieldName: 'label',
      label: 'Label',
      input: InputType.TEXT,
      placeHolder: 'Tên field',
      isDisabled: false,
    },
    {
      id: '2',
      fieldName: 'placeHolder',
      label: 'Placeholder',
      input: InputType.TEXT,
      placeHolder: 'Placeholder',
      rulesList: [
        {
          rule: '^(?!\\s*$).+',
          label: 'Dữ liệu bắt buộc nhập!',
        },
      ],
    },
    {
      id: '3',
      fieldName: 'input',
      label: 'Kiểu dữ liệu',
      input: InputType.SELECT,
      placeHolder: 'Kiểu dữ liệu',
      rulesList: [
        {
          rule: '^(?!\\s*$).+',
          label: 'Dữ liệu bắt buộc nhập!',
        },
      ],
      optionList: [
        {
          label: 'Checkbox',
          value: InputType.CHECKBOX,
        },
        {
          label: 'Text',
          value: InputType.TEXT,
        },
        {
          label: 'Date',
          value: InputType.DATEPICKER,
        },
        {
          label: 'Password',
          value: InputType.PASSWORD,
        },
        {
          label: 'Digit',
          value: InputType.DIGIT,
        },
        {
          label: 'Email',
          value: InputType.EMAIL,
        },
        {
          label: 'Number',
          value: InputType.NUMBER,
        },
      ],
    },
    {
      id: '4',
      fieldName: 'fieldName',
      label: 'Name Field',
      input: InputType.TEXT,
      placeHolder: 'Name Field',
      value: '',
    },
    {
      id: '4',
      fieldName: 'isDisabled',
      label: 'Is disabled',
      input: InputType.CHECKBOX,
      placeHolder: 'Is disabled',
      value: '',
    },
  ],
  [ModalDynamicName.MODAL]: [
    {
      id: '1',
      fieldName: 'label',
      label: 'Tên',
      input: InputType.TEXT,
      placeHolder: 'Tên modal',
      rulesList: [
        {
          rule: '^(?!\\s*$).+',
          label: 'Dữ liệu bắt buộc nhập!',
        },
      ],
    },
    {
      id: '2',
      fieldName: 'tableName',
      label: 'Tên bảng',
      input: InputType.TEXT,
      placeHolder: 'Tên bảng dữ liệu',
      rulesList: [
        {
          rule: '^(?!\\s*$).+',
          label: 'Dữ liệu bắt buộc nhập!',
        },
      ],
    },
    {
      id: '3',
      fieldName: 'create_at',
      label: 'Ngày thêm',
      input: InputType.DATEPICKER,
      placeHolder: 'Ngày thêm',
      isDisabled: true,
      value: new Date(),
    },
    {
      id: '4',
      fieldName: 'isDisabled',
      label: 'Is disabled',
      input: InputType.CHECKBOX,
      placeHolder: 'Is disabled',
      value: '',
    },
  ],
};
