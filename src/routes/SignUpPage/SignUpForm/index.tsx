import React, { FormEvent, useRef } from 'react'
import { useI18n } from 'hooks'

import InputText from 'components/InputText'
import styles from './signUp.module.scss'
import { IFormInput } from 'types/user'

interface ISignUpFormProps {
  onSubmit: (e: FormEvent) => void
  id: IFormInput
  password: IFormInput
  name: IFormInput
  phone: IFormInput
}

const SignUpForm = ({ onSubmit, id, password, name, phone }: ISignUpFormProps) => {
  const t = useI18n()
  const inputFocusRef = useRef(null)

  return (
    <form onSubmit={onSubmit}>
      <InputText
        type='text'
        formTitle={`${t('front:signUp.titleID')}`}
        value={id.value}
        onChange={id.valueChangeHandler}
        reset={id.reset}
        onBlur={id.inputBlurHandler}
        hasError={id.hasError}
        errorMessage={`${t('front:signUp.errorMessageID')}`}
        inputFocusRef={inputFocusRef}
      />
      <InputText
        type='password'
        formTitle={`${t('front:signUp.titlePW')}`}
        value={password.value}
        onChange={password.valueChangeHandler}
        reset={password.reset}
        onBlur={password.inputBlurHandler}
        hasError={password.hasError}
        errorMessage={`${t('front:signUp.errorMessagePW')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('front:signUp.titleName')}`}
        value={name.value}
        onChange={name.valueChangeHandler}
        reset={name.reset}
        onBlur={name.inputBlurHandler}
        hasError={name.hasError}
        errorMessage={`${t('front:signUp.errorMessageName')}`}
      />
      <InputText
        type='text'
        formTitle={`${t('front:signUp.titlePhone')}`}
        value={phone.value}
        onChange={phone.valueChangeHandler}
        reset={phone.reset}
        onBlur={phone.inputBlurHandler}
        hasError={phone.hasError}
        errorMessage={`${t('front:signUp.errorMessagePhone')}`}
      />

      <footer className={styles.footer}>
        <button type='submit' className={styles.signUpButton}>
          {`${t('front:signUp.button')}`}
        </button>
      </footer>
    </form>
  )
}

export default SignUpForm
