import styles from './KassirProject.module.scss'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'

export const KassirProject = () => {
  const FIRST_IMAGE = {
    imageUrl: '/assets/img/kassir-new.png',
  }
  const SECOND_IMAGE = {
    imageUrl: '/assets/img/kassir-old.png',
  }
  const delimiterIconStyles = {
    width: '50px',
    height: '50px',
    backgroundSize: 'cover',
    background: '#FFFFFF78',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backdropFilter: 'blur(10px)',
    backgroundImage: "url('/assets/img/arrows.png')",
    border: '2px solid white',
  }

  return (
    <div className={styles.portfolioCard}>
      <div className={styles.sliderWrapper}>
        <ReactBeforeSliderComponent
          delimiterIconStyles={delimiterIconStyles}
          firstImage={FIRST_IMAGE}
          secondImage={SECOND_IMAGE}
        />
      </div>
      <img className={styles.blind} src="/assets/blinds/purple.png" alt="" />
      <img className={styles.mainImg} src="/assets/img/imac.png" alt="" />
      <div className={styles.text}>
        <div className={styles.textTitle}>
          <h3>Redesign for an online ticketing platform</h3>
          <hr />
        </div>
        <div className={styles.skills}>
          <p>Work:</p>
          <div>
            <h5>Improved UI</h5>
            <h5>Improved UX</h5>
            <h5>Added dark mode</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
