import { createSystem, defaultConfig } from '@chakra-ui/react'

// Define lemon yellow color palette
const lemonYellowPalette = {
  50: '#fffef7',
  100: '#fffce0',
  200: '#fff9c2',
  300: '#fff395',
  400: '#ffea56',
  500: '#ffde1a', // Main lemon yellow
  600: '#e6c700',
  700: '#ccb300',
  800: '#b39f00',
  900: '#998c00',
  950: '#806600'
}

// Create custom theme with lemon yellow as primary
export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        // Replace blue with lemon yellow
        blue: lemonYellowPalette,
        // Also create a 'primary' alias for consistency
        primary: lemonYellowPalette
      }
    }
  }
})
