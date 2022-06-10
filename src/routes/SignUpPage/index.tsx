import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useI18n } from 'hooks'
import useFormInput from '../../hooks/useFormInput'
import { addUserDB } from 'services/user'

import { validateSiginUpInput } from './validateState'
import SnackBar from 'components/SnackBar'
import { useSnackbar } from 'components/SnackBar/useSnackBar'
import InputText from '../../components/InputText'
import { SignUpIcon } from 'assets/svgs'
import styles from './signUp.module.scss'

const SignUp = (): JSX.Element => {
  const t = useI18n()
  const [snackBarStatus, setSnackBarStatus] = useState('')
  const { message, setMessage } = useSnackbar(5000)
  const navigate = useNavigate()

  const inputFocusRef = useRef(null)
  const {
    value: id,
    reset: resetId,
    valueIsValid: idIsValid,
    hasError: idHasError,
    valueChangeHandler: handleIdChange,
    inputBlurHandler: handleIdBlur,
  } = useFormInput({ validateFunction: validateSiginUpInput, initialValue: '' })

  const {
    value: name,
    reset: resetName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: handleNameChange,
    inputBlurHandler: handleNameBlur,
  } = useFormInput({ validateFunction: validateSiginUpInput, initialValue: '' })

  const {
    value: password,
    reset: resetPassword,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: handlePasswordChange,
    inputBlurHandler: handlePasswordBlur,
  } = useFormInput({ validateFunction: validateSiginUpInput, initialValue: '' })

  const {
    value: phone,
    reset: resetPhone,
    valueIsValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: handlePhoneChange,
    inputBlurHandler: handlePhoneBlur,
  } = useFormInput({ validateFunction: validateSiginUpInput, initialValue: '' })

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!idIsValid || !passwordIsValid || !phoneIsValid) {
      setMessage('입력 정보가 올바르지 않습니다.')
      setSnackBarStatus('warning')
      return
    }

    const newUser = {
      id,
      name,
      phone,
      pw: password,
      role: 0,
      likes: [],
    }

    addUserDB(newUser)
      .then(() => {
        setMessage('회원가입 성공!')
        setSnackBarStatus('')
        setTimeout(() => {
          navigate('/signin')
        }, 1000)
      })
      .catch((err) => {
        setMessage(`회원가입 실패: ${err}`)
        setSnackBarStatus('error')
      })
  }

  return (
    <main className={styles.formWrapper}>
      <header className={styles.header}>
        <h3 className={styles.id}>
          <SignUpIcon />
        </h3>
      </header>

      <div className={styles.content}>
        <form onSubmit={handleOnSubmit}>
          <InputText
            type='text'
            formTitle={`${t('front:signUp.titleID')}`}
            value={id}
            onChange={handleIdChange}
            reset={resetId}
            onBlur={handleIdBlur}
            hasError={idHasError}
            placeholder={`${t('front:signUp.placeholderID')}`}
            inputFocusRef={inputFocusRef}
          />
          <InputText
            type='text'
            formTitle={`${t('front:signUp.titleName')}`}
            value={name}
            onChange={handleNameChange}
            reset={resetName}
            onBlur={handleNameBlur}
            hasError={nameHasError}
            placeholder={`${t('front:signUp.placeholderName')}`}
          />
          <InputText
            type='password'
            formTitle={`${t('front:signUp.titlePW')}`}
            value={password}
            onChange={handlePasswordChange}
            reset={resetPassword}
            onBlur={handlePasswordBlur}
            hasError={passwordHasError}
            placeholder={`${t('front:signUp.placeholderPW')}`}
          />

          <InputText
            type='text'
            formTitle={`${t('front:signUp.titlePhone')}`}
            value={phone}
            onChange={handlePhoneChange}
            reset={resetPhone}
            onBlur={handlePhoneBlur}
            hasError={phoneHasError}
            placeholder={`${t('front:signUp.placeholderPhone')}`}
          />

          <footer className={styles.footer}>
            <button type='submit' className={styles.signUpButton}>
              {`${t('front:signUp.button')}`}
            </button>
          </footer>
        </form>
        {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
      </div>
    </main>
  )
}

export default SignUp
