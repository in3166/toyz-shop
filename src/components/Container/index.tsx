import { ReactNode } from 'react'
import { cx } from 'styles'
import styles from './container.module.scss'

interface IContainerProps {
  children: ReactNode
  color?: string
}
const Container = ({ children, color }: IContainerProps): JSX.Element => {
  return <div className={cx(styles.container, { [styles.white]: color === 'white' })}>{children}</div>
}

export default Container
