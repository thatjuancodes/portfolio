import { Box, Container, Heading, Text, SimpleGrid, Stack, Badge } from '@chakra-ui/react'

interface SkillCategory {
  title: string
  skills: string[]
  color: string
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Chakra UI', 'TailwindCSS', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'blue'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
      color: 'green'
    },
    {
      title: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Vercel', 'Git', 'GitHub Actions', 'Vite', 'Webpack', 'ESLint'],
      color: 'purple'
    },
    {
      title: 'Design & Others',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'REST APIs', 'GraphQL', 'Testing', 'Agile', 'Scrum'],
      color: 'orange'
    }
  ]

  return (
    <Box as="section" id="skills" py={20} bg="gray.50">
      <Container maxW="container.xl">
        <Stack gap={12}>
          <Stack gap={4} textAlign="center">
            <Heading size="2xl">Skills & Technologies</Heading>
            <Text fontSize="lg" color="gray.600" maxW="600px" mx="auto">
              I work with a variety of modern technologies and tools to build 
              scalable, performant, and user-friendly applications.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
            {skillCategories.map((category) => (
              <Box key={category.title} p={6} bg="white" rounded="lg" shadow="sm" borderWidth={1}>
                <Stack gap={4}>
                  <Heading size="md" color={`${category.color}.500`}>
                    {category.title}
                  </Heading>

                  <Stack direction="row" wrap="wrap" gap={2}>
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        colorScheme={category.color}
                        variant="subtle"
                        px={3}
                        py={1}
                        rounded="full"
                        fontSize="sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>

          <Box textAlign="center" p={8} bg="white" rounded="lg" shadow="sm" borderWidth={1}>
            <Stack gap={4}>
              <Heading size="lg">Always Learning</Heading>
              <Text color="gray.600" maxW="500px" mx="auto">
                Technology evolves rapidly, and I'm passionate about staying current with the latest 
                trends, frameworks, and best practices in web development.
              </Text>
              <Stack direction="row" justify="center" wrap="wrap" gap={2}>
                <Badge colorScheme="teal" variant="outline">Learning: Rust</Badge>
                <Badge colorScheme="teal" variant="outline">Learning: Three.js</Badge>
                <Badge colorScheme="teal" variant="outline">Learning: Web3</Badge>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export { Skills }
