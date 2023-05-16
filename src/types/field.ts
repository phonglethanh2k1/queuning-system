export type FieldConfigType = {
  id: string;
  label: string;
  placeHolder?: string;
  input: InputType;
  rulesList?: {
    rule: string;
    label: string;
  }[];
  fieldName: string;
  value?: string | number | Date;
  optionList?: {
    label: string;
    value: string;
  }[];
  isDisabled?: boolean;
  extraRules?: {
    label: string;
    function: string;
    targetField: string;
  }[];
  clickableList?: ClickableConfig[];
};

export type ClickableConfig = {
  linkStart: number;
  linkLength: number;
  action: string;
  paramList: {
    url?: string;
    type?: string;
    data?: string;
    email?: string;
  };
};

export enum InputType {
  TEXT = 'text',
  NUMBER = 'number',
  UPLOAD_PHOTO = 'uploadPhoto',
  DATEPICKER = 'datepicker',
  EMAIL = 'email',
  SELECT = 'select',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
  HIDDEN = 'hidden',
  DIGIT = 'digit-4',
}
