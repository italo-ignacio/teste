import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      primary: '$main',
      primaryTransparent: '#3B7ECC25',
      primaryLight: '$light',
      primaryDark: '$dark',

      success: '$greenLight',
      danger: '$redLight',
      warningLight: '$yellowLight',
      warningBase: '$yellowBase',
      infoBase: '$blue400',
      infoLight: '$blue300',
      white: '#ffffff',
      black: '#000000',

      font: '#000000',
      fontLight: '$gray300',
      fontSecondary: '$blueMid',

      background: '#F1C40F',
      backgroundLight: '#ffffff',
      backgroundDark: '$gray800',
      background1: '#ffffff',

      divider: '$gray250',
      shadow: '$gray250',
    },
    fontSizes: {
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      15: '0.938rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      32: '2rem',
      36: '2.25rem',
      48: '3rem',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeights: {
      shorter: '17.5px',
    },
    letterSpacings: {
      baseSpace: '0.15px',
    },
    logoWidth: {
      logoXs: '112.7px',
      logoSm: '128.8px',
      logoMd: '161px',
      logoLg: '193.2px',
      logoXl: '225.4px',
      logo2xl: '289.8px',
      logo5xl: '386.4px',
      logo8xl: '483px',
    },
    logoHeight: {
      logoXs: '28px',
      logoSm: '32px',
      logoMd: '40px',
      logoLg: '48px',
      logoXl: '56px',
      logo2xl: '72px',
      logo5xl: '96px',
      logo8xl: '120px',
    },
    borderWidths: {
      default: '0px',
      thin: '1px',
    },
    borderStyles: {},
    radii: {
      default: '0px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      full: '9999px',
    },
    opacity: {
      default: '0px',
      intense: '75%',
      light: '25%',
      semiTransparent: '10%',
    },
    shadows: {},
    zIndices: {
      underElement: '-1',
      overElement: '100',
    },
    transitions: {},
  },
  utils: {
    marginX: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
})
