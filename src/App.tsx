import { Box } from '@chakra-ui/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactClick = () => {
    scrollToSection('contact')
  }

  return (
    <Box minH="100vh">
      <Header onSectionClick={scrollToSection} />

      <Hero onContactClick={handleContactClick} />

      <Projects />

      <Skills />

      <Contact />

      <Footer />
    </Box>
  )
}

export default App
