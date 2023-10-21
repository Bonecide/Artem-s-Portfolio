import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton'
import {scrollToSection} from '../../scrollTo/scrollTo'
import styles from './AboutMe.module.scss'

export const AboutMe = () => {
  // onClick={()=> scrollToSection('main')}
  return (
    <section id="about" className="container">
      <div className={styles.container}>
        <img
          className={styles.blind}
          src="/assets/blinds/whiteBlind.png"
          alt="blind"
        />
        <div className={styles.text}>
          <h2>Let’s get know about me closer</h2>
          <p>
            I have been designing since childhood. Completed design courses. I
            have both commercial and product experience. Also worked as a
            freelancer. I work in the web and mobile environment.
          </p>
          <PrimaryButton>Discover More About Me</PrimaryButton>
        </div>
        <div className={styles.photo}>
          <img src="/assets/img/photo.png" alt="" />
        </div>
      </div>
    </section>
  )
}
