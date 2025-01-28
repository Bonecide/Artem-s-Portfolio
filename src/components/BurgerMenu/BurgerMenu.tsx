import {Dispatch} from 'react'
import styles from './BurgerMenu.module.scss'
import {motion} from 'framer-motion'
import {IoMdClose} from 'react-icons/io'
import {PrimaryButton} from '../PrimaryButton/PrimaryButton'
import {scrollToSection} from '../../scrollTo/scrollTo'

const LINKS = [
  {
    title: 'Home',
    link: '#main',
  },
  {
    title: 'About me',
    link: '#about',
  },
  {
    title: 'My works',
    link: '#works',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
]
export const BurgerMenu = ({setIsOpen}: {setIsOpen: Dispatch<boolean>}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
      }}
      exit={{
        opacity: 0,
      }}
      className={styles.container}
    >
      <div className={styles.relativeContainer}>
        <IoMdClose
          className={styles.cross}
          color="white"
          size={30}
          onClick={() => setIsOpen(false)}
        />

        <div className={styles.navigation}>
          {LINKS.map((item, idx) => (
            <motion.a
              onClick={() => {
                setIsOpen(false)
              }}
              initial={{
                opacity: 0,
                y: -40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: idx / 10,
                duration: 0.3,
              }}
              key={item.title}
              href={item.link}
            >
              {item.title}
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          transition={{
            delay: (LINKS.length + 1) / 10,
            duration: 0.3,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <PrimaryButton
            onClick={() => {
              setIsOpen(false)
              scrollToSection('footer')
            }}
          >
            Contact
          </PrimaryButton>
        </motion.div>
      </div>
    </motion.div>
  )
}
