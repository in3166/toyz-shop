import styles from './signUp.module.scss'
import Container from 'components/Container'
import { SignUpIcon } from 'assets/svgs'
import InputText from '../../components/InputText'
import useFormInput from '../../hooks/useFormInput'
import { validateSiginInInput } from './validateState'
import { FormEvent, useRef, useState } from 'react'
import i18n from 'utils/locale'
import { useI18n, useMount } from 'hooks'
import { NavLink } from 'react-router-dom'
import SnackBar from 'components/SnackBar'

const SignUp = (): JSX.Element => {
  const t = useI18n()
  const [message, setMessage] = useState('')

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

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(id, password)
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
            formTitle='이름'
            value={id}
            onChange={handleIdChange}
            reset={resetId}
            onBlur={handleIdBlur}
            hasError={idHasError}
            placeholder='이름을 입력하세요'
            inputFocusRef={inputFocusRef}
          />

          <InputText
            type='text'
            formTitle='아이디'
            value={id}
            onChange={handleIdChange}
            reset={resetId}
            onBlur={handleIdBlur}
            hasError={idHasError}
            placeholder='아이디를 입력하세요'
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
            type='password'
            formTitle='비밀번호 확인'
            value={password}
            onChange={handlePasswordChange}
            reset={resetPassword}
            onBlur={handlePasswordBlur}
            hasError={passwordHasError}
            placeholder='비밀번호를 입력하세요.'
          />

          <footer className={styles.footer}>
            <button type='button' className={styles.signUpButton}>
              회원가입
            </button>
          </footer>
        </form>
        {message && <SnackBar message={message} status='warning' setMessage={setMessage} />}
      </div>
    </main>
  )
}

export default SignUp
