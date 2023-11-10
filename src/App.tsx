import {useEffect, useState} from 'react'
import {AboutMe} from './features/AboutMe/AboutMe'
import {Footer} from './features/Footer/Footer'
import {Header} from './features/Header/Header'
import {Projects} from './features/Projects/Projects'
import {Skills} from './features/Skills/Skills'
import {WelcomePage} from './features/WelcomePage/WelcomePage'
import './global.scss'
import {Loader} from './components/Loader/Loader'
import {animated, useTransition} from '@react-spring/web'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const loaderTransition = useTransition(isLoading, {
    from: {opacity: 0, background: '#1a1a1a'},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {duration: 300},
  })

  return (
    <div>
      {loaderTransition(
        (style, item) =>
          item && (
            <animated.div
              style={{
                ...style,
                display: 'flex',
                position: 'fixed',
                justifyContent: 'center',
                alignItems: 'center',
               
                zIndex: 9999999,
                width: '100vw',
                height: '100vh',
              }}
            >
              <Loader />
            </animated.div>
          )
      )}
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
