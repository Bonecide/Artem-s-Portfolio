import styles from './SecondaryButton.module.scss'

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  dataText?: string
}

export const SecondaryButton: React.FC<ButtonProps> = (props) => {
  const {children, dataText, ...restProps} = props
  return (
    <button data-text={dataText} className={styles.button} {...restProps}>
      <span>{children}</span>
    </button>
  )
}
