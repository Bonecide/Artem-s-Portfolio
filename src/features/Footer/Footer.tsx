import styles from './Footer.module.scss'
export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <h5>Contact with me</h5>

        <div className={styles.textContainer}>
          <h4>Telegram :</h4>
          <p className={styles.animationText}>grisenero</p>
        </div>
        <div className={styles.socialIcons}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/artem-svishchev-82701526a/"
          >
            <img src="/assets/icons/Social Icons/Linkedin.png" alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.behance.net/98b48533"
          >
            <img src="/assets/icons/Social Icons/Behance.png" alt="" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/grissenero/"
          >
            <img src="/assets/icons/Social Icons/Instagram.png" alt="" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/grisenero">
            <img src="/assets/icons/Social Icons/Telegram.png" alt="" />
          </a>
        </div>
      </div>
      <div className={`container ${styles.developer}`}>
        <div className={styles.top}>
          <div className={styles.leftSide}>
            <h6>Designed by grisenero</h6>
            <h5>2023</h5>
          </div>
          <div className={styles.rightSide}>
            <h6>Created by Marsel Kasymov</h6>
            <div>
              <a href="https://t.me/Bonecide" target="_blank" rel="noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/bonecide/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Bonecide"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <h5>© Bishkek.Kyrgyzstan.</h5>
        </div>
      </div>
    </footer>
  )
}
