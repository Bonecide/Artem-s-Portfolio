import {scroller} from 'react-scroll'
export const scrollToSection = (section: string) => {
  scroller.scrollTo(section, {
    duration: 800,
    delay: 0,
  })
}
