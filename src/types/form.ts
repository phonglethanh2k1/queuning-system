import { ClickableConfig, FieldConfigType } from "./field";

export type FormInfo = {
  title: string;
  description: string;
  requireDevice: boolean;
  allowBack: boolean;
  extraButtons: { label: string; clickableList: ClickableConfig[] }[];
  inputList: FieldConfigType[];
  buttonLabel?: string;
  suffixButtons: { label: string; clickableList: ClickableConfig[] }[];
};
