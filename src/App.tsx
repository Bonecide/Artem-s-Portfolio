import {AboutMe} from './features/AboutMe/AboutMe'
import {Header} from './features/Header/Header'
import {Projects} from './features/Projects/Projects'
import {WelcomePage} from './features/WelcomePage/WelcomePage'
import './global.scss'

function App() {
  return (
    <div>
      <Header />
      <WelcomePage />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App
