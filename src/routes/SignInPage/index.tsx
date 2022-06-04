import styles from './signIn.module.scss'
import Container from 'components/Container'
import { SignInIcon } from 'assets/svgs'
import InputText from '../../components/InputText'
import useFormInput from '../../hooks/useFormInput'
import { validateSiginInInput } from './validateState'
import { FormEvent, useRef, useState } from 'react'
import i18n from 'utils/locale'
import { useI18n, useMount } from 'hooks'
import { NavLink, useNavigate } from 'react-router-dom'
import SnackBar from 'components/SnackBar'
import { useRecoil } from 'hooks/state'
import { currentUserState } from 'states/user'
import { useQuery } from 'react-query'
import { getUserDataApi } from 'services/user'
import { useSnackbar } from 'components/SnackBar/useSnackBar'
import store from 'store'

const SignIn = (): JSX.Element => {
  const [currentUser, setCurrentUser] = useRecoil(currentUserState)

  const t = useI18n()
  const inputFocusRef = useRef(null)
  // TODO: clearTimer 필요?
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
      handlePasswordBlur()
      handleIdBlur()
      return
    }
    getUserDataApi(id).then((res) => {
      console.log('res: ', res)
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
            formTitle='아이디'
            value={id}
            onChange={handleIdChange}
            reset={resetId}
            onBlur={handleIdBlur}
            hasError={idHasError}
            placeholder='아이디를 입력하세요'
            inputFocusRef={inputFocusRef}
          />

          <InputText
            type='password'
            formTitle='비밀번호'
            value={password}
            onChange={handlePasswordChange}
            reset={resetPassword}
            onBlur={handlePasswordBlur}
            hasError={passwordHasError}
            placeholder='비밀번호를 입력하세요.'
          />

          <footer className={styles.footer}>
            <button type='submit' className={styles.signInButton}>
              로그인
            </button>
          </footer>
        </form>
      </div>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </main>
  )
}

export default SignIn
