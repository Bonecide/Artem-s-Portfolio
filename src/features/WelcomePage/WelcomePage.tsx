import {useCallback} from 'react'
import {SecondaryButton} from '../../components/SecondaryButton/SecondaryButton'
import styles from './WelcomPage.module.scss'
import {scrollToSection} from '../../scrollTo/scrollTo'

export const WelcomePage = () => {
  const onClick = useCallback(() => {
    scrollToSection('works')
  }, [])
  return (
    <section id="main" className={`container ${styles.container}`}>
      <h1>
        UX/UI DESIGNER <br />
        Artem Svishchev
      </h1>
      <SecondaryButton onClick={onClick} dataText="let`s go!">
        Explore works <img src="/assets/icons/arrow.svg" alt="arrow" />
      </SecondaryButton>
      <img
        className={styles.blind}
        src="/assets/blinds/whiteBlind.png"
        alt=""
      />
    </section>
  )
}
