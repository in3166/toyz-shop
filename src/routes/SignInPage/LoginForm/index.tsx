import InputText from 'components/InputText'
import { useI18n } from 'hooks'
import { useRef, FormEvent } from 'react'
import { IFormInput } from 'types/user'
import styles from './signIn.module.scss'

interface ILoginFormProps {
  onSubmit: (e: FormEvent) => void
  id: IFormInput
  password: IFormInput
}

const LoginForm = ({ onSubmit, id, password }: ILoginFormProps) => {
  const inputFocusRef = useRef(null)
  const t = useI18n()

  return (
    <form onSubmit={onSubmit}>
      <InputText
        type='text'
        formTitle={`${t('front:signIn.titleID')}`}
        value={id.value}
        onChange={id.valueChangeHandler}
        reset={id.reset}
        onBlur={id.inputBlurHandler}
        hasError={id.hasError}
        errorMessage={`${t('front:signIn.errorMessageID')}`}
        inputFocusRef={inputFocusRef}
      />

      <InputText
        type='password'
        formTitle={`${t('front:signIn.titlePW')}`}
        value={password.value}
        onChange={password.valueChangeHandler}
        reset={password.reset}
        onBlur={password.inputBlurHandler}
        hasError={password.hasError}
        errorMessage={`${t('front:signIn.errorMessagePW')}`}
      />

      <footer className={styles.footer}>
        <button type='submit' className={styles.signInButton}>
          {`${t('front:signIn.signIn')}`}
        </button>
      </footer>
    </form>
  )
}

export default LoginForm
