export const PAGES = {
  SIGN_IN: 'SignIn',
  SIGN_UP: 'SignUp',
  FORGOT_PASSWORD: 'ForgotPassword',
};

export type ResponseProps = {
  colors: {
    [key: string]: string;
  };
};

const defaultThemeColor = {
  // paper
  paper: '#fafafa',
  backgroundDefault: '#E6F0F1',
  black: '#000000',
  // primary
  primaryLight: '#E6F0F1',
  primaryMain: '#67A7AB',
  primaryDark: '#6797B2',
  primaryContractText: '#ffffff',
  // secondary
  secondaryLight: '#E6F0F1',
  secondaryMain: '#67A7AB',
  secondaryDark: '#6797B2',
  secondaryContractText: '#ffffff',
  // success
  successLight: '#b9f6ca',
  successMain: '#05b46a',
  successDark: '#00c853',
  successContractText: '#ffffff',
  // error
  errorLight: '#ffe1df',
  errorMain: '#f27269',
  errorDark: '#f44336',
  errorContractText: '#ffffff',
  // info
  infoLight: '#e5f2f1',
  infoMain: '#68bbb2',
  infoDark: '#68bbb9',
  infoContractText: '#ffffff',
  // warning
  warningLight: '#fff8e1',
  warningMain: '#ffe57f',
  warningDark: '#ffc107',
  warningContractText: '#ffffff',
  // grey
  grey50: '#fafafa',
  grey100: '#f2f8f8',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey400: '#e0e0e0',
  grey500: '#9e9e9e',
  grey600: '#7e9a9a',
  grey700: '#666666',
  grey800: '#666666',
  grey900: '#333333',
  // text
  textPrimary: '#333333',
  textSecondary: '#666666',
  textDisabled: '#333333',
  // divider
  divider: '#e0e0e0',
  white: '#ffffff',
};

const data = {
  [PAGES.SIGN_IN]: {
    colors: defaultThemeColor,
  },
  [PAGES.SIGN_UP]: {
    colors: {
      ...defaultThemeColor,
      primaryLight: '#ffe1df',
      primaryMain: '#8867A3',
      primaryDark: '#8867B9',
      primaryContractText: '#ffffff',
    },
  },
  [PAGES.FORGOT_PASSWORD]: {
    colors: {
      ...defaultThemeColor,
      primaryLight: '#ffe1df',
      primaryMain: '#8867A3',
      primaryDark: '#8867B9',
      primaryContractText: '#ffffff',
    },
  },
};

const useSiteConfig = (page: string): { data: unknown } => ({
  data: data[page],
});

export default useSiteConfig;
