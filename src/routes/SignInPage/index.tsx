import { useState, FormEvent } from 'react'
import store from 'store'

import { useRecoil } from 'hooks/state'
import useFormInput from 'hooks/useFormInput'
import { currentUserState } from 'states/user'
import { getUserDataDB } from 'services/user'

import SnackBar from 'components/SnackBar'
import { useSnackbar } from 'components/SnackBar/useSnackBar'
import { validateId, validatePassword } from 'utils/validates/validateInput'
import { SignInIcon } from 'assets/svgs'
import styles from './signIn.module.scss'
import LoginForm from './LoginForm'

const SignIn = (): JSX.Element => {
  const [, setCurrentUser] = useRecoil(currentUserState)

  const id = useFormInput({ validateFunction: validateId, initialValue: '' })
  const password = useFormInput({ validateFunction: validatePassword, initialValue: '' })

  const [snackBarStatus, setSnackBarStatus] = useState('')
  const { message, setMessage } = useSnackbar(5000)

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!id.valueIsValid || !password.valueIsValid) {
      setSnackBarStatus('warning')
      setMessage('ID나 Password가 올바르지 않습니다.')
      return
    }

    getUserDataDB(id.value).then((res) => {
      if (res.length < 1) {
        setSnackBarStatus('error')
        setMessage(`로그인 실패! \n (ID: 'user1'이나 'admin'을 입력해주세요.)`)
        return
      }
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
        <LoginForm onSubmit={handleOnSubmit} id={id} password={password} />
      </div>
      {message && <SnackBar message={message} status={snackBarStatus} setMessage={setMessage} />}
    </main>
  )
}

export default SignIn
