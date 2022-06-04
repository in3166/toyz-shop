import styles from './snackBar.module.scss'
import { CloseIcon } from 'assets/svgs'
import { cx } from 'styles'

interface ISnackBarProps {
  message: string
  setMessage: (text: string) => void
  status?: string
}

const SnackBar = ({ message, setMessage, status }: ISnackBarProps) => {
  return (
    <div
      className={cx(
        styles.snackBar,
        { [styles.visible]: message !== '' },
        { [styles.warning]: status === 'warning' },
        { [styles.error]: status === 'error' }
      )}
    >
      {message}
      <button type='button' onClick={() => setMessage('')}>
        <CloseIcon />
      </button>
    </div>
  )
}

export default SnackBar
