import { createTheme } from '@mui/material/styles';

import * as colors from './colors';

let theme = createTheme({
  palette: {
    primary: { main: '#4903e2' },
    neutral: { main: '#151c3a' },
    primaryActive: { main: '#4903e2' },
    primaryHover: { main: '#804feb' },
    primarySelect: { main: '#1B00AE' },
    p2Active: { main: '#f0ecff' },
    p2Hover: { main: '#f8f6fe' },
    p2Select: { main: '#E9E1FC' },
    secondary: { main: '#64ebbc' },
    secondaryActive: { main: colors.lightGreen },
    secondaryHover: { main: '#F1FDF9' },
    secondarySelect: { main: '#B9F6E0' },
    tertiary: { main: colors.seaHolly },
    tertiaryActive: { main: '#E0F8FF' },
    tertiaryHover: { main: '#F6FDFF' },
    tertiarySelect: { main: '#BFF0FF' },
    warning: { main: '#FB4D3F' },
    warningActive: { main: '#FFEAE8' },
    warningHover: { main: '#FFF5F4' },
    warningSelect: { main: '#FFDBD8' },
    navGradient: {
      top: { main: '#231b62' },
      middle: { main: '#272e55' },
      bottom: { main: '#506a70' },
    },
    gray: {
      10: '#111111',
      40: '#aaaaaa',
      50: '#c5c5c5',
      60: '#d8d8d8',
      70: '#f2f2f2',
      80: '#fcfcfc',
    },

    // old colors
    white: colors.white,
    red: colors.red,
    green: { main: colors.green },
    blue: colors.blue,

    // TODO could probably set values here as a type action... hmmmmm
    hide: {},
    transparent: {},
    linkedin: { main: '#0060B5' },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: 8,
});

theme = createTheme(theme, {
  typography: {
    fontFamily: 'basis-grotesque-mono',
    wide: {
      letterSpacing: '4px',
    },
    h1: {
      fontWeight: 700,
      fontSize: '34px',
      lineHeight: '40px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '20px',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'strong' },
          style: {
            fontWeight: 'bold',
          },
        },
      ],
      defaultProps: {
        fontFamily: 'basis-grotesque-mono',
      },
    },
    MuiButton: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            fontSize: '11px',
            padding: '5px 12px',
            '& .MuiButton-startIcon': {
              width: '12px',
              height: '12px',
              '& .MuiSvgIcon-root': {
                width: '12px',
                height: '12px',
              },
            },
          },
        },
        {
          props: { size: 'medium' },
          style: {},
        },
        {
          props: { variant: 'text' },
          style: {
            background: 'transparent',
            color: theme.palette.primaryActive.main,
            '&:hover': {
              textDecoration: 'underline',
              background: 'transparent',
            },
            '&.active': {
              background: 'transparent',
            },
          },
        },
        {
          props: { color: 'primary', variant: 'contained' },
          style: {
            background: theme.palette.p2Active.main,
            color: theme.palette.primaryActive.main,
            '&:hover': {
              background: theme.palette.p2Hover.main,
              color: theme.palette.primaryHover.main,
            },
            '&.active': {
              background: theme.palette.p2Select.main,
              color: theme.palette.primarySelect.main,
            },
          },
        },
        {
          props: { color: 'action', variant: 'contained' },
          style: {
            background: theme.palette.primaryActive.main,
            color: theme.palette.white,
            '&:hover': {
              background: theme.palette.primaryHover.main,
              color: theme.palette.white,
            },
            '&.active': {
              background: theme.palette.primarySelect.main,
            },
          },
        },
        {
          props: { color: 'warning', variant: 'contained' },
          style: {
            background: theme.palette.warningActive.main,
            color: theme.palette.warning.main,
            '&:hover': {
              background: theme.palette.warningHover.main,
              color: theme.palette.warning.main,
            },
            '&.active': {
              color: theme.palette.warningSelect.main,
            },
          },
        },
        {
          props: { color: 'hide', variant: 'contained' },
          style: {
            backgroundColor: theme.palette.gray[70],
            color: theme.palette.red,
            '&:hover': {
              background: theme.palette.warningHover.main,
              color: theme.palette.red,
            },
            '&.active': {
              background: theme.palette.warningSelect.main,
            },
          },
        },
        {
          props: { color: 'green', variant: 'contained' },
          style: {
            background: theme.palette.secondaryActive.main,
            color: theme.palette.green.main,
            '&:hover': {
              background: theme.palette.secondaryHover.main,
              color: theme.palette.green.main,
            },
            '&.active': {
              background: theme.palette.secondarySelect.main,
            },
          },
        },
        {
          props: { color: 'linkedin', variant: 'contained' },
          style: {
            background: theme.palette.tertiaryHover.main,
            color: theme.palette.linkedin.main,
            '&:hover': {
              background: theme.palette.white,
              color: theme.palette.linkedin.main,
            },
            '&.active': {
              background: theme.palette.tertiaryActive.main,
            },
          },
        },
        {
          props: { disabled: true },
          style: {
            '&:disabled': {
              background: theme.palette.gray[70],
              color: theme.palette.gray[40],
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          fontFamily: 'basis-grotesque-mono',
          fontSize: '12px',
          fontWeight: 400,
          textTransform: 'none',
          padding: '10px 14px',
          lineHeight: 1.2,
          minWidth: 0,

          // icon
          '& .MuiButton-startIcon': {
            marginRight: '4px',
            '.MuiSvgIcon-root': {
              width: '16px',
            },
          },
        },
      },
    },
    MuiChip: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            fontSize: 11,
          },
        },
        {
          props: { variant: 'green' },
          style: {
            background: theme.palette.secondaryActive.main,
            color: theme.palette.green.main,
          },
        },
        {
          props: { variant: 'blue' },
          style: {
            background: theme.palette.tertiary.main,
            color: theme.palette.tertiary.main,
          },
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          fontFamily: 'basis-grotesque-mono',
        },
      },
    },
  },
});

export default theme;