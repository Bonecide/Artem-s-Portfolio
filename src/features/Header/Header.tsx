import {useEffect, useRef} from 'react'
import {PrimaryButton} from '../../components/PrimaryButton/PrimaryButton'
import styles from './Header.module.scss'

export const Header = () => {
  const headerRef = useRef<HTMLElement | null>(null)
  const handleScroll = () => {
    if (headerRef.current) {
      const scrollY = window.scrollY
      if (scrollY < 50) {
        headerRef.current.style.opacity = '1'
      } else {
        headerRef.current.style.opacity = '0'
      }
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
      <PrimaryButton>Contact</PrimaryButton>
    </header>
  )
}
