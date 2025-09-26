import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react'

// Define lemon yellow color palette with proper token structure
const lemonYellowPalette = {
  50: { value: '#fffef7' },
  100: { value: '#fffce0' },
  200: { value: '#fff9c2' },
  300: { value: '#fff395' },
  400: { value: '#ffea56' },
  500: { value: '#ffde1a' }, // Main lemon yellow
  600: { value: '#e6c700' },
  700: { value: '#ccb300' },
  800: { value: '#b39f00' },
  900: { value: '#998c00' },
  950: { value: '#806600' }
}

// Define tokens with proper structure
const tokens = defineTokens({
  colors: {
    // Replace blue with lemon yellow
    blue: lemonYellowPalette,
    // Also create a 'primary' alias for consistency
    primary: lemonYellowPalette
  }
})

// Create custom theme with lemon yellow as primary
export const theme = createSystem(defaultConfig, {
  theme: {
    tokens
  }
})