import { Box, Container, Heading, Text, SimpleGrid, Stack, Badge, Button, Link } from '@chakra-ui/react'

interface Project {
  title: string
  description: string
  technologies: string[]
  demoUrl?: string
  sourceUrl?: string
  status: 'completed' | 'in-progress' | 'planned'
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      demoUrl: '#',
      sourceUrl: '#',
      status: 'completed'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Chakra UI', 'Firebase', 'TypeScript'],
      demoUrl: '#',
      sourceUrl: '#',
      status: 'completed'
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered content generation tool that helps create blog posts, social media content, and marketing copy using OpenAI API.',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'TailwindCSS'],
      demoUrl: '#',
      sourceUrl: '#',
      status: 'in-progress'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'green'
      case 'in-progress':
        return 'blue'
      case 'planned':
        return 'gray'
      default:
        return 'gray'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed'
      case 'in-progress':
        return 'In Progress'
      case 'planned':
        return 'Planned'
      default:
        return 'Unknown'
    }
  }

  return (
    <Box as="section" id="projects" py={20}>
      <Container maxW="container.xl">
        <Stack gap={12}>
          <Stack gap={4} textAlign="center">
            <Heading size="2xl">Featured Projects</Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              Here are some of my recent projects that showcase my skills and experience 
              in full-stack development, UI/UX design, and modern web technologies.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
            {projects.map((project, index) => (
              <Box key={index} p={6} shadow="md" borderWidth={1} bg="white" rounded="lg">
                <Stack gap={4} h="full">
                  <Stack gap={2} flex={1}>
                    <Stack direction="row" justify="space-between" align="center">
                      <Heading size="md">{project.title}</Heading>
                      <Badge colorScheme={getStatusColor(project.status)}>
                        {getStatusText(project.status)}
                      </Badge>
                    </Stack>

                    <Text color="gray.600" lineHeight="tall">
                      {project.description}
                    </Text>

                    <Stack direction="row" wrap="wrap" gap={2}>
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" colorScheme="blue">
                          {tech}
                        </Badge>
                      ))}
                    </Stack>
                  </Stack>

                  <Stack direction="row" gap={2}>
                    {project.demoUrl && (
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" flex={1}>
                        <Button
                          backgroundColor="blue.500"
                          color="white"
                          size="sm"
                          w="full"
                          _hover={{ backgroundColor: 'blue.600' }}
                        >
                          Live Demo
                        </Button>
                      </Link>
                    )}
                    {project.sourceUrl && (
                      <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer" flex={1}>
                        <Button
                          variant="outline"
                          borderColor="blue.500"
                          color="blue.500"
                          size="sm"
                          w="full"
                          _hover={{ backgroundColor: 'blue.50' }}
                        >
                          Source Code
                        </Button>
                      </Link>
                    )}
                  </Stack>
                </Stack>
                </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  )
}

export { Projects }
