import { Props as DropdownProps } from 'components/form/Dropdown';

export type Props<E> = DropdownProps<E> & {
  name: string;
};
