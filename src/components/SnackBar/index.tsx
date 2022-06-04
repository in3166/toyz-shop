import { useRecoil } from 'hooks/state'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { useUpdateEffect } from 'react-use'
import styles from './snackBar.module.scss'
import { CloseIcon } from 'assets/svgs'
import { cx } from 'styles'
import { useSnackbar } from './useSnackBar'

interface ISnackBarProps {
  message: string
  setMessage: (text: string) => void
  status?: string
  position?: string
}

// TODO: 수정
const SnackBar = ({ message, setMessage, status, position }: ISnackBarProps) => {
  // const timer = setTimeout(() => setMessage(''), 5000)
  // console.log('message: ', message)

  // useEffect(() => {
  //   return () => {
  //     clearTimeout(timer)
  //   }
  // }, [setMessage, timer])

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
  //   const snackbarElement = document?.getElementById('snackbarRoot')
  //   if (snackbarElement) return ReactDOM.createPortal(content, snackbarElement)
  //   return undefined
}

export default SnackBar

// export const useSnackbar = () => {
//   const [message, setMessage] = useState('')
//   const timer = useRef(null)

//   useUpdateEffect(() => {
//     if (timer.current) clearTimeout(timer.current)
//     if (timer !== null && timer.current !== null) {
//       timer.current = setTimeout(() => {
//         setMessage('')
//       }, 3000 + 100) // add 100ms for fadeout animation
//     }
//   }, [message])

//   useEffect(() => {
//     return () => {
//       if (timer.current) clearTimeout(timer.current)
//       setMessage('')
//     }
//   }, [])

//   return [message, setMessage]
// }
