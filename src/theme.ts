import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react'

// Define lemon yellow color palette with proper token structure
const lemonYellowPalette = {
  50: { value: '#fefce8' },
  100: { value: '#fef9c3' },
  200: { value: '#fef08a' },
  300: { value: '#fde047' },
  400: { value: '#facc15' },
  500: { value: '#eab308' }, // Main lemon yellow
  600: { value: '#ca8a04' },
  700: { value: '#a16207' },
  800: { value: '#854d0e' },
  900: { value: '#713f12' },
  950: { value: '#422006' }
}

// Define tokens with proper structure
const tokens = defineTokens({
  colors: {
    // Use lemon yellow as the primary color
    yellow: lemonYellowPalette,
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