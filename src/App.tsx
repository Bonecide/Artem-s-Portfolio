import {AboutMe} from './features/AboutMe/AboutMe'
import {Footer} from './features/Footer/Footer'
import {Header} from './features/Header/Header'
import {Projects} from './features/Projects/Projects'
import {Skills} from './features/Skills/Skills'
import {WelcomePage} from './features/WelcomePage/WelcomePage'
import './global.scss'

function App() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
