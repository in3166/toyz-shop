import { FormEvent, useRef, useState } from 'react'
import store from 'store'

import useFormInput from '../../hooks/useFormInput'
import { useI18n } from 'hooks'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { validateSiginInInput } from './validateState'
import { getUserDataDB } from 'services/user'

import SnackBar from 'components/SnackBar'
import { useSnackbar } from 'components/SnackBar/useSnackBar'
import InputText from '../../components/InputText'
import { SignInIcon } from 'assets/svgs'
import styles from './signIn.module.scss'

const SignIn = (): JSX.Element => {
  const [, setCurrentUser] = useRecoil(currentUserState)

  const t = useI18n()
  const inputFocusRef = useRef(null)

  const [snackBarStatus, setSnackBarStatus] = useState('')
  const { message, setMessage, clearTimer } = useSnackbar(5000)

  const {
    value: id,
    reset: resetId,
    valueIsValid: idIsValid,
    hasError: idHasError,
    valueChangeHandler: handleIdChange,
    inputBlurHandler: handleIdBlur,
  } = useFormInput({ validateFunction: validateSiginInInput, initialValue: '' })

  const {
    value: password,
    reset: resetPassword,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: handlePasswordChange,
    inputBlurHandler: handlePasswordBlur,
  } = useFormInput({ validateFunction: validateSiginInInput, initialValue: '' })

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!idIsValid || !passwordIsValid) {
      setMessage('ID나 Password가 올바르지 않습니다.')
      setSnackBarStatus('warning')
      return
    }

    getUserDataDB(id).then((res) => {
      if (res.length < 1) {
        setMessage(`로그인 실패! \n (ID: 'user1'이나 'admin'을 입력해주세요.)`)
        setSnackBarStatus('error')
        return
      }
      clearTimer()
      store.set('currentUser', res[0])
      setCurrentUser(res[0])
    })
  }

  return (
    <main className={styles.formWrapper}>
      <header className={styles.header}>
        <h3 className={styles.id}>
          <SignInIcon />
        </h3>
      </header>

      <div className={styles.content}>
        <form onSubmit={handleOnSubmit}>
          <InputText
            type='text'
            formTitle={`${t('front:signIn.titleID')}`}
            value={id}
            onChange={handleIdChange}
            reset={resetId}
            onBlur={handleIdBlur}
            hasError={idHasError}
            placeholder={`${t('front:signIn.placeholderID')}`}
            inputFocusRef={inputFocusRef}
          />

          <InputText
            type='password'
            formTitle={`${t('front:signIn.titlePW')}`}
            value={password}
            onChange={handlePasswordChange}
            reset={resetPassword}
            onBlur={handlePasswordBlur}
            hasError={passwordHasError}
            placeholder={`${t('front:signIn.placeholderPW')}`}
          />

          <footer className={styles.footer}>
            <button type='submit' className={styles.signInButton}>
              {`${t('front:signIn.signIn')}`}
            </button>
          </footer>
        </form>
      </div>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </main>
  )
}

export default SignIn
