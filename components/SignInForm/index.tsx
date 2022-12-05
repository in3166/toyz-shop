import React, { FormEvent, useRef, useState } from 'react'
import { useI18n } from 'hooks'

import useFormInput from 'hooks/useFormInput'
import { IMongooseError } from 'types/mongo'
import { validateId, validatePassword } from 'utils/validates/validateInput'
import InputText from 'components/_shared/InputText'
import SnackBar from 'components/_shared/SnackBar'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import Loading from 'components/_shared/Loding'
import styles from './signInForm.module.scss'
import Modal from 'components/_shared/Modal'

interface ISignInFormProps {
  onSignIn: (id: string, password: string) => Promise<IMongooseError | null>
}

const SignInForm = ({ onSignIn }: ISignInFormProps) => {
  const t = useI18n()
  const inputFocusRef = useRef(null)
  const [snackBarStatus, setSnackBarStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const { message, setMessage } = useSnackbar(5000)

  const id = useFormInput({ validateFunction: validateId })
  const password = useFormInput({ validateFunction: validatePassword })

  const handleOnSubmit = async (e: FormEvent) => {
    setLoading(true)
    e.preventDefault()
    if (!id.valueIsValid || !password.valueIsValid) {
      setSnackBarStatus('warning')
      setMessage(`${t('common:signIn.snackBarValid')}`)
    }
    const error = await onSignIn(id.value, password.value)
    console.log(error)

    if (error) {
      setSnackBarStatus('error')
      setMessage(`[${error.code || 'Error'}]: ${error.message}`)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.signInForm}>
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
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
      {loading && (
        <Modal>
          <Loading />
        </Modal>
      )}
    </form>
  )
}

export default SignInForm
