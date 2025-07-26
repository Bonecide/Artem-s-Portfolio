import styles from './KassirProject.module.scss'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'
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

  const onCLickImage = () => {
    window.open('', '_blank')
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
            <div
              data-tooltip-html="<img src='/assets/img/ticket-preview.png' alt='Ticket preview' width='400'/>"
              data-tooltip-id="ticket-tooltip"
              className={styles.ticketTextContainer}
            >
              <h5 className={styles.ticketText}>Designed a branded ticket </h5>
              <img src="/assets/icons/picture.svg" alt="ticket" />
            </div>
            <a
              href="https://www.figma.com/design/VDZra0r7uWn0T8EMRGiXKb/kassir.kg-redesign?node-id=0-1&t=D5L31raFOUi0mL1n-1"
              target="_blank"
              rel="noreferrer"
            >
              Figma
            </a>
          </div>
        </div>
      </div>
      <Tooltip id="ticket-tooltip" />
    </div>
  )
}
