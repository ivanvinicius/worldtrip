import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: 'background',
        color: 'text'
      }
    }
  },

  colors: {
    background: '#F5F8FA',
    heading: '#FFBA08',
    headingOpaque: 'rgba(255, 186, 8, 0.1);',
    text: '#47585B',
    info: '#999999',

    black: '#000000',
    white: '#FFFFFF',
    fog: '#DADADA'
  },

  fonts: {
    heading: ['Poppins, sans-serif', 'Barlow, sans-serif'],
    body: ['Poppins, sans-serif', 'Barlow, sans-serif'],
    mono: ['Poppins, sans-serif', 'Barlow, sans-serif']
  },

  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }
})
