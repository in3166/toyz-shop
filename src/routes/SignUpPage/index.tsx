import styles from './signUp.module.scss'
import Container from 'components/Container'
import { SignUpIcon } from 'assets/svgs'
import InputText from '../../components/InputText'
import useFormInput from '../../hooks/useFormInput'
import { validateSiginInInput } from './validateState'
import { FormEvent, useRef, useState } from 'react'
import i18n from 'utils/locale'
import { useI18n, useMount } from 'hooks'
import { NavLink, useNavigate } from 'react-router-dom'
import SnackBar from 'components/SnackBar'
import { addUserApi } from 'services/user'
import { useSnackbar } from 'components/SnackBar/useSnackBar'

const SignUp = (): JSX.Element => {
  const t = useI18n()
  const [snackBarStatus, setSnackBarStatus] = useState('')
  const { message, setMessage, clearTimer } = useSnackbar(5000)
  const navigate = useNavigate()

  const inputFocusRef = useRef(null)
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

  const {
    value: phone,
    reset: resetPhone,
    valueIsValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: handlePhoneChange,
    inputBlurHandler: handlePhoneBlur,
  } = useFormInput({ validateFunction: validateSiginInInput, initialValue: '' })

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!idIsValid || !passwordIsValid || !phoneIsValid) {
      setMessage('입력 정보가 올바르지 않습니다.')
      setSnackBarStatus('warning')
      return
    }

    const newUser = {
      id,
      phone,
      pw: password,
      role: 0,
      likes: [],
    }

    addUserApi(newUser)
      .then(() => {
        setMessage('회원가입 성공!')
        setSnackBarStatus('')
        setTimeout(() => {
          navigate('/siginin')
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
            formTitle='ID'
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

          <InputText
            type='text'
            formTitle='전화번호'
            value={phone}
            onChange={handlePhoneChange}
            reset={resetPhone}
            onBlur={handlePhoneBlur}
            hasError={phoneHasError}
            placeholder='전화번호를 입력하세요.'
          />

          <footer className={styles.footer}>
            <button type='submit' className={styles.signUpButton}>
              회원가입
            </button>
          </footer>
        </form>
        {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
      </div>
    </main>
  )
}

export default SignUp
