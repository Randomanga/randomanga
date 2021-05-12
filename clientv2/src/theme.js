import { extendTheme } from '@chakra-ui/react'
export default extendTheme({
  initialColorMode: 'dark',
  fonts: {
    heading: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
    body:
      'ui-sans-serif,system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  },
  colors: {
    dark: {
      50: '#6c7983',
      100: '#566169',
      200: '#2b3034',
      300: '#2a2a35',
      400: '#262630',
      500: '#22222a',
      600: '#1d1d25',
      700: '#191920',
      800: '#12181b',
      900: '#111115',
    },
  },
  space: {
    100: '26rem',
    102: '28rem',
    104: '30rem',
    106: '35rem',
  },
})
