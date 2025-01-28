import {useEffect, useRef, useState} from 'react'
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton'
import styles from './Header.module.scss'
import {scrollToSection} from '../../scrollTo/scrollTo'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoMdClose} from 'react-icons/io'
import {BurgerMenu} from '../../components/BurgerMenu/BurgerMenu'
import {AnimatePresence} from 'framer-motion'

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)
  const headerRef = useRef<HTMLElement | null>(null)

  const handleScroll = () => {
    if (headerRef.current) {
      const scrollY = window.scrollY
      headerRef.current.style.opacity = scrollY < 50 ? '1' : '0'
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header ref={headerRef} className={`${styles.container}`}>
      <div className={styles.navigation}>
        <a href="#main">Home</a>
        <a href="#about">About me</a>
        <a href="#works">My works</a>
        <a href="#skills">Skills</a>
      </div>
      <PrimaryButton onClick={() => scrollToSection('footer')}>
        Contact
      </PrimaryButton>
      <div
        onClick={() => setIsBurgerOpen((prev) => !prev)}
        className={styles.burger}
      >
        {!isBurgerOpen ? (
          <RxHamburgerMenu size={30} color="white" />
        ) : (
          <IoMdClose color="white" size={30} />
        )}
      </div>

      <AnimatePresence>
        {isBurgerOpen && <BurgerMenu setIsOpen={setIsBurgerOpen} />}
      </AnimatePresence>
    </header>
  )
}
