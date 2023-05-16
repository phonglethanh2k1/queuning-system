import { Props as AutocompleteProps } from 'components/form/AutoComplete';

export type Props<E> = AutocompleteProps<E> & {
  name: string;
};
