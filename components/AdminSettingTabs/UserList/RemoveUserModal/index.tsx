import Modal from 'components/_shared/Modal'
import { useI18n } from 'hooks'
import { Dispatch, SetStateAction, useCallback } from 'react'
import { BASE_URL } from 'src/fixtures'
import { IUser } from 'types/user'
import styles from './removeUserModal.module.scss'

interface IRemoveUserModalProps {
  onClose: () => void
  setMessage: (text: string) => void
  setUsers: Dispatch<SetStateAction<IUser[]>>
  id: string
}

const RemoveUserModal = ({ onClose, setMessage, setUsers, id }: IRemoveUserModalProps) => {
  const t = useI18n()
  const handleClickBuy = useCallback(async () => {
    fetch(`${BASE_URL}/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        setUsers((prev) => prev.filter((user) => user.id !== id))
        const result = await response.json()
        console.log('rsponse del', result)
        if (response.ok) setMessage('삭제 완료!')
      })
      .catch((err) => {
        setMessage(`삭제 실패: ${err}`)
      })
      .finally(() => {
        onClose()
      })
  }, [id, onClose, setMessage, setUsers])

  return (
    <Modal onCancel={onClose}>
      <header className={styles.header}>{`${t('common:removeUserModal.header')}`}</header>
      <div className={styles.content}>{`${t('common:removeUserModal.content')}`}</div>
      <footer className={styles.footer}>
        <button type='button' className={styles.cancelButton} onClick={onClose}>
          {`${t('common:removeUserModal.closeButton')}`}
        </button>
        <button type='button' className={styles.confirmButton} onClick={handleClickBuy}>
          {`${t('common:removeUserModal.confirmButton')}`}
        </button>
      </footer>
    </Modal>
  )
}

export default RemoveUserModal
