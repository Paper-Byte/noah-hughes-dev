import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  fonts: {
    heading: `'Noto Sans', sans-serif`,
    body: `'Work Sans Variable', sans-serif`,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#000000',
      100: '#212529',
      200: '#343A40',
      300: '#495057',
      400: '#6C757D',
      500: '#ADB5BD',
      600: '#CED4DA',
      700: '#DEE2E6',
      800: '#E9ECEF',
      900: '#F8F9FA',
    },
  },
});
