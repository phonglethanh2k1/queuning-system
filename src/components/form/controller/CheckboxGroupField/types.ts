import { Props as CheckGroupProps } from 'components/form/CheckboxGroup/types';

export type Props<E> = Omit<CheckGroupProps<E>, 'value'> & {
  name: string;
};
