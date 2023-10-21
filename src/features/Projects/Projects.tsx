import {PhoneProject} from './PhoneProject/PhoneProject'
import styles from './Projects.module.scss'
export const Projects = () => {
  return (
    <section id="works" className="container">
      <div className={styles.container}>
        <h2>My Projects Highlight</h2>

        <div className={styles.potfolio}>
          <div className={styles.portfolioCard}>
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
          </div>
          <PhoneProject />
        </div>
      </div>
    </section>
  )
}
