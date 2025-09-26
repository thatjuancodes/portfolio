import { Box, Container, Heading, Text, Button, Stack } from '@chakra-ui/react'

interface HeroProps {
  onContactClick: () => void
}

function Hero({ onContactClick }: HeroProps) {
  return (
    <Box as="section" id="hero" py={20} bg="gray.50">
      <Container maxW="container.xl">
        <Stack 
          direction={{ base: 'column', lg: 'row' }} 
          align="center" 
          gap={12}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <Stack flex={1} gap={6}>
            <Heading size="3xl" lineHeight="shorter">
              Hi, I'm{' '}
              <Text as="span" color="blue.500">
                Juan
              </Text>
            </Heading>

            <Heading size="xl" color="gray.600" fontWeight="medium">
              Full Stack Developer
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="500px">
              I create modern, responsive web applications using cutting-edge technologies. 
              Passionate about clean code, user experience, and bringing ideas to life through code.
            </Text>

            <Stack direction={{ base: 'column', sm: 'row' }} gap={4}>
              <Button
                backgroundColor="blue.500"
                color="white"
                size="lg"
                onClick={onContactClick}
                _hover={{ backgroundColor: 'blue.600' }}
              >
                Get In Touch
              </Button>

              <Button
                variant="outline"
                borderColor="blue.500"
                color="blue.500"
                size="lg"
                _hover={{ backgroundColor: 'blue.50' }}
              >
                View Projects
              </Button>
            </Stack>
          </Stack>

          <Box flex={1} display="flex" justifyContent="center">
            <Box
              w="300px"
              h="300px"
              bg="blue.100"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Text fontSize="6xl" color="blue.500">
                👨‍💻
              </Text>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export { Hero }
