import Hero from '@/components/Hero'
import About from '@/components/About'
import CurrentlyWorking from '@/components/CurrentlyWorking'
import GitHubStats from '@/components/GitHubStats'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <CurrentlyWorking />
      <GitHubStats />
      <Projects />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
    </div>
  )
}