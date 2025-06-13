import {KassirProject} from './KassirProject/KassirProject'
import {PhoneProject} from './PhoneProject/PhoneProject'
import styles from './Projects.module.scss'
import {SushiProject} from './SushiProject/SushiProject'
export const Projects = () => {
  return (
    <section id="works" className="container">
      <div className={styles.container}>
        <h2>My Projects Highlight</h2>
        <div className={styles.mainProject}>
          <KassirProject />
        </div>
        <div className={styles.potfolio}>
          <a
            href="https://www.figma.com/file/WOQFzCd44r50mb6frfyX8H/KudaGo-Design?type=design&node-id=0%3A1&mode=design&t=10W8SX5D892asjSL-1"
            target="_blank"
            className={styles.portfolioCard}
            rel="noreferrer"
          >
            <img
              className={styles.blind}
              src="/assets/blinds/purple.png"
              alt=""
            />
            <img
              className={styles.mainImg}
              src="/assets/img/macbook.png"
              alt=""
            />
            <div className={styles.text}>
              <div className={styles.textTitle}>
                <h3>Advertising photo website</h3>
                <hr />
              </div>
              <div className={styles.skills}>
                <p>Work:</p>
                <div>
                  <h5>UX Design</h5>
                  <h5>UI Design</h5>
                  <h5>Flow Chart</h5>
                </div>
              </div>
            </div>
          </a>
          <PhoneProject />
          <SushiProject />
          <a
            href="https://www.kassir.info/"
            target="_blank"
            className={styles.portfolioCard}
            rel="noreferrer"
          >
            <img
              className={styles.blind}
              src="/assets/blinds/yellow.png"
              alt=""
            />
            <img
              className={styles.mainImg}
              src="/assets/img/CarProject.png"
              alt=""
            />
            <div className={styles.text}>
              <div className={styles.textTitle}>
                <h3>Informational landing</h3>
                <hr />
              </div>
              <div className={styles.skills}>
                <p>Work:</p>
                <div>
                  <h5>UX Design</h5>
                  <h5>UI Design</h5>
                  <h5>Copywriting </h5>
                </div>
              </div>
            </div>
          </a>
          <div className={styles.portfolioCard}>
            <img
              className={styles.blind}
              src="/assets/blinds/green.png"
              alt=""
            />
            <img
              className={styles.mainImg}
              src="/assets/img/sxodim-app.png"
              alt=""
            />
            <div className={styles.text}>
              <div className={styles.textTitle}>
                <h3>Landing for mobile APP</h3>
                <hr />
              </div>
              <div className={styles.skills}>
                <p>Work:</p>
                <div>
                  <h5>UI Design</h5>
                  <h5>Copywriting </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
