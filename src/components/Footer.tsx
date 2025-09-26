import { Box, Container, Text, Stack, Link } from '@chakra-ui/react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box as="footer" bg="gray.900" color="white" py={8}>
      <Container maxW="container.xl">
        <Stack 
          direction={{ base: 'column', md: 'row' }} 
          justify="space-between" 
          align="center" 
          gap={4}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text fontSize="sm" color="gray.400">
            © {currentYear} ThatJuanCodes. All rights reserved.
          </Text>

          <Stack direction="row" gap={6}>
            <Link 
              href="mailto:juan@thatjuancodes.com" 
              fontSize="sm" 
              color="gray.400"
              _hover={{ color: 'white' }}
            >
              Email
            </Link>
            <Link 
              href="https://linkedin.com/in/juanthatcodes" 
              fontSize="sm" 
              color="gray.400"
              _hover={{ color: 'white' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/juanthatcodes" 
              fontSize="sm" 
              color="gray.400"
              _hover={{ color: 'white' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export { Footer }
