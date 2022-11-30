import { NextPage } from 'next'
import { useState, FormEvent } from 'react'

import useFormInput from 'hooks/useFormInput'
import { addUserDB } from 'services/user'

import SnackBar from 'components/_shared/SnackBar'
import { useSnackbar } from 'components/_shared/SnackBar/useSnackBar'
import { validateId, validateName, validatePassword, validatePhoneNumber } from 'utils/validates/validateInput'
import { SignUpIcon } from 'public/svgs'
import styles from './signUp.module.scss'
import SignUpForm from './SignUpForm'
import { useI18n } from 'hooks'
import { useRouter } from 'next/router'

const SignUp: NextPage = () => {
  const t = useI18n()
  const [snackBarStatus, setSnackBarStatus] = useState('')
  const { message, setMessage } = useSnackbar(5000)
  const router = useRouter()

  const id = useFormInput({ validateFunction: validateId })
  const name = useFormInput({ validateFunction: validateName })
  const password = useFormInput({ validateFunction: validatePassword })
  const phone = useFormInput({ validateFunction: validatePhoneNumber })

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!id.valueIsValid || !password.valueIsValid || !phone.valueIsValid || !name.valueIsValid) {
      setSnackBarStatus('warning')
      setMessage(`${t('common:signUp.snackBar')}`)
      return
    }

    const newUser = {
      id: id.value,
      name: name.value,
      phone: phone.value,
      pw: password.value,
      role: 0,
      likes: [],
    }

    addUserDB(newUser)
      .then(() => {
        setSnackBarStatus('')
        setMessage('회원가입 성공!')
        setTimeout(() => {
          router.push('/signin')
        }, 1000)
      })
      .catch((err) => {
        setSnackBarStatus('error')
        setMessage(`${err}`)
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
        <SignUpForm onSubmit={handleOnSubmit} id={id} name={name} phone={phone} password={password} />
        {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
      </div>
    </main>
  )
}

export default SignUp
