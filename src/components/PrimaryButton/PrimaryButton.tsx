import MagneticButton from '../MagneticButton/MagneticButton'
import styles from './primaryButton.module.scss'

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  const {children, ...restProps} = props
  return (
    <MagneticButton
      {...restProps}
      className={styles.button}
      scale={1}
      tollerance={0.9}
      speed={1.5}
    >
      {children}
    </MagneticButton>
  )
}
