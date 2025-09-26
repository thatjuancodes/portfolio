import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react'

// Define blue color palette with proper token structure
const bluePalette = {
  50: { value: '#eff6ff' },
  100: { value: '#dbeafe' },
  200: { value: '#bfdbfe' },
  300: { value: '#93c5fd' },
  400: { value: '#60a5fa' },
  500: { value: '#3b82f6' }, // Main blue
  600: { value: '#2563eb' },
  700: { value: '#1d4ed8' },
  800: { value: '#1e40af' },
  900: { value: '#1e3a8a' },
  950: { value: '#172554' }
}

// Define tokens with proper structure
const tokens = defineTokens({
  colors: {
    // Use blue as the primary color
    blue: bluePalette,
    // Also create a 'primary' alias for consistency
    primary: bluePalette
  }
})

// Create custom theme with blue as primary
export const theme = createSystem(defaultConfig, {
  theme: {
    tokens
  }
})