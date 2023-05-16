import { useTranslation } from 'react-i18next';

const path = 'pages.auth.SignIn.SignInForm';

export const useMessages = (): { [key: string]: string } => {
  const { t } = useTranslation();

  return {
    forgotPassword: t(`${path}.forgot_password`),
    loginSuccess: t(`${path}.messages.login_success`),
  };
};

export default useMessages;
