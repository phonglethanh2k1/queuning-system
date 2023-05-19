import { Components, tableCellClasses } from '@mui/material';
import { IThemeOption } from './types';

export default function componentStyleOverrides(theme: IThemeOption): Components | undefined {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--primary-main': theme.colors.primaryMain,
          '--primary-light': theme.colors.primaryLight,
          '--primary-dark': theme.colors.primaryDark,
          // secondary
          '--secondary-main': theme.colors.secondaryMain,
          '--secondary-light': theme.colors.secondaryLight,
          '--secondary-dark': theme.colors.secondaryDark,
          // success
          '--success-main': theme.colors.successMain,
          '--success-light': theme.colors.successLight,
          '--success-dark': theme.colors.successDark,
          // error
          '--error-main': theme.colors.errorMain,
          '--error-light': theme.colors.errorLight,
          '--error-dark': theme.colors.errorDark,
          // info
          '--info-main': theme.colors.infoMain,
          '--info-light': theme.colors.infoLight,
          '--info-dark': theme.colors.infoDark,
          // warning
          '--warning-main': theme.colors.warningMain,
          '--warning-light': theme.colors.warningLight,
          '--warning-dark': theme.colors.warningDark,
          // grey
          '--grey-50': theme.colors.grey50,
          '--grey-100': theme.colors.grey100,
          '--grey-200': theme.colors.grey200,
          '--grey-300': theme.colors.grey300,
          '--grey-400': theme.colors.grey400,
          '--grey-500': theme.colors.grey500,
          '--grey-600': theme.colors.grey600,
          '--grey-700': theme.colors.grey700,
          '--grey-800': theme.colors.grey800,
          '--grey-900': theme.colors.grey900,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '8px',
          lineHeight: 1,
          textTransform: 'none',
          fontSize: '1.125rem',
        },
        sizeMedium: {
          padding: '12px 26px',
        },
        sizeSmall: {
          padding: '8px 12px',
          fontSize: '12px',
        },
        sizeLarge: {
          padding: '11px 63px',
        },
        outlinedPrimary: {
          borderWidth: '1.5px',
          color: theme.colors?.primaryMain,
          backgroundColor: theme.colors?.white,
          borderColor: theme.colors.primaryMain,
          fontWeight: '900',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: theme.colors?.primaryDark,
            color: theme.colors?.white,
            borderColor: theme.colors.primaryDark,
          },
        },
        containedPrimary: {
          backgroundColor: theme.colors?.errorLight,
          color: theme.colors?.primaryMain,
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: theme.colors?.primaryDark,
            color: theme.colors?.white,
            borderColor: theme.colors.primaryDark,
          },
        },
        textPrimary: {
          color: theme.colors?.grey800,
          fontSize: '1rem',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          left: 15,
          '& .Mui-focused': {
            color: 'common.white',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'primary.light',
          backgroundColor: 'common.white',
          '&::placeholder': {
            color: 'primary.light',
            fontSize: '0.875rem',
          },
        },
        root: {
          marginTop: 0,
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: theme.colors?.white,
          '& legend': {
            marginLeft: 15,
            color: '',
          },

          '& fieldset': {
            borderColor: theme.colors?.grey500,
          },
          '&:hover fieldset': {
            borderColor: `${theme.colors?.primaryMain} !important`,
          },
          '&.Mui-focused fieldset': {
            borderColor: `${theme.colors?.primaryMain} !important`,
          },
        },
        input: {
          padding: '8px 14px',
          ':disabled': {
            borderRadius: '30px',
            backgroundColor: theme.colors.grey100,
          },
        },
        notchedOutline: {},
      },
    },
    MuiRating: {
      defaultProps: {
        precision: 0.1,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: theme.colors.secondaryMain,
          textDecoration: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: theme.colors.primaryDark,
            color: '#fff',
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: theme.colors.errorLight,
          '&:nth-of-type(odd)': {
            backgroundColor: theme.colors.white,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          fontWeight: 700,
          border: 0,
          color: theme.colors.grey800,
          padding: 12,
          [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.colors.primaryDark,
            borderRight: '1px solid #FFE3CD',
            color: theme.colors.white,
          },
          [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
            fontWeight: 500,
            borderRight: '1px solid #FFE3CD',
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          marginLeft: '-15px',
          // fontSize: '12px',
          // marginTop: '-5px',
        },
      },
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: theme.colors.white,
            border: 'solid 1px',
            borderColor: theme.colors.primaryMain,
          },
          border: 'none',
          ':hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          zIndex: 2,
          marginTop: '-45px',
          position: 'fixed',
        }
      }
    }
  };
}
