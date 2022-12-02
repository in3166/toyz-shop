import React, { FormEvent, useRef, useState } from 'react'
import { useI18n } from 'hooks'

import useFormInput from 'hooks/useFormInput'
import { IUser } from 'types/user'
import {
  validateEmail,
  validateId,
  validateName,
  validatePassword,
  validatePhoneNumber,
} from 'utils/validates/validateInput'
import InputText from 'components/_shared/InputText'
import SnackBar from 'components/_shared/SnackBar'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import styles from './signUpForm.module.scss'

interface ISignUpFormProps {
  onAddUser: (user: IUser) => Promise<Error | null>
}

const SignUpForm = ({ onAddUser }: ISignUpFormProps) => {
  const t = useI18n()

  const inputFocusRef = useRef(null)

  const [snackBarStatus, setSnackBarStatus] = useState('')
  const { message, setMessage } = useSnackbar(5000)

  const id = useFormInput({ validateFunction: validateId })
  const name = useFormInput({ validateFunction: validateName })
  const password = useFormInput({ validateFunction: validatePassword })
  const phone = useFormInput({ validateFunction: validatePhoneNumber })
  const email = useFormInput({ validateFunction: validateEmail })

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!id.valueIsValid || !password.valueIsValid || !phone.valueIsValid || !name.valueIsValid) {
      setSnackBarStatus('warning')
      setMessage(`${t('common:signUp.snackBar')}`)
      return
    }

    const newUser = {
      id: id.value,
      name: name.value,
      password: password.value,
      email: email.value,
      phone: phone.value,
    }

    const error = await onAddUser(newUser)
    console.log(error)
    if (error) {
      setSnackBarStatus('error')
      setMessage(`[Error]: ${error}`)
    }
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.signUpForm}>
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titleID')}`}
        value={id.value}
        onChange={id.valueChangeHandler}
        reset={id.reset}
        onBlur={id.inputBlurHandler}
        hasError={id.hasError}
        errorMessage={`${t('common:signUp.errorMessageID')}`}
        inputFocusRef={inputFocusRef}
      />
      <InputText
        type='password'
        formTitle={`${t('common:signUp.titlePW')}`}
        value={password.value}
        onChange={password.valueChangeHandler}
        reset={password.reset}
        onBlur={password.inputBlurHandler}
        hasError={password.hasError}
        errorMessage={`${t('common:signUp.errorMessagePW')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titleName')}`}
        value={name.value}
        onChange={name.valueChangeHandler}
        reset={name.reset}
        onBlur={name.inputBlurHandler}
        hasError={name.hasError}
        errorMessage={`${t('common:signUp.errorMessageName')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titlePhone')}`}
        value={phone.value}
        onChange={phone.valueChangeHandler}
        reset={phone.reset}
        onBlur={phone.inputBlurHandler}
        hasError={phone.hasError}
        errorMessage={`${t('common:signUp.errorMessagePhone')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('common:signUp.titleEmail')}`}
        value={email.value}
        onChange={email.valueChangeHandler}
        reset={email.reset}
        onBlur={email.inputBlurHandler}
        hasError={email.hasError}
        errorMessage={`${t('common:signUp.errorMessageEmail')}`}
      />

      <footer className={styles.footer}>
        <button type='submit' className={styles.signUpButton}>
          {`${t('common:signUp.button')}`}
        </button>
      </footer>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </form>
  )
}

export default SignUpForm
