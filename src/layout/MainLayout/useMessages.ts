import { useTranslation } from 'react-i18next';

const path = 'layout';

export const useMessages = (): { [key: string]: string } => {
  const { t } = useTranslation();

  return {
    search: t(`${path}.search`),
  };
};

export default useMessages;
