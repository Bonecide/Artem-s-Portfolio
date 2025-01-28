import {AnimatePresence} from 'framer-motion'
import {ReactNode} from 'react'

interface AnimatePresenceProps {
  children: ReactNode
  initial?: boolean
  exitBeforeEnter?: boolean
  onExitComplete?: () => void
}

export const CustomAnimatePresence = (props: AnimatePresenceProps) => {
  // @ts-ignore
  return <AnimatePresence {...props} />
}
