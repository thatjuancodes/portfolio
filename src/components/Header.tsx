import { Box, Container, Flex, Heading, Button, Stack } from '@chakra-ui/react'

interface HeaderProps {
  onSectionClick: (section: string) => void
}

function Header({ onSectionClick }: HeaderProps) {
  const navItems = [
    { label: 'About', section: 'about' },
    { label: 'Projects', section: 'projects' },
    { label: 'Skills', section: 'skills' },
    { label: 'Contact', section: 'contact' },
  ]

  return (
    <Box as="header" bg="white" shadow="sm" position="sticky" top={0} zIndex={10}>
      <Container maxW="container.xl" py={4}>
        <Flex justify="space-between" align="center">
          <Heading 
            size="lg" 
            color="blue.500"
            cursor="pointer"
            onClick={() => onSectionClick('hero')}
          >
            JM Alvarez
          </Heading>

          <Stack direction="row" gap={2} display={{ base: 'none', md: 'flex' }}>
            {navItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => onSectionClick(item.section)}
                _hover={{ backgroundColor: 'blue.50' }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

export { Header }