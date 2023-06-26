import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  layerStyles: {
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    boldFont: {
      fontWeight: 'bold',
      fontSize: 'xl'
    }
  },
  fonts: {
    body: `'Tajawal', sans-serif !important`,
    heading: `'Tajawal', sans-serif !important`
  }
});
