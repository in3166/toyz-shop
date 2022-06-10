import { useEffect, useRef, useState } from 'react'
import { useUpdateEffect } from 'react-use'

export const useSnackbar = (ms: number) => {
  const [message, setMessage] = useState({ text: '' })
  const timer = useRef<null | NodeJS.Timeout>(null)

  const setSnackbarMessage = (text: string) => {
    setMessage({ text })
  }
  const clearTimer = () => {
    if (timer.current) clearTimeout(timer.current)
  }

  useUpdateEffect(() => {
    if (timer.current) clearTimeout(timer.current)
    if (message.text !== '') {
      timer.current = setTimeout(() => {
        setMessage({ text: '' })
      }, ms + 100)
    }
  }, [message])

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
      setMessage({ text: '' })
    }
  }, [])

  return { message: message.text, setMessage: setSnackbarMessage, clearTimer }
}
