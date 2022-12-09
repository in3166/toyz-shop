import { cx } from 'styles'
import styles from './snackBar.module.scss'
import { CloseIcon } from 'public/svgs'
import React from 'react'

interface ISnackBarProps {
  message: string
  setMessage: (text: string) => void
  status?: string
}

const SnackBar = ({ message, setMessage, status }: ISnackBarProps) => {
  return (
    <div
      role='alert'
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

export default React.memo(SnackBar)
