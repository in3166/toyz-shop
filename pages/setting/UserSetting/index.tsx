import { FormEvent, useRef, useState } from 'react'
import store from 'store'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useI18n } from 'hooks'
import { useRecoil } from 'hooks/state'
import useFormInput from 'hooks/useFormInput'
import { updateUserDBInfo } from 'services/user'
import { currentUserState } from 'stores/user'
import { validateName, validatePassword, validatePhoneNumber } from 'utils/validates/validateInput'

import InputText from 'components/_shared/InputText'
import SnackBar from 'components/_shared/SnackBar'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import styles from './userSetting.module.scss'

const UserSetting = () => {
  const t = useI18n()
  const inputFocusRef = useRef(null)

  const [snackBarStatus, setSnackBarStatus] = useState('')
  const { message, setMessage } = useSnackbar(5000)
  const [currentUser, setCurrentUser] = useRecoil(currentUserState)

  const {
    value: name,
    reset: resetName,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: handleNameChange,
    inputBlurHandler: handleNameBlur,
  } = useFormInput({ validateFunction: validateName, initialValue: currentUser.data.name })

  const {
    value: phone,
    reset: resetPhone,
    valueIsValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: handlePhoneChange,
    inputBlurHandler: handlePhoneBlur,
  } = useFormInput({ validateFunction: validatePhoneNumber, initialValue: currentUser.data.phone })

  const {
    value: password,
    reset: resetPassword,
    valueIsValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: handlePasswordChange,
    inputBlurHandler: handlePasswordBlur,
  } = useFormInput({ validateFunction: validatePassword, initialValue: '' })

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!nameIsValid || !phoneIsValid || !passwordIsValid) {
      handlePasswordBlur()
      handlePhoneBlur()
      handleNameBlur()
      setSnackBarStatus('warning')
      setMessage('입력 정보가 올바르지 않습니다.')
      return
    }

    updateUserDBInfo(currentUser.data.id, currentUser.key, password, name, phone)
      .then(() => {
        store.remove('currentUser')
        setCurrentUser((prev) => {
          const newUser = { ...prev, data: { ...prev.data, name, phone } }
          store.set('currentUser', newUser)
          return newUser
        })
        setSnackBarStatus('')
        setMessage('유저 정보 수정 완료!')
      })
      .catch((err) => {
        setSnackBarStatus('error')
        setMessage(`${err}`)
      })
  }

  return (
    <article className={styles.wrapper}>
      <h2>{`${t('common:userInfo.title')}`}</h2>
      <form onSubmit={handleOnSubmit}>
        <InputText type='text' formTitle={`${t('common:signUp.titleID')}`} value={currentUser.data.id} read />
        <InputText
          type='text'
          formTitle={`${t('common:signUp.titleName')}`}
          value={name}
          onChange={handleNameChange}
          reset={resetName}
          onBlur={handleNameBlur}
          hasError={nameHasError}
          errorMessage={`${t('common:signUp.errorMessageName')}`}
          inputFocusRef={inputFocusRef}
        />
        <InputText
          type='text'
          formTitle={`${t('common:signUp.titlePhone')}`}
          value={phone}
          onChange={handlePhoneChange}
          reset={resetPhone}
          onBlur={handlePhoneBlur}
          hasError={phoneHasError}
          errorMessage={`${t('common:signUp.errorMessagePhone')}`}
        />
        <InputText
          type='password'
          formTitle={`${t('common:signUp.titlePW')}`}
          value={password}
          onChange={handlePasswordChange}
          reset={resetPassword}
          onBlur={handlePasswordBlur}
          hasError={passwordHasError}
          errorMessage={`${t('common:signUp.errorMessagePW')}`}
        />

        <footer>
          <button type='submit'>수정</button>
        </footer>
      </form>

      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </article>
  )
}

export const getStaticProps = async ({ locale, locales }: { locale: string; locales: string[] }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locales,
    },
  }
}

export default UserSetting
