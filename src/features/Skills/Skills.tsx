import styles from './Skills.module.scss'

export const Skills = () => {
  return (
    <section id="skills" className="container">
      <div className={styles.container}>
        <img
          className={styles.blind}
          src="/assets/blinds/whiteBlind.png"
          alt="blind"
        />
        <h2>MY SKILLS</h2>

        <div className={styles.skills}>
          <img src="/assets/img/figma.png" alt="" />
          <img src="/assets/img/PS.png" alt="" />
        </div>
      </div>
    </section>
  )
}
