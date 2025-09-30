import { Box, Container, Heading, Text, Button, Stack, Icon } from '@chakra-ui/react'
import { FaCode } from 'react-icons/fa'

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
          {/* Circle icon - will appear on top on mobile, right side on desktop */}
          <Box 
            flex={1} 
            display="flex" 
            justifyContent="center"
            order={{ base: -1, lg: 1 }}
          >
            <Box
              w="300px"
              h="300px"
              bg="yellow.100"
              rounded="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              <Icon as={FaCode} boxSize="120px" color="yellow.400" />
            </Box>
          </Box>

          {/* Text content - will appear below icon on mobile, left side on desktop */}
          <Stack flex={1} gap={6} order={{ base: 0, lg: 0 }}>
            <Heading size="3xl" lineHeight="shorter">
              Hi, I'm{' '}
              <Text as="span" color="yellow.500">
                Juan
              </Text>
            </Heading>

            <Heading size="xl" color="gray.600" fontWeight="medium">
              Digital Nomad Dad
            </Heading>

            <Heading size="lg" color="gray.500" fontWeight="normal">
              Full Stack AI Engineer
            </Heading>

            <Text fontSize="lg" color="gray.600" maxW="500px">
              I create modern, responsive web applications using cutting-edge technologies. 
              Passionate about clean code, user experience, and bringing ideas to life through code.
            </Text>

            <Stack 
              direction={{ base: 'column', md: 'row' }} 
              gap={4}
              align="center"
              justify={{ base: 'center', md: 'flex-start' }}
              w="full"
            >
              <Button
                backgroundColor="yellow.400"
                color="gray.800"
                size="lg"
                onClick={onContactClick}
                _hover={{ backgroundColor: 'yellow.500' }}
              >
                Get In Touch
              </Button>

              <Button
                variant="outline"
                borderColor="yellow.400"
                color="yellow.600"
                size="lg"
                _hover={{ backgroundColor: 'yellow.50' }}
              >
                View Projects
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export { Hero }