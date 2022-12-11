import React, { FormEvent, useRef, useState } from 'react'
import Image from 'next/image'

import { useI18n } from 'hooks'
import useFormInput from 'hooks/useFormInput'
import { IMongooseError } from 'types/mongo'
import { validateId, validatePassword } from 'utils/validates/validateInput'
import InputText from 'components/_shared/InputText'
import SnackBar from 'components/_shared/SnackBar'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import styles from './signInForm.module.scss'

interface ISignInFormProps {
  onSignIn: (id: string, password: string, type?: string) => Promise<IMongooseError | null>
}

const SignInForm = ({ onSignIn }: ISignInFormProps) => {
  const t = useI18n()
  const inputFocusRef = useRef(null)
  const [snackBarStatus, setSnackBarStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const { message, setMessage } = useSnackbar(5000)

  const id = useFormInput({ validateFunction: validateId })
  const password = useFormInput({ validateFunction: validatePassword })

  const handleOnSubmit = async (e: FormEvent, type?: string) => {
    setLoading(true)
    e.preventDefault()

    if (!type && (!id.valueIsValid || !password.valueIsValid)) {
      setSnackBarStatus('warning')
      setMessage(`${t('common:signIn.snackBarValid')}`)
      setLoading(false)
      return
    }

    const error = await onSignIn(id.value, password.value, type)

    if (error) {
      setSnackBarStatus('error')
      setMessage(`[${error.code || 'Error'}]: ${error.message}`)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.signInForm}>
      {loading && <div className={styles.loadingBar} />}
      <InputText
        type='text'
        formTitle={`${t('common:signIn.titleID')}`}
        value={id.value}
        onChange={id.valueChangeHandler}
        reset={id.reset}
        onBlur={id.inputBlurHandler}
        hasError={id.hasError}
        errorMessage={`${t('common:signIn.errorMessageID')}`}
        inputFocusRef={inputFocusRef}
      />
      <InputText
        type='password'
        formTitle={`${t('common:signIn.titlePW')}`}
        value={password.value}
        onChange={password.valueChangeHandler}
        reset={password.reset}
        onBlur={password.inputBlurHandler}
        hasError={password.hasError}
        errorMessage={`${t('common:signIn.errorMessagePW')}`}
      />
      <div className={styles.signInButtonWrapper}>
        <button type='submit' className={styles.signInButton}>
          {`${t('common:signIn.button')}`}
        </button>
      </div>
      <footer className={styles.siginInFooter}>
        <button type='button' onClick={(e) => handleOnSubmit(e, 'kakao')}>
          <Image width={30} height={30} src='/svgs/kakaotalk_logo.png' alt='kakao login icon' />
        </button>
        <button type='button' onClick={(e) => handleOnSubmit(e, 'naver')}>
          <Image width={30} height={30} src='/svgs/naver_icon.png' alt='naver login icon' />
        </button>
        <button type='button' onClick={(e) => handleOnSubmit(e, 'google')}>
          <Image width={27} height={27} src='/svgs/google_icon.png' alt='google login icon' />
        </button>
      </footer>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </form>
  )
}

export default SignInForm
