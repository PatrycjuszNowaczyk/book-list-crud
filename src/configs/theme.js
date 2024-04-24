import { createTheme } from '@mui/material/styles'

const typography = {
  fontFamily: '"Merienda", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: 'clamp(2rem, 8vw, 3rem)',
  },
  h2: {
    fontSize: 'clamp(1.875rem, 7.5vw, 2.5rem)',
  },
  h3: {
    fontSize: 'clamp(1.625rem, 6.5vw, 2rem)',
  },
  h4: {
    fontSize: 'clamp(1.375rem, 6vw, 1.5rem)',
  },
  h5: {
    fontSize: 'clamp(1.125rem, 5.5vw, 1.25rem)',
  },
  h6: {
    fontSize: 'clamp(0.875rem, 5vw, 1rem)',
  },
  body1: {
    fontSize: 'clamp(0.875rem, 8vw, 1rem)',
  },
  body2: {
    fontSize: 'clamp(0.75rem, 8vw, 0.875rem)',
  },
  overline: {
    fontSize: '0.75rem',
  },
  button: {
    textTransform: 'none',
  },
}

export const lightTheme = createTheme({
  palette: {
    mode: 'light', // 'light' | 'dark'
    primary: {
      main: '#332e3c',
    },
    secondary: {
      main: '#846c5b',
    },
  },
  typography: typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '::selection': {
          background: '#332e3c',
          color: '#fff',
        },
      },
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // 'light' | 'dark'
    primary: {
      main: '#332e3c',
    },
    secondary: {
      main: '#846c5b',
    },
  },
  typography: typography,
})
