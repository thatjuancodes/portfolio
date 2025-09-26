import { Box, Container, Heading, Text, SimpleGrid, Stack, Button, Link, Icon } from '@chakra-ui/react'
import { FaEnvelope, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'

function Contact() {
  const contactMethods = [
    {
      title: 'Email',
      description: 'Get in touch via email',
      action: 'Send Email',
      href: 'mailto:juan@thatjuancodes.com',
      icon: FaEnvelope
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      action: 'View Profile',
      href: 'https://linkedin.com/in/juanthatcodes',
      icon: FaLinkedinIn
    },
    {
      title: 'GitHub',
      description: 'Check out my code repositories',
      action: 'View GitHub',
      href: 'https://github.com/juanthatcodes',
      icon: FaGithub
    },
    {
      title: 'Twitter',
      description: 'Follow me for tech updates',
      action: 'Follow Me',
      href: 'https://twitter.com/juanthatcodes',
      icon: FaTwitter
    }
  ]

  return (
    <Box as="section" id="contact" py={20}>
      <Container maxW="container.xl">
        <Stack gap={12}>
          <Stack gap={4} textAlign="center">
            <Heading size="2xl">Let's Work Together</Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about tech, feel free to reach out!
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
            {contactMethods.map((method) => (
              <Box
                key={method.title}
                p={6}
                bg="white"
                rounded="lg"
                shadow="md"
                borderWidth={1}
                textAlign="center"
                _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
                transition="all 0.2s"
              >
                <Stack gap={4}>
                  <Icon as={method.icon} boxSize="48px" color="blue.500" mx="auto" />
                  <Stack gap={2}>
                    <Heading size="md">{method.title}</Heading>
                    <Text color="gray.600" fontSize="sm">
                      {method.description}
                    </Text>
                  </Stack>
                  <Link href={method.href} target="_blank" rel="noopener noreferrer">
                    <Button
                      backgroundColor="blue.500"
                      color="white"
                      size="sm"
                      w="full"
                      _hover={{ backgroundColor: 'blue.600' }}
                    >
                      {method.action}
                    </Button>
                  </Link>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>

          <Box textAlign="center" p={8} bg="blue.50" rounded="lg">
            <Stack gap={4}>
              <Heading size="lg">Ready to Start?</Heading>
              <Text color="gray.600">
                Let's discuss your project and see how we can bring your ideas to life.
              </Text>
              <Link href="mailto:juan@thatjuancodes.com">
                <Button
                  backgroundColor="blue.500"
                  color="white"
                  size="lg"
                  _hover={{ backgroundColor: 'blue.600' }}
                >
                  Start a Conversation
                </Button>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export { Contact }