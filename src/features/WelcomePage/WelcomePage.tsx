import {SecondaryButton} from '../../components/SecondaryButton/SecondaryButton'
import styles from './WelcomPage.module.scss'

export const WelcomePage = () => {
  return (
    <section id='main' className={`container ${styles.container}`}>
      <h1>
        UX/UI DESIGNER <br />
        Artem Svishchev
      </h1>
      <SecondaryButton dataText='second text'>
        Explore works <img src="/assets/icons/arrow.svg" alt="arrow" />
      </SecondaryButton>
      <img className={styles.blind} src="/assets/blinds/whiteBlind.png" alt="" />
    </section>
  )
}
